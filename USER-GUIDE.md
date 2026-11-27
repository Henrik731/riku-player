# 陸 RIKU Player — User Guide

RIKU is a personal music player that runs in a web browser. It plays your own music files, internet radio and podcasts, and corrects the sound for your headphones.

**Address:** https://henrik731.github.io/riku-player/

It works on iPhone, Mac and Windows from the same address, and can be installed as an app on each of them. Your music is never uploaded.

---

## 1. Getting started

### Installing it as an app

**iPhone:** open the address in Safari (or Chrome), tap **Share → Add to Home Screen**, and open the player from the new 陸 icon.

**Mac:** in Safari choose **File → Add to Dock**; in Chrome, click the install icon at the right of the address bar (or **⋮ → Cast, save and share → Install page as app**).

**Windows:** in Edge choose **⋯ → Apps → Install this site as an app**; in Chrome, use the install icon in the address bar. On a work laptop this is often allowed even when installing ordinary software is not.

Once installed, the player opens in its own window, and it **opens even without a connection**: your imported music, playlists and settings are there, while radio and podcasts wait for the network.

**Each installed copy keeps its own data.** On the iPhone, the Home Screen app does not share music, favourites or profiles with Safari or with a second icon. Pick one icon per device and stay with it.

The version number is shown at the bottom of the side panel, for example *RIKU Player · version 2026.11.27-1558*.

### First sound in one minute

1. Press **Add demo**. Two test tracks appear in the queue.
2. Press the large **Play** button.
3. Choose your headphones under **Headphones** in the sound panel.

---

## 2. The player at a glance

| Part | What it does |
|---|---|
| **Menu row** | Open files, Add demo, the three finish swatches, Car, Compact, Equaliser |
| **Display** | Playback state, elapsed time, track or station name, spectrum, seek bar |
| **Status chip** (top right of the display) | Says whether the equaliser is really in the sound path |
| **Lamps** | EQ, Tone, Radio and Peak indicators |
| **Transport** | Previous, Play/Pause, Stop, Next, volume |
| **Second row** | Shuffle, Repeat (off / all / one), Mute |
| **Sound settings** | A bar that folds open to show listening profile, headphones, EQ on/off, tone faders and the advanced equaliser |
| **Equaliser, import and diagnostics** | Advanced tools, folded away until needed |
| **Side panel** | Queue, Library, Radio and Podcasts tabs |

### What the lamps mean

| Lamp | Colour | Meaning |
|---|---|---|
| **EQ** | Green | The equaliser is in the sound path |
| | Amber | Bypassed (direct radio) or the audio engine is suspended |
| | Red | The equaliser could not be built |
| | Off | EQ switched off, flat, or nothing playing yet |
| **Tone** | Blue | At least one tone fader is off centre |
| **Radio** | Green | Station playing |
| | Amber | Connecting or reconnecting |
| | Red | Station failed |
| **Peak** | Red | The signal reached full scale; lower the preamp or tone |

---

## 3. Playing your own music

### Adding music

- Press **Open files…** and choose audio files, or drag files onto the page on a computer.
- The files are **copied into this browser's storage on this device**. They are not uploaded anywhere.
- A USB stick works the same way: choose the files from it, and they stay available after the stick is removed.
- Title, artist, album, year, track number and cover are read from the file where present.
- A file this browser cannot decode is refused at import, with its name shown. Which formats play (MP3, AAC/M4A, WAV, FLAC, Ogg and others) depends on the browser.

### Queue, library and playlists

These are three different things:

| | What it is | Removing from it |
|---|---|---|
| **Library** | The music stored in this browser | Deletes the stored music (the bin icon, pressed twice) |
| **Queue** | What will play now, in order | Only removes the entry (×); the music stays in the library |
| **Playlist** | A saved, named queue | Deletes the list only; the music stays in the library |

### The Library tab

- **Search** by title, artist or album.
- **View** as tracks, albums, artists or favourites.
- **Sort** by recently added, title, artist or album.
- Tap a track to play it. **+** adds it to the queue. **☆** marks a favourite. **✎** edits its details and cover.
- **Play all shown** replaces the queue with the current list.

Editing details changes the library entry only. Your original file is never rewritten.

### The Queue tab

- Tap a track to play it; **×** removes it from the queue.
- **Save queue as playlist** stores the current queue under a name.
- **Load** brings a saved playlist back. If a track was deleted from the library, the rest loads and you are told how many were skipped.
- The queue is restored when you reopen the player. It never starts playing by itself.

