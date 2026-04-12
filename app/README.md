# Adding a New Country

The app is fully data-driven. The homepage cards, interactive map, country page, and "Tracked Economies" counter are all generated automatically from the JS data files. **No JSX, CSS, or component changes are needed.**

## What to do

Add a new country object to one of the data files in `src/data/`:

- `countries.js` — first batch (USA, UK, China, Japan, Denmark)
- `countriesB.js` — second batch
- `countriesC.js` — third batch

Pick whichever file makes sense (or create a `countriesD.js` and import/spread it into the `countries` array in `countries.js`).

## Country object shape

Use any existing country as a template. The required fields are:

| Field | Purpose |
|-------|---------|
| `id` | URL slug, e.g. `"france"` → route `/:id` |
| `name` | Display name |
| `officialName` | Full name shown in the country page eyebrow |
| `flagCode` | ISO 3166-1 alpha-2 lowercase, e.g. `"fr"` — used for flag images via flagcdn.com |
| `isoNumeric` | ISO 3166-1 numeric code, e.g. `250` — used to highlight the country on the D3 world map |
| `fiscalYear` | e.g. `"Fiscal Year 2024"` |
| `fiscalPeriod` | e.g. `"Jan 1 – Dec 31, 2024"` |
| `currency` | `{ symbol, code, prefix, suffix }` and optional `divisor` |
| `gdpNote` | GDP context string |
| `sourceNote` | Shown below the masthead title |
| `kpis` | `{ receipts, outlays, balance, debt? }` — each with `label`, `value`, `note`; `balance` also has `type: "deficit" \| "surplus"` |
| `indexCard` | `{ description, tags: [{ text, color }] }` — used on the homepage card |
| `receipts` | `{ panelNote, groups: [...], methodNote? }` |
| `outlays` | `{ panelNote, groups: [...], totalLabel, totalValue, methodNote? }` |
| `deficitFinancing` | (optional) `{ label, sub, value, gdpNote, pct }` |
| `surplusInfo` | (optional) `{ value, pct }` |
| `totalLabel` / `totalValue` | Receipts + deficit financing total |
| `callouts` | `[{ icon, title, text, tag? }]` — context cards |
| `footnotes` | `{ sources, methodology }` |

## What happens automatically

- **Homepage card** — rendered from `indexCard` via `Home.jsx`
- **"Tracked Economies" count** — uses `countries.length`
- **World map highlight** — uses `isoNumeric` via `WorldMap.jsx`
- **Country detail page** — rendered from all other fields via `Country.jsx`
- **Flags** — fetched from `https://flagcdn.com/w80/{flagCode}.png`

## Only exception

The **"Total Outlays Tracked"** value on the homepage (`~$19.8T`) is currently hardcoded in `Home.jsx`. Update it manually if desired.