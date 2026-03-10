# WristNav

**Wear OS Offline Maps, GPS Tracker & Route Planner**

A fully featured outdoor sports app for Wear OS with offline maps, GPX navigation, route recording, heart rate tracking, and a companion phone app.

---

## Support

If WristNav has been useful on a run, hike or ride — a coffee goes a long way!

[![Ko-fi](https://img.shields.io/badge/Ko--fi-wristnav-FF5E5B?logo=ko-fi&logoColor=white)](https://ko-fi.com/wristnav) [![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-wristnavv-FFDD00?logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/wristnavv)

---

## Download & Install

Download the latest APKs:
- [⌚ Watch APK](https://github.com/boothy91/wrist-nav-site/raw/main/WristNav-Watch-Release.apk)
- [📱 Phone Companion APK](https://github.com/boothy91/wrist-nav-site/raw/main/WristNav-Phone-Release.apk)

Or visit the [landing page](https://boothy91.github.io/wrist-nav-site/) for more info.

### Method 1 — Wireless ADB (Recommended)

1. On your watch go to **Settings → Developer Options → Wireless Debugging** and enable it
2. Install [Android Platform Tools](https://developer.android.com/tools/releases/platform-tools) on your PC
3. Run:
```
adb connect <watch-ip-address>
adb install WristNav-Watch-Release.apk
```

### Method 2 — Bugjaeger (Phone only, no PC needed)

1. Install [Bugjaeger](https://play.google.com/store/apps/details?id=eu.sisik.hackendebug) on your Android phone
2. Enable **Wireless Debugging** on your watch and pair via Bugjaeger
3. Use Bugjaeger's APK install feature to sideload the APK

---

## Offline Maps

Map files are downloaded directly within the watch app — browse by region and download to your watch without needing a phone. Check available regions and updates at **[boothy91.github.io/wrist-nav-maps](https://boothy91.github.io/wrist-nav-maps/)**.

---

## Watch App

### Home Screen

Start, pause and stop recording from the home screen. Enable **Nav mode** to follow a GPX route — when you press start with Nav on, the app goes straight to the map.

### Map

![Map Downloads](screenshots/Map%20Downloads.png)

Full offline maps powered by OpenStreetMap. Download map regions directly to your watch — no internet needed when out on a route. Supports Fjord, Dark and Light themes.

- Pinch to zoom, swipe to pan
- Long press to open the main menu
- Lock dot in the top bar — tap to lock/unlock map to your GPS position
- Map rotates with your heading when locked
- Minimal Map mode — strips map to roads, paths and water to save battery

### Navigation

![Walk with Distance showing](screenshots/Walk%20with%20Distance%20showing.png)

When Nav mode is active, the map shows your imported route with remaining distance and elevation profile as an overlay.

- Remaining distance to end of route
- Live elevation profile graph with remaining climb indicator
- Enable Nav Distance and Nav Elevation in settings to show/hide each

### Recording

![Start Tracking](screenshots/Start%20Tracking.png)

Record your activity with live GPS tracking. Recording continues when the screen sleeps via a background service.

- Live distance, time, pace, heart rate, steps and elevation
- Vibrates every km or mile
- Lap splits with vibration (respects km/mi setting)
- Countdown timer when starting
- GPS status indicator (red/amber/green)
- GPX exported with timestamps, elevation, heart rate and cadence data
- Ready to upload directly to Strava

### Track Details

![Track Details Page](screenshots/Track%20Details%20Page.png)

Tap any track to open a swipeable detail view:
- Page 1: Distance, elevation gain, date
- Page 2: Garmin-style elevation profile with y-axis labels and total distance

### GPX File Manager

![GPX File Manage](screenshots/GPX%20File%20Manage.png)

Manage all your GPX files on the watch:
- Import GPX files via the phone companion app
- Send to phone companion app
- Delete tracks
- Visibility toggle — doubles as nav route selector

---

## Settings

Access via long press on map → Settings. Settings include:

- **Map Theme** — Fjord, Dark or Light
- **Minimal Map** — strip map detail to save battery
- **Distance Units** — km or mi
- **Clock Format** — 24hr or 12hr
- **Min Record Distance / Time** — control GPS point frequency
- **Import / Record Track Colour and Width**
- **Lap Splits** — on/off
- **Lock Zoom** — fix zoom level; location button turns red when locked
- **Keep Active** — prevent watch screen from sleeping during recording
- **Nav Distance / Nav Elevation** — show/hide nav overlay elements
- **Heart Rate / Steps** — toggle sensors on/off
- **Customisable Stats Pages** — configure up to 5 pages with 10 available stat types

---

## Phone Companion App

### Send to Watch

![Phone Send Page](screenshots/Phone%20Send%20Page.png)

Send GPX routes or map files directly to your watch. Map files up to 50MB supported.

### Received from Watch

![Received Page](screenshots/Received%20Page.png)

View all GPX files recorded on your watch and transferred to your phone. Tap any track to open the activity viewer — full map, elevation chart, distance, HR and elevation stats. Save to Downloads, upload to Strava, or delete.

### Plan a Route

![Plan Tab with send to watch showing](screenshots/Plan%20Tab%20with%20send%20to%20watch%20showing.png)

Built-in Trail Planner — plan a route on the map, export as GPX, name it and send directly to your watch with one tap. Powered by [boothy91.github.io/gpx-map](https://boothy91.github.io/gpx-map/).

---

## Reporting Crashes

If the app crashes, a log is automatically saved to `Downloads/wristnav_crash.txt` on your watch. Please attach this file when reporting issues via GitHub or Reddit.

---

## Credits

- Map data © [OpenStreetMap contributors](https://www.openstreetmap.org/copyright)
- Trail Planner by [boothy91](https://boothy91.github.io/gpx-map/)