---

## 4. Internet radio

Open the **Radio** tab.

### Finding stations

1. Fill in any of: station name, country, genre, language. Filled-in filters apply together.
2. Press **Search**.
3. Tap a station to play it. Tap **☆** to keep it as a favourite.
4. **Show more stations** loads further results when more exist.

By default, results only include stations that report **128 kbps or more**. Tick **Also show stations below 128 kbps or with no bitrate reported** to see the rest. The bitrate is what the public directory reports; it is not measured by the player.

If a search shows nothing, the line under the Search button explains why (for example, how many stations were dropped for low bitrate).

### Favourites and your own stream addresses

- Favourites are listed at the top of the Radio tab and are kept even when no bitrate is known.
- **▲ and ▼** change their order. The order matters: Next and Previous step through favourites in this order, and car mode shows them in this order.
- Under **Add a stream address yourself** you can add a station by its stream address. It must be the audio stream itself; a station's ordinary web page address usually will not play.

### Radio and the equaliser

Some stations allow the player to process their sound; others do not.

| Status chip | Meaning |
|---|---|
| **EQ CONFIGURED** | The station plays through your headphone correction and tone settings |
| **EQ BYPASSED** | The station only allows direct playback. Your settings are selected but not applied |

When bypassed, **Retry radio with EQ** appears in the sound panel. Most stations that refuse once will refuse again.

### When a station drops

The player reconnects by itself up to three times, then stops and shows **Retry station**. The message lists possible causes; the browser does not say which one applies. Pause, Stop, choosing another station or starting local music cancels any reconnection.

In radio mode, **Next and Previous switch between your favourite stations**, in the order of the favourites list, wrapping round at the ends. This works with the on-screen buttons, the lock screen and, where the phone passes them on, headphone or steering-wheel buttons.

---

## 5. Podcasts

Open the **Podcasts** tab.

### Finding and following podcasts

1. When you open the tab, the **most popular podcasts** in the chosen country are listed automatically.
2. The **topic buttons** (News, History, Society, Comedy, Sport, True crime, Science, Business, Health) show the most popular podcasts on that topic. If Apple's chart cannot be loaded, the player searches with a Finnish keyword for the topic instead (for example *historia*), and says so.
3. To find a particular podcast, type its name or a topic and press **Search**. Results come from Apple's podcast directory, which lists most Finnish podcasts, including Yle's.
4. The country list next to the search box chooses the directory: **Finland** (the default) or **United States**. Popular in Finland is not quite the same as Finnish-language, but mostly overlaps.
5. Press **☆** to follow a podcast. Followed podcasts are listed under **Your podcasts**.

### Episodes

- Tap a podcast to see its episodes, newest first, with date and length.
- Tap an episode to play it. It continues where you stopped last time.
- **✓** marks an episode as played, or unmarks it. An episode played to the end is marked automatically.
- **‹ All podcasts** returns to the list.

### Playing

- **−15 s** and **+30 s** skip back and forward. **Speed** cycles through 1×, 1.25× and 1.5×.
- In a podcast, **Previous and Next skip back 15 seconds and forward 30 seconds**, on screen, on the lock screen, in car mode and with the car's own buttons.
- The episode and podcast name appear on the lock screen and the car display.
- Episodes stream from each podcast's own host; nothing is downloaded, so you need an internet connection.
- Starting radio or your own music stops the podcast and remembers the place.

### Podcasts and the equaliser

As with radio, some podcast hosts allow the player to process their audio and some do not. If not, the status chip says **EQ BYPASSED** and the episode plays without your headphone correction and tone settings.

### If a search finds nothing

The line under the Search button explains what happened. If Apple's directory cannot be reached, the cause may be the network or Apple refusing requests from web pages; try again later.

## 6. Sound

All sound controls sit under the **Sound settings** bar below the player. Tap the bar to fold them away or open them again; folded, it still shows the current profile or headphones. On a phone it starts folded, so the Queue, Library and Radio tabs are close to the top. Your choice is remembered on each device.

### Headphones

Choose your headphones under **Headphones**. Each correction comes from the public AutoEQ project, and its measurement source is shown underneath.

