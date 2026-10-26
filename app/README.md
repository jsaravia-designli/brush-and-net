# Brush & Net (pool service app)

React + Vite build of `project/Prototype v3 (Final).dc.html`, the Claude Design prototype for Adam's Pool Service app.

```sh
npm install
npm run dev     # http://localhost:5173
npm run build
```

## Layout

- `src/PoolApp.jsx` holds all app state and actions. `renderVals()` builds the flat view model that the screens read.
- `src/data.js` has the seed route, pools, chemicals, repairs and pure helpers. `src/strings.js` is the EN/ES string table.
- `src/screens/` has one component per screen, plus `TabBar`, `StatusBar`, `Sheets` (every bottom sheet) and `Toast`. `Shell.jsx` holds the page: the Prototype controls bar, the 390×844 phone frame and the Reset demo / Show onboarding links.

The screens were converted mechanically from the prototype's template, so their inline styles match the design exactly. Edit them like any other source file.

## Behaviour notes

- **Prototype controls:** this bar (start screen, role, language, repairs, theme) sits above the phone, as it does in the design. Its label says it's not part of the app.
- **Dark theme:** colors are CSS variables with the light value as the fallback, e.g. `var(--t-0a1b36,#0a1b36)`. Dark mode sets the overrides in `DARKV` (`src/data.js`) on the phone root.
- **No backend:** all data is fictional and lives in memory. Reset demo restores the seed.
