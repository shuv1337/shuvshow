# Embedding the shuvshow viewer

A minimal "host" page that mounts the shuvshow viewer **engine** into a shadow
root, with its own chrome above it. It demonstrates the `shuvshow/viewer-embed`
entry point: the viewer is a self-contained engine, and the host owns the page.

```js
import { mountViewer } from "shuvshow/viewer-embed";

const handle = mountViewer(document.getElementById("mount"), {
  basePath: "/u/alice", // "" at the root; API calls are `${basePath}/api/...`
  router: {
    get: () => parseRouteFromYourUrl(),
    navigate: (route, opts) => yourHistory(route, opts),
    subscribe: (cb) => onYourRouteChange(cb),
  },
});
// handle.dispose() to unmount.
```

Omit the host to use the built-in History-API host (a drop-in for the
self-hosted page).

## Run the local demo

The engine fetches `/api/*` (and `/s/*`, `/a/*`, SSE) relative to the page
origin, so the demo proxies those to a running shuvshow server:

```sh
npm run build:embed                 # build viewer/dist-embed/engine.js
npm start                           # a shuvshow server on :8228 (separate shell)
node examples/embed-host/serve.mjs  # demo on http://localhost:5180
```

`serve.mjs` serves `index.html` + the engine bundle and proxies everything else
to the shuvshow server (`ORIGIN`, default `http://localhost:8228`). It is a dev
rig, not production code.
