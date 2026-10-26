# Information Architecture: Brush & Net (POC)

Mobile app, 390×844. Single persona: solo owner-operator (Mike Delgado, Delgado Pool Care, St. Augustine FL). The current mockup has 4 tabs (Today, Pools, Costs, Account) with emoji icons. This IA cuts it to **3 tabs** and moves Account behind the header avatar.

## Site Map

Routes are prototype screen ids, not real URLs.

- Onboarding `onboarding/*` (first run only)
  - Business `onboarding/business`: language (English / Español), business name, owner name
  - Service fee `onboarding/fee`: default fee per visit
  - First pools `onboarding/pools`: add 1–3 pools (prefilled demo pools); "Import from another app" row is inactive
- **Today** `today` ← home, ~80% of time
  - Log visit `today/visit/:stopId` (modal flow, full screen)
    - Visit saved `today/visit/:stopId/saved`
  - Add stop sheet `today/add-stop` (Fuel / Supply store / Lunch / Pool)
  - Shopping list `today/shopping`
- **Pools** `pools`
  - Pool detail `pools/:poolId`
    - Visit record `pools/:poolId/visits/:visitId` (read-only, reuses the visit layout) · *specified*
- **Money** `money`
  - Range: Today / Week / Month (in-page segmented control)
  - Costs list (chems + non-pool costs) in-page
  - Shopping list `money/shopping` (same screen as `today/shopping`)
- Account `account` (via header avatar on every tab root)
  - Business & fee
  - Language: English / Español
  - Inactive rows: Import CSV/Excel · Technicians · Subscription & trial · Desktop · Repairs

## Navigation Model

- **Primary**: bottom tab bar with 3 items, **Today · Pools · Money**. Icons + labels, 56px tall, active state shown with color and weight (not color alone).
- **Secondary**: in-page segmented control on Money (Today / Week / Month). Pool detail uses one scroll, no tabs.
- **Utility**: avatar (initials) top-right of each tab root → Account. The shopping list is a chip in the Today day strip ("Shopping · 6"), so it's 1 tap from Today.
- **Modal**: Log visit and Visit saved cover the tab bar (full-screen, close ✕ top-left). Add stop is a bottom sheet.
- **Depth**: 2 levels max (tab → detail). Log visit is a task, not a level.

## Content Hierarchy

### Today
1. Day strip: stops done / total (e.g. 5 of 14), earned today (net), Shopping chip. Answers "how's my day?" at a glance.
2. Next stop hero: customer name, address, pool type, last visit date + one-line last-visit note, **Start visit** (56px). This is the one action that matters.
3. Rest of route: ordered stop rows (pool and non-pool). Done rows collapse to show name + net earned + ✓.
4. "+ Stop" button at the end of the list → Add stop sheet.

### Log visit
1. Header: customer name, address, time-on-site timer (auto), ✕.
2. Readings: FC, pH, TA, CYA steppers, prefilled from last visit, with a Low / OK / High label.
3. Chems added: prefilled rows (name, qty stepper, unit, cost); "+ Add chem".
4. Tasks: 5 toggle chips (Skim, Brush, Vacuum, Baskets, Filter), default on from last visit.
5. Photo (optional) · Note to customer (optional).
6. Sticky save bar: **Save visit**, with chem cost and net shown.

### Visit saved
1. Net earned, big (fee − chem cost).
2. Breakdown: fee, chem cost, time on site.
3. Next stop name + 3s auto-advance progress · **Stay here** / **Go now**.

### Pools
1. Search field.
2. Pool rows: name, address, service day, last visit, a flag if the last reading was out of range.
3. "+ Pool" in header.

### Pool detail
1. Customer, address, gate code, service day, fee.
2. Margin this month (fees − chem cost) and visit count.
3. Last readings with mini trend per reading.
4. Visit history list → Visit record.
5. Notes.

### Money
1. Range control (Today / Week / Month).
2. P&L: revenue, chem cost, other costs, **net** (hero).
3. Costs list grouped by type (Chems, Fuel, Supplies, Food), newest first.
4. Shopping list entry row ("6 items · ~$142").
5. Top/bottom pools by margin.

### Shopping list
1. Totals: items, estimated cost.
2. Checkable list grouped by chemical, quantity summed from the week's usage and the next route.
3. "Mark bought" adds the purchase to Costs.