| Headphones | Variant |
|---|---|
| Sennheiser HD 6XX | |
| Beyerdynamic DT 1990 Pro | balanced pads / analytic pads |
| Beyerdynamic DT 770 Pro | 80 Ω |
| AKG K701 | |
| Audio-Technica ATH-M50 | original, not M50x |
| 7Hz Timeless | original |
| Shure SE846 | blue / white / black filter |

A correction is a starting point. Individual units, pads, tips and fit differ.

**EQ on** switches all processing off and on, which is useful for a quick before-and-after comparison.

### Tone faders

Five faders add your own taste on top of the correction, without changing it:

| Fader | Around | Typical use |
|---|---|---|
| Bass | 100 Hz | More or less low-end weight |
| Warmth | 300 Hz | Fullness of voices and guitars |
| Mid | 1 kHz | Forwardness |
| Presence | 3.5 kHz | Clarity or harshness |
| Air | 9 kHz | Sparkle |

- Each moves ±6 dB in half-dB steps.
- **Flat** resets all five. Double-click a fader to reset that one.
- The settings stay when you change headphones.

### Listening profiles

A profile stores a whole setup: headphones, tone faders, any filter edits, EQ on/off and the preamp choice.

1. Set everything the way you like it.
2. Open **Save and manage profiles**, type a name, press **Save as new**.
3. Later, pick the profile from the **Listening profile** list.

- **Changed since saved** appears when you alter something. **Update selected** stores the change.
- **Rename selected** uses the name typed in the box. **Delete selected** needs a second press.
- A profile never moves the volume slider. A different setup can still sound louder or quieter at the same slider position.

### Preamp

Boosting frequencies can cause clipping, so the player lowers the overall level to make room. **Auto** does this for you. **Manual** lets you set the value; a warning appears if clipping is predicted. Find it under **Equaliser, import and diagnostics**.

---

## 7. Advanced equaliser

Open **Equaliser, import and diagnostics** (or press **Equaliser** in the menu row).

- **Graph:** the combined response of correction and tone. The dashed line includes the preamp.
- **Filters:** each has an on/off box, a type (PK peaking, LSC low shelf, HSC high shelf), a frequency, a gain and a Q. Edits apply immediately. Values outside the limits are refused, not silently changed.
- **Revert to preset** returns to the unmodified correction.
- **Import or export AutoEQ text:** paste ParametricEQ text or load a `.txt` file, then **Apply text**. If any line is wrong, nothing is applied and the errors are listed by line number. **Put current setup in the box** and **Copy box** export your setup.

---

## 8. Checking that the equaliser really works

Under **Diagnostics** there are three tests. Start playback first.

| Test | What it tells you |
|---|---|
| **Quieter for 3 seconds** | If you hear the level drop, sound is passing through the player's processing |
| **Measure EQ on live audio** | Compares the sound before and after the equaliser with the expected curve. A pass turns the chip to **EQ MEASURED** |
| **Run filter self-test** | Checks that this browser's filters match the calculated values |

A quick listening check: play the pink-noise demo track and select **Test: −12 dB above 1 kHz** under Headphones. The treble should become clearly duller.

None of these tests can see what happens after the browser, such as Bluetooth or a DAC.

---

## 9. Car mode

Press **Car** in the menu row. The player switches to a dark, full-screen view with large controls. It never opens by itself.

- **Radio / Music / Podcasts** at the top chooses what the tiles show: your favourite stations, your saved playlists and current queue, or your followed podcasts.
- With **Podcasts**, a **Continue** tile resumes the episode you last listened to. Tapping a followed podcast continues an episode you are in the middle of, or else starts its newest unplayed episode.
- **Previous, Play/Pause, Next** fill the middle. In radio they switch favourite stations; in music they skip tracks; in a podcast they skip back 15 and forward 30 seconds.
- **Tiles** start a station or playlist with one tap. The one playing is outlined.
- The status line shows *Playing*, *Reconnecting…*, or *without EQ* for stations that refuse processing.
- The screen is kept on while car mode is open, where the browser allows it. If it still turns off, change Auto-Lock in the phone settings.
- **Exit** returns to the normal player. Playback continues.

Set up favourites, their order and playlists while parked. Use the steering-wheel buttons where your car supports them, and follow the rules for using a mounted phone while driving.

## 10. Look and layout

- **Compact** shrinks the player to display, lamps, transport and volume. **Full view** brings everything back.
- The three round swatches switch between **silver**, **graphite** and **champagne** finishes.
- Both choices are remembered on each device.

---

## 11. Lock screen and keyboard

