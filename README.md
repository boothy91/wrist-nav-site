# WristNav

**Wear OS Offline Maps, GPS Tracker & Route Planner**

A fully featured outdoor sports app for Wear OS with offline maps, GPX navigation, route recording, heart rate tracking, and a companion phone app.

---

## Support

If WristNav has been useful on a run, hike or ride — a coffee goes a long way!

[![Ko-fi](https://img.shields.io/badge/Ko--fi-wristnav-FF5E5B?logo=ko-fi&logoColor=white)](https://ko-fi.com/wristnav) [![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-wristnavv-FFDD00?logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/wristnavv)

---

## Download & Install

Download the latest APK from [Releases](https://github.com/boothy91/wrist-nav-site/releases/tag/WristNav) and sideload to your watch.

### Method 1 — Wireless ADB (Recommended)

1. On your watch go to **Settings → Developer Options → Wireless Debugging** and enable it
2. Install [Android Platform Tools](https://developer.android.com/tools/releases/platform-tools) on your PC
3. Run:
```
adb connect <watch-ip-address>
adb install WristNav-Watch.apk
```

### Method 2 — Bugjaeger (Phone only, no PC needed)

1. Install [Bugjaeger](https://play.google.com/store/apps/details?id=eu.sisik.hackendebug) on your Android phone
2. Enable **Wireless Debugging** on your watch and pair via Bugjaeger
3. Use Bugjaeger's APK install feature to sideload the APK

---

## Watch App

### Home Screen

Start, pause and stop recording from the home screen. Enable **Nav mode** to follow a GPX route — when you press start with Nav on, the app goes straight to the map.

### Map

![Map Downloads](screenshots/Map%20Downloads.png)

Full offline maps powered by OpenStreetMap. Download map regions directly to your watch — no internet needed when out on a route. Supports dark and light themes.

- Pinch to zoom, swipe to pan
- Long press to open the main menu
- Lock dot in the top bar — tap to lock/unlock map to your GPS position
- Map rotates with your heading when locked

### Map with Nav Overlay

![Map with Nav Overlay](screenshots/Map%20with%20Nav%20Overlay.png)

When Nav mode is active and recording, the map shows your imported route with remaining distance displayed as an overlay.

### Recording

![Start Tracking](screenshots/Start%20Tracking.png)

Record your activity with live GPS tracking. Recording continues when the screen sleeps via a background service.

- Live distance, time, pace and heart rate on the stats screen
- Vibrates every km or mile
- Auto-pause when stationary (optional)
- Lap splits displayed on screen with vibration (optional)
- GPX exported with timestamps, elevation, heart rate and step data
- Ready to upload directly to Strava

### Pause and Stop

![Pause and Stop Tracking](screenshots/Pause%20and%20Stop%20Tracking.png)

Pause your recording at any time and resume when ready. Stop and save your route as a GPX file.

### Stats Screen 1

![Stats 1](screenshots/Stats%201.png)

Live stats during recording:
- Elapsed time
- Distance
- Average pace per km/mi

### Stats Screen 2

![Stats 2](screenshots/Stats%202.png)

Additional live stats:
- Heart rate (BPM)
- Steps
- Elevation

### GPX Navigation

![GPX Files](screenshots/GPX%20Files.png)

Import GPX routes and navigate along them. Select a track to display it on the map — only one track shows at a time. Enable Nav mode on the home screen to see remaining distance to the end of the route.

### GPX File Manager

![GPX File Manage](screenshots/GPX%20File%20Manage.png)

Manage all your GPX files on the watch:
- Import from file picker (works with Google Drive, email, any file manager)
- Send to phone companion app
- Delete tracks
- File size shown for each track

---

## Settings

Access via long press on map → Settings. Tap any option to cycle through values.

### Setting 1 — Map Theme
![Setting 1](screenshots/Setting%20%231.png)

Dark or Light map theme.

### Setting 2 — Distance Units
![Setting 2](screenshots/Setting%20%232.png)

km or mi — affects distance display, pace, and split vibrations.

### Setting 3 — Clock Format
![Setting 3](screenshots/Setting%20%233.png)

24hr or 12hr clock on the home screen.

### Setting 4 — Min Record Distance
![Setting 4](screenshots/Setting%20%234.png)

Minimum distance between GPS points when recording. Lower = more detail, higher = smaller file size.

### Setting 5 — Min Record Time
![Setting 5](screenshots/Setting%20%235.png)

Minimum time between GPS points when recording.

### Setting 6 — Import Track Colour
![Setting 6](screenshots/Setting%20%236.png)

Colour for imported GPX tracks on the map.

### Setting 7 — Record Track Colour
![Setting 7](screenshots/Setting%20%237.png)

Colour for your live recording track on the map.

### Setting 8 — Import Track Width
![Setting 8](screenshots/Setting%20%238.png)

Line width for imported GPX tracks.

### Setting 9 — Record Track Width
![Setting 9](screenshots/Setting%20%239.png)

Line width for your live recording track.

### Setting 10 — Auto Pause
![Setting 10](screenshots/Setting%20%2310.png)

Automatically pause recording when you stop moving. Resumes when you start again.

### Setting 11 — Lap Splits
![Setting 11](screenshots/Setting%20%2311.png)

Show a split time on screen with vibration at every km or mi.

---

## Phone Companion App

### Send to Watch

![Phone App Send to Phone](screenshots/Phone%20App%20Send%20to%20Phone.png)

Pick any GPX file from your phone and send it directly to your watch. Connect Strava and upload GPX files straight from your phone.

### Received from Watch

![Phone App Received](screenshots/Phone%20App%20Recieved.png)

View all GPX files recorded on your watch and transferred to your phone. Tap any track to open the activity viewer — full map, elevation chart, distance, HR and elevation stats. Save to Downloads, upload to Strava, or delete.

### Plan a Route

![Phone App Plan](screenshots/Phone%20App%20Plan.png)

Built-in Trail Planner — plan a route on the map, export as GPX, name it and send directly to your watch with one tap. Powered by [boothy91.github.io/gpx-map](https://boothy91.github.io/gpx-map/).

---

## Credits

- Maps powered by [Mapsforge](https://github.com/mapsforge/mapsforge)
- Map data © [OpenStreetMap contributors](https://www.openstreetmap.org/copyright)
- Trail Planner by [boothy91](https://boothy91.github.io/gpx-map/)