### Account
1. Business name, owner, default fee.
2. Language (English / Español).
3. Inactive feature rows, each with a "Coming soon" note.
4. Support, sign out (static).

## User Flows

### 1. Onboarding (first run)
1. Business → enter business name → Continue.
2. Service fee → stepper, default $35/visit → Continue.
3. First pools → 3 demo pools prefilled, edit or add → **Start my route**.
   - The "Import from another app" row shows "Coming soon".
4. Lands on Today with a seeded 14-stop route.

### 2. Run the route (core loop)
1. Today → user sees next stop hero → **Start visit**.
2. Log visit opens with the timer running and readings/chems/tasks prefilled.
3. User nudges readings; out-of-range values flip to Low/High. User adjusts chem qty; changed rows highlight; save bar updates the net.
4. **Save visit** → Visit saved shows net earned.
   - Wait 3s → returns to **Today** with the next stop as the new hero; the user taps Start on arrival.
   - **Stay here** → stops the countdown, stays on the confirmation.
5. Today: the done row shows ✓ + net; the day strip updates done count and earned.

### 3. Add a non-pool stop
1. Today → **+ Stop** → sheet: Fuel / Supply store / Lunch / Pool.
2. Pick Fuel → optional cost field (keypad) → **Add**.
3. The stop is inserted after the current stop; its cost goes to Money → Costs and lowers today's earned.

### 4. Check the money
1. Money tab → Today range by default → net hero.
2. Switch to Week → numbers update.
3. Tap a cost row → (static).

### 5. Shopping list
1. Today day strip → **Shopping · 6** chip (or Money → Shopping row).
2. Check items as bought → **Mark bought** → a cost is added.

### 6. Look up a pool
1. Pools → search or scroll → pool row → Pool detail.
2. Visit history row → Visit record *(specified)*.

## Naming Conventions

| Concept | Label in UI | Notes |
|---|---|---|
| A day's ordered list of places | **Route** | Not "schedule" or "run" |
| One place on the route | **Stop** | Pool or non-pool |
| Non-pool stop types | **Fuel · Supply store · Lunch** | |
| Servicing a pool once | **Visit** | Not "service", "job" or "log" |
| The act of recording it | **Log visit** (screen), **Save visit** (button) | |
| A customer's pool | **Pool**, shown by customer name | One customer = one pool in the POC |
| Water test values | **Readings** | FC, pH, TA, CYA, with an info tap for full names |
| Reading state | **Low · OK · High** | Not "ideal" |
| Chemicals put in | **Chems** | Short label Adam already uses |
| Chores done on a visit | **Tasks** | Skim, Brush, Vacuum, Baskets, Filter |
| Price charged per visit | **Fee** | |
| Fee minus chem cost (per visit/day) | **Earned** | Net, not gross. Gross is "Revenue" on Money |
| Money spent | **Costs** | |
| Tab with P&L + costs | **Money** | Replaces "Costs" tab |
| Purchase list | **Shopping list** | |
| Not-yet-built features | **Coming soon** | |

## Component Reuse Map

| Component | Used on | Behavior differences |
|---|---|---|
| Tab root header (title + avatar) | Today, Pools, Money | Today adds the date |
| Bottom tab bar | Today, Pools, Money | Hidden on Log visit, Visit saved, Onboarding |
| Day strip | Today | — |
| Stop row | Today | Pool / non-pool / done / next variants |
| Pool row | Pools, onboarding step 3 | Onboarding version is editable |
| Reading stepper | Log visit, Pool detail (read-only), Visit record | Read-only has no − / + |
| Chem row | Log visit, Shopping list, Visit record | Shopping list version has a checkbox, no cost stepper |
| Money stat block | Visit saved, Money, Pool detail | Size: hero / compact |
| Bottom sheet | Add stop, Coming soon note | |
| Inactive row | Account, onboarding step 3 | |
| Primary button (56px) | Start visit, Save visit, Continue, Add | |
| Segmented control | Money range | |

## Content Growth Plan

- **Pools** grow to ~80–150 for a solo operator: search + alphabetical list. Group by service day *(later)*.
- **Visit history** per pool grows weekly: newest first, show the last 10, then "Show more".
- **Costs** grow daily: grouped by range; the Week/Month range keeps the list manageable.
- **Route** is fixed per day (10–20 stops); no paging needed.

## URL Strategy

Prototype only. Screen ids follow `tab/screen/:id` (see Site Map). Demo tweaks may set the start screen to any id. No query params.