**Lock screen and headphone buttons:** the track or station name is passed to the phone or computer, with play, pause, next and previous (favourite stations in radio, tracks in music, 15/30-second skips in podcasts) and seeking for music and podcasts.

**Keyboard shortcuts** (when not typing in a field):

| Key | Action |
|---|---|
| Space | Play / pause |
| ← / → | Seek 5 seconds back / forward |
| M | Mute |
| O | Open files |

---

## 12. Where your data lives

- **Everything is stored per device and per browser:** music library, playlists, queue, radio favourites, followed podcasts and listening positions, listening profiles and settings.
- Your iPhone, Mac and work laptop each keep their own set. Nothing syncs between them.
- **Local music never leaves the device.** Network connections are made only for radio and podcast searches, and for radio and podcast playback. Podcast searches go to Apple's podcast directory.
- **The library is a working copy, not a backup.** A browser can clear stored data, for example when the device runs short of space or when website data is cleared. Keep your original music files.
- The Library tab shows how much storage is in use.

---

## 13. Updating the player

The player lives in the GitHub repository `Henrik731/riku-player`. It consists of `index.html` (the player itself), `sw.js` (what lets it open offline), `manifest.webmanifest` and five icon files.

**Usual update: only `index.html`.**

1. Open the repository on github.com.
2. **Add file → Upload files**, drop in the new file(s), **Commit changes**.
3. Wait a minute or two, then open the player while connected. It fetches the new version by itself each time it starts with a connection.

If the network is slow when the player starts (over about 4 seconds), it opens the stored version straight away, downloads the new one in the background, and shows **"A newer version of RIKU has been downloaded"** with a **Reload now** button. Reloading interrupts playback, so choose **Later** if you are listening.

Occasionally an update also includes `sw.js` or the icons; the update notes will say so. Check the version number at the bottom of the side panel to confirm which version is running.

Updating replaces only the player. Your stored music, favourites and profiles stay.

---

## 14. Troubleshooting

| Problem | What to try |
|---|---|
| No sound after pressing Play | Press Play again; browsers need a tap before audio starts. Check Mute and the volume slider |
| Chip says **AUDIO SUSPENDED** | Press Play. This happens after a phone call or when the browser paused audio |
| Changing headphones makes no audible difference | Check the EQ lamp is green and **EQ on** is ticked. On radio, check the chip does not say **EQ BYPASSED**. Run the "Quieter" test |
| A podcast episode will not play | The host may be unavailable or block web players. Try another episode; if all fail, the host is the likely cause |
| Podcast search says the directory could not be reached | Check the internet connection, then try again later |
| Radio search finds nothing | Read the line under the Search button. Try fewer filters, or tick the low-bitrate box |
| "The radio directory could not be reached" | Check the internet connection; a workplace network may block the directory |
| A station will not play | The station may be off air, use a format the browser cannot play, or refuse web players. Try another entry for the same station |
| A file is refused at import | This browser cannot decode that format. Try another browser, or convert the file |
| The phone still shows an old version | Open the player while connected and check the version number. If the network was slow, wait for the update notice and press Reload now |
| The player does not open at all without a connection | It must have been opened once online since the offline feature was added |
| Imported music has disappeared | The browser cleared its stored data. Import the files again from your originals |
| Peak lamp flashes red | Lower the tone faders, or set the preamp to Auto |
| Tone faders are hard to move on the phone | Use Compact off, hold the fader cap, and slide vertically |
| Steering-wheel buttons do nothing | Not every car passes them on to phone apps over Bluetooth. Check they work with another audio app first |
| Car mode screen turns off | The browser did not allow the screen to stay on; change Auto-Lock in the phone settings |

---

## 15. Known limits

- The equaliser cannot be applied to audio from other apps such as Spotify or Apple Music.
- Radio stations that do not allow processing play without the equaliser.
- Song titles for radio are not shown; most stations do not expose them to web pages.
- RIKU cannot appear on a car's built-in screen (CarPlay or Android Auto); that requires a native app.
- Playback with the phone locked depends on the browser and may stop on some stations.
- Offline, radio and podcasts cannot play; only music imported into the library.
- There is no backup or sync of settings between devices yet.

---

*RIKU is a personal project. Headphone corrections come from the AutoEQ project (MIT licence, © Jaakko Pasanen); station listings come from the public Radio Browser directory; podcast listings come from Apple's podcast directory.*
