# WristNav

**Wear OS Offline Maps, GPS Tracker & Route Planner**

A fully featured outdoor sports app for Wear OS with offline maps, GPX navigation, route recording and heart rate tracking.

---

## Download

**Now available on Google Play!**
[Download WristNav](https://play.google.com/store/apps/details?id=com.wristnav.app)

Full app guide and feature overview: [boothy91.github.io/wrist-nav-site](https://boothy91.github.io/wrist-nav-site/)

---

## Support

If WristNav has been useful on a run, hike or ride — a coffee goes a long way!

[

![Ko-fi](https://img.shields.io/badge/Ko--fi-wristnav-FF5E5B?logo=ko-fi&logoColor=white)

](https://ko-fi.com/wristnav) [

![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-wristnavv-FFDD00?logo=buy-me-a-coffee&logoColor=black)

](https://buymeacoffee.com/wristnavv)

---

## Offline Maps

Map files are downloaded directly within the watch app — browse by region and download to your watch without needing a phone. Check available regions and updates at **[boothy91.github.io/wrist-nav-maps](https://boothy91.github.io/wrist-nav-maps/)**.

---

## Watch App

### Home Screen

Start, pause and stop recording from the home screen. Enable **Nav mode** to follow a GPX route — when you press start with Nav on, the app goes straight to the map.

### Map

Full offline maps powered by OpenStreetMap. Download map regions directly to your watch — no internet needed when out on a route. Supports Fjord, Dark and Light themes.

- Pinch to zoom, swipe to pan
- Long press to open the main menu
- Lock dot in the top bar — tap to lock/unlock map to your GPS position
- Map rotates with your heading when locked
- Minimal Map mode — strips map to roads, paths and water to save battery

### Navigation

When Nav mode is active, the map shows your imported route with remaining distance and elevation profile as an overlay.

- Remaining distance to end of route
- Live elevation profile graph with remaining climb indicator
- Enable Nav Distance and Nav Elevation in settings to show/hide each

### Recording

Record your activity with live GPS tracking. Recording continues when the screen sleeps via a background service.

- Live distance, time, pace, heart rate, steps and elevation
- Vibrates every km or mile
- Lap splits with vibration (respects km/mi setting)
- Countdown timer when starting
- GPS status indicator (red/amber/green)
- GPX exported with timestamps, elevation, heart rate and cadence data

### Stats Pages

Swipe between customisable stats pages during recording. Up to 5 pages with 10 available stat types, configured in Settings.

### Track Details

Tap any track to open a swipeable detail view:
- Page 1: Distance and date
- Page 2: Elevation details
- Page 3: Elevation profile

### GPX File Manager

Manage all your GPX files on the watch:
- Import GPX files from any file manager, Google Drive or email
- Visibility toggle — doubles as nav route selector
- Delete tracks

---

## Settings

Access via long press on map → Settings. Settings include:

- **Theme** — Fjord, Dark or Light
- **Minimal Map** — strip map detail to save battery
- **Distance Units** — km or mi
- **Clock Format** — 24hr or 12hr
- **Min Record Distance / Time** — control GPS point frequency
- **Import / Record Track Colour and Width**
- **Lap Splits** — on/off
- **Lock Zoom** — fix zoom level when location button is locked
- **Keep Active** — prevent watch screen from sleeping during recording
- **Nav Distance / Nav Elevation** — show/hide nav overlay elements
- **Heart Rate / Steps** — toggle sensors on/off
- **Stats Edit** — configure up to 5 stats pages

---

## Phone Companion App

A lightweight Android companion app for WristNav. Not a standalone navigation app — designed specifically to work alongside the watch.

### Send to Watch

- Upload a GPX route file directly to the watch app
- Upload a map (.map) file to the watch for offline use

### Received from Watch

View GPX files recorded on the watch and transferred to your phone. For each track you can:

- Upload to Strava
- Save to phone storage
- Delete

### Route Planner

Built-in trail planner — mark out a route on the map, then send it directly to the watch as a GPX file ready to navigate. Powered by [boothy91.github.io/gpx-map](https://boothy91.github.io/gpx-map/).

---

## Reporting Crashes

Crashes are automatically detected and reported. If you experience an issue, you can also find a log saved to `Downloads/wristnav_crash.txt` on your watch — please attach this when reporting via GitHub Issues.

---

## Credits

- Map data © [OpenStreetMap contributors](https://www.openstreetmap.org/copyright)
- Trail Planner by [boothy91](https://boothy91.github.io/gpx-map/)
