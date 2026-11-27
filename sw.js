/* RIKU service worker — lets the installed player open without a connection, without ever holding on to an old version.
 *
 * - The page itself: network first (bypassing the browser's HTTP cache), stored copy only when offline or when the
 *   network takes longer than PAGE_TIMEOUT_MS. If the stored copy was used and a newer page arrives afterwards,
 *   open windows are told, so the player can offer to reload.
 * - Icons and the manifest: stored copy first.
 * - Everything on other sites (radio, podcasts, directories, fonts) is left alone and goes straight to the network.
 * Change SW_VERSION only when this file's logic changes; ordinary player updates need only index.html. */
const SW_VERSION = 'sw-1';
const CACHE = 'riku-shell-1';
const PAGE_TIMEOUT_MS = 4000;
const STATIC = ['manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'apple-touch-icon.png', 'favicon-32.png'];
const scopeUrl = (p) => new URL(p, self.registration.scope).href;
const PAGE_KEY = () => scopeUrl('./');

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await Promise.all([PAGE_KEY()].concat(STATIC.map(scopeUrl)).map(async (u) => {
      try { const res = await fetch(new Request(u, { cache: 'reload' })); if (res.ok) await cache.put(u, res); } catch (e) { /* offline during install: fill later */ }
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.startsWith('riku-') && k !== CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'riku-version' && event.source) event.source.postMessage({ type: 'riku-sw-version', version: SW_VERSION });
});

async function notifyUpdated() {
  for (const c of await self.clients.matchAll({ type: 'window' })) c.postMessage({ type: 'riku-updated' });
}

async function servePage(event) {
  const cache = await caches.open(CACHE), key = PAGE_KEY();
  const network = fetch(new Request(event.request.url, { cache: 'no-cache', credentials: 'same-origin' }))
    .then(async (res) => { if (res.ok) await cache.put(key, res.clone()); return res; });
  const cached = await cache.match(key);
  if (!cached) {
    return network.catch(() => new Response('<!DOCTYPE html><meta charset="utf-8"><title>RIKU Player</title><body style="font-family:system-ui;background:#070d1c;color:#dbe7fb;padding:24px"><h1>RIKU needs a connection the first time</h1><p>Open the player once while online; after that it also opens without a connection.</p>', { status: 503, headers: { 'content-type': 'text/html; charset=utf-8' } }));
  }
  const cachedCopy = cached.clone();
  let timer;
  const timeout = new Promise((r) => { timer = setTimeout(() => r('timeout'), PAGE_TIMEOUT_MS); });
  const first = await Promise.race([network.catch(() => 'failed'), timeout]);
  clearTimeout(timer);
  if (first instanceof Response && first.ok) return first;
  // Answered from the stored copy. If the network delivers a different page later, say so.
  event.waitUntil(network.then(async (res) => {
    if (!res.ok) return;
    const [fresh, old] = await Promise.all([res.clone().text(), cachedCopy.text()]);
    if (fresh !== old) await notifyUpdated();
  }).catch(() => {}));
  return cached;
}

async function serveStatic(request) {
  const cache = await caches.open(CACHE), hit = await cache.match(request, { ignoreSearch: true });
  if (hit) return hit;
  const res = await fetch(request);
  if (res.ok) cache.put(request, res.clone()).catch(() => {});
  return res;
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (req.mode === 'navigate') { event.respondWith(servePage(event)); return; }
  const name = url.pathname.split('/').pop();
  if (STATIC.includes(name)) event.respondWith(serveStatic(req));
});
