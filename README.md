# Keep Awake

Tiny static website to keep the device's screen awake. Same purpose of https://nosleep.page/ but now with some colors that don't hurt the eye so much. The website uses https://github.com/richtr/NoSleep.js to keep eiter a Wake Lock or a hidden video playing in the background (depends on the device's support of the Wake Lock API)

## Live

Currently you can find this page at https://carolinamoraes.github.io/keep-awake

## Running the app locally

After cloning the project

Run the tsc watcher to keep watching modifications on the ts files

```bash
  tsc -w
```

Access the index.html through the [live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VS Code extension (that's my preference, but you can do this any way you desire)
