# WristNav

**Wear OS Offline Maps, GPS Tracker & Route Planner**

A fully featured outdoor sports app for Wear OS with offline maps, GPX navigation, route recording and heart rate tracking — fully standalone, no phone required.

---

## Download

**Now available on Google Play!**
[Download WristNav](https://play.google.com/store/apps/details?id=com.wristnav.app)

Full app guide and feature overview: [boothy91.github.io/wrist-nav-site](https://boothy91.github.io/wrist-nav-site/)

---

## Support

If WristNav has been useful on a run, hike or ride — a coffee goes a long way! WristNav will always be free.

[![Ko-fi](https://img.shields.io/badge/Ko--fi-wristnav-FF5E5B?logo=ko-fi&logoColor=white)](https://ko-fi.com/wristnav)
[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-wristnavv-FFDD00?logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/wristnavv)

---

## Offline Maps

Map files are downloaded directly within the watch app — browse by region and download to your watch without needing a phone. TOPO maps are also available from OpenTopoMap, SwissTopo, Tracestrack, USGS and Kartverket, with optional hillshading and contour overlays. Check available regions and updates at **[boothy91.github.io/wrist-nav-maps](https://boothy91.github.io/wrist-nav-maps/)**.

---

## Watch App

### Map Screen (Home)

WristNav opens directly on the Map screen. On first launch you'll be prompted to download a map — a local map is suggested automatically from your current GPS position.

- Pinch to zoom, swipe to pan; crown/rotary input on compatible watches
- Long press to open the **Navigation menu**
- A dedicated menu button opens the **Global menu** directly
- **Location button** — red: snaps back to your location · green: free movement, pan freely
- **Clock (tap)** — red dot: locks the map, menu still usable · green dot: free movement map
- **Compass** — red: locked north · green: compass moves with the map · blue: map locked north, compass moves
- Zoom controls: + / −
- Minimal Map mode strips the map to roads, paths and water to save battery

### Navigation Menu

Opened with a long press **on the Map screen**.

- **Navigation** — opens the GPX list to add a route to the map
- **Start / Stop / Pause** recording
- **Reverse Route** — requires a route to already be loaded
- **Quick Settings** — Watch Theme, Units, Small Units, Map Control (Compass / Zoom / Off), Nav Distance, Nav Turns, Auto Pause

> On any screen other than the Map, a long press opens the Global menu instead.

### Global Menu

Opened with the dedicated menu button on the Map screen, or by a long press anywhere else.

- **Stats** — configured in Settings, up to 10 pages with 3 stats each
- **Maps** — download manager (see below)
- **GPX Tracks** — import and track list (see below)
- **Settings** — full settings list
- **Home / Map** — returns to the Map screen
- **Exit** — tap twice to close the app

### Navigation Overlay

When a route is loaded, the map shows an overlay with:

- Remaining distance to the end of the route (**Nav Distance**)
- Live elevation profile with your position marked (**Nav Elevation**)
- Turn-by-turn style prompts along the route (**Nav Turns**)
- Direction arrows overlaid on the map (**Nav Arrows**)
- **Climb View** *(currently in beta)* — shows climbs on a loaded route, numbered around it. While on a climb, the map shows the climb number, an elevation chart for that climb, % gradient, and time remaining, in your configured small units
- **Off-Route Alert** — haptic vibration if you stray from the route; fires even with the screen off

Each element can be toggled individually in Settings → Navigation.

### Recording

Record your activity with live GPS tracking, started from the Navigation menu. Recording continues when the screen sleeps, via a background service.

- Live distance, time, pace, heart rate, steps and elevation
- Vibrates at every km or mile split, with split time shown on screen
- Optional countdown timer before recording starts (3s or 5s)
- Auto-pause when speed drops below a configurable threshold
- Adjustable minimum GPS recording distance and time interval, plus optional GPS filtering to smooth out noisy points
- Activity type written into GPX — Run, Trail Run, Walk, Hike, Cycle, MTB, Gravel, Kayak, Ski, Snowboard
- GPX exported with timestamps, elevation, heart rate and cadence data
- GPS status indicator — red (no fix) / green (good fix)

### Stats Pages

Swipe between customisable stats pages during recording. Up to **10 pages**, 3 stat slots per page, configured in Settings → Stats.

Available stats: Time, Moving Time, Distance, Avg Pace, Lap Pace, Lap Distance, Heart Rate, Avg HR, Max HR, Steps, Altitude, Ascent, Descent, Speed, Nav Distance, Calories.

### Bezel Stats

Live workout data curved along the bottom of round screens, or a straight bar on square watches. Enable in Settings → Map → Map Settings → Bezel Stats, then choose 2 or 4 stat slots via Bezel Config.

### GPX Tracks

- Download OSM traces directly to the watch via a trace URL/number
- Import GPX files from the phone companion app or file share intents
- Track list shows imported, downloaded and recorded tracks — tap for details
- Swipe across a track's detail view for distance, elevation details, an elevation chart, Send to Phone, and Delete

### Watch Face Complications

Assign any WristNav stat to a watch face complication slot — updates live during recording, shows a placeholder when idle. Tap a complication to jump straight into the app.

15 complication providers: Time, Distance, Avg Pace, Heart Rate, Avg HR, Max HR, Steps, Altitude, Ascent, Descent, Speed, Lap Pace, Lap Distance, Nav Distance, Calories.

---

## Settings

Access via **Settings** in the Global menu. Grouped into six categories: **Display · Map · Recording · Navigation · Stats · System.**

- **Display** — Watch Theme (Light / Fjord / Dark / Forest / Sand), Stats Text Size
- **Map** — Map Style (Mapsforge / TOPO), Map Theme, Custom Themes, Topo Zoom, Lock Zoom, Ele Colour, plus full **Map Settings**: Map Control, Control Side, Top Bar, Map Text Colour, Location Button colours (locked / free), Scale Bar, Import Colour, Import Width, Bezel Stats
- **Recording** — Activity, Rec Distance, Rec Time, Auto Pause, Pause Speed, Record Colour, Record Width, Heart Rate, Steps, Countdown, Lap Splits, GPS Filtering
- **Navigation** — Nav Distance, Nav Elevation, Nav Turns, Nav Arrows, Climb View, Climb View Alert Distance, Off-Route Alert, Alert Distance
- **Stats** — Stats Pages, Calories, Barometer, Pace Avg
- **System** — Distance Units, Small Units, Keep Screen On, Keep Active, Battery Saver

---

## Phone Companion App

A lightweight Android companion app for WristNav. The watch app works fully standalone — the phone app is optional, adding planning, sync and a few extras.

### Send Tab
- Send GPX route files directly to the watch
- Send `.map` files, or a `.map` URL the watch downloads directly in the background
- Configure and download a custom TOPO map area built around a route

### Routes Tab
- Routes recorded on the watch or planned in the Plan tab
- View with full stats, export as a shareable PNG (optionally over your own photo), save as GPX or TCX
- Upload to Health Connect, Intervals.icu, or manually to Strava via the browser
- Rename, delete, send to watch, or get directions to the route's start

### Plan Tab
- Plan routes with routed or straight-line segments, on OSM, Topo or Satellite styles, with 3D terrain view
- Load existing GPX files to continue editing
- Create a route and export as GPX, send straight to the watch, or save to Routes

### Watch Tab
- **Flow Guide** — interactive watch app flow diagram, opens as a popup
- **Custom Theme Viewer** — build custom map themes with a full colour picker and live preview, then send to the watch; themes can also be imported from an XML file
- **Health Connect** — push a recorded route straight through for other health apps to read; no account or subscription required

### Settings Tab
- **Accounts** — Strava link, Intervals.icu API key, TraceStack API key
- **Companion App** — app theme (Light / Fjord / Dark)
- **Route View** — units, map style, elevation chart, status bar, route line colour and width
- **Routes Tab** — Auto Delete Routes, Sort Files
- **Watch Extras** — Stats Labels, show/hide the Maps and Tracks tabs on the watch

---

## Reporting Crashes

Crashes are automatically captured and reported to the development team via Sentry — you don't need to do anything.

---

## Credits

- Map data © [OpenStreetMap contributors](https://www.openstreetmap.org/copyright)
- Trail Planner by [boothy91](https://boothy91.github.io/gpx-map/)
