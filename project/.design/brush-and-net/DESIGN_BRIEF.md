# Design Brief: Brush & Net — POC concept

## Problem

Mike runs a one-truck pool route in St. Augustine, FL. He's on 14 pools a day, in direct sun, with wet hands and a phone in a case. Today his field record lives in apps that charge per pool, go down for days after updates, and hide the money behind reports. He finishes a pool and has no idea whether that stop made him money once chemicals are counted. Logging a visit takes too many taps across a crowded grid, so he skips readings or logs them at night from memory.

## Solution

Brush & Net is a route you work through. Today shows the next pool big and the rest of the day below it, with a live strip showing how many stops are done and what the day has earned so far. Tap the next stop, log the visit in under a minute (readings, chems prefilled from last time, tasks, optional photo), save, and see what that visit earned: fee minus chem cost. Then the app moves to the next stop on its own. Fuel, supply runs and lunch are one-tap stops with an optional cost, so the day's P&L is honest. Everything adds up into Costs, the live P&L, and a chemical shopping list built from what was actually used.

## Success test

On a 390px phone, in the demo, a first-time viewer can:
1. Tap the next stop from Today and save a complete visit (4 readings, prefilled chems, tasks) in **≤ 8 taps and under 45 seconds**, with no typing required.
2. Say out loud what that visit earned **without leaving the confirmation screen**.
3. Find today's chemical shopping list in **≤ 2 taps** from Today.

Adam should be able to say "that's my app, but faster" in the first call.

## Experience Principles

1. **Prefilled over blank.** Every field starts at last visit's value or the ideal default; the tech confirms or nudges. *Trade-off:* this risks people saving stale data without looking, so changed values are highlighted and out-of-range readings are flagged in color. We accept that risk in exchange for speed.
2. **Money at the moment of work.** Earnings show where the work happens (the Today strip, the post-save confirmation, pool detail), not just in a reports tab. *Trade-off:* a solo owner wants this, but a tech shouldn't see it. For the POC we design for the owner and hide money only in the inactive tech-view entry point.
3. **Sunlight first, decoration last.** Light, high-contrast ground (dark text on white/off-white; positive polarity reads best in bright sun), large type, 7:1 key numbers, 48px+ targets, and color only where it means something (in range / low / high, earned / spent). A dark theme follows the system setting for dawn/dusk. *Trade-off:* this gives up the dark look of the current mockup and its gradients and emoji in exchange for readability at noon in Florida.

## Aesthetic Direction

- **Philosophy**: Utilitarian field tool. Light-first and high-contrast on a soft pool-water ground, numbers as the hero. Dark theme secondary.
- **Type**: Sora (headlines, titles, numbers) + Figtree (body, labels). No mono fonts.
- **Tone**: Plain, direct, confident. Tradesperson language: short labels, numbers first, no jargon.
- **Reference points**: To be sourced from Mobbin in Phase 4 by screen type (route/delivery task list with next-stop hero; field data-entry forms with steppers). Candidates for the spirit: courier/driver apps, fitness workout loggers, trading-app money displays.
- **Anti-references**: Generic SaaS dashboards; per-pool-priced competitor apps (dense tables, tiny targets); the current mockup's gradient headers and emoji tab icons; low-contrast pastel light themes and thin/gray text that wash out in sun; dark-only designs that turn into a mirror under glare.

## Existing Patterns (from the current mockup)

- Typography: Space Grotesk 400–700 for everything; uppercase micro-labels with letter-spacing.
- Colors: near-black ground `#0a0e16`, cards `#141b29`, borders `#232c3e`, muted text `#7e8aa0`; teal primary `#14b8a6`/`#0d9488`/`#2dd4bf`; orange accent `#f97316` (add/cost); reading states low `#f97316`, ideal `#34d399`, high `#f87171`.
- Spacing: 18px screen gutters, 10–12px card gaps, 10–16px radii.
- Components: teal gradient headers, stop cards, pool cards with initials avatar, stat boxes, reading grid (low/ideal/high cells), floating blurred tab bar with emoji icons, settings rows.

These are the starting vocabulary. Phase 4 directions may evolve or replace them. Teal/orange is the brand memory Adam already has; the ground flips to light.

## Component Inventory

| Component | Status | Notes |
| --- | --- | --- |
| Tab bar | Modify | Real icons, fewer roots, 48px targets |
| Day strip (progress + earned) | New | Top of Today |
| Next-stop hero card | New | Address, pool, last visit, Start button |
| Stop row | Modify | Pool and non-pool variants, done state |
| Add non-pool stop sheet | New | Fuel / Supply / Lunch + optional cost |
| Reading stepper (FC, pH, TA, CYA) | New | Replaces grid; prefilled, range color |
| Chem row with quantity stepper | Modify | Prefilled from last visit, cost shown |
| Task chips | Modify | Skim, brush, vacuum, baskets, filter |
| Photo slot | Modify | Optional |
| Customer note field | Modify | |
| Time-on-site timer | New | Automatic, in log header |
| Visit-earned confirmation | New | Fee − chem cost, auto-advance countdown |
| Pool card / Pool detail | Modify | History, readings trend, per-pool margin |
| P&L summary + cost list | Modify | Day / week / month |
| Shopping list | New | Aggregated from chem usage, checkable |
| Onboarding steps (3) | New | Business name, service fee, first pools |
| Inactive entry row | New | "Coming soon" treatment for dropped features |

## Language

English / Spanish, switched in Account → Language and onboarding step 1. All UI labels, dates and units translate instantly; customer names and notes stay as written. Layouts allow ~25% longer Spanish strings.

## Key Interactions

- **Start stop**: tap the hero → Log visit opens with the timer running.
- **Readings**: − / + steppers in sensible increments (pH 0.1, FC 0.5, TA 10, CYA 10); value color shifts low/ideal/high live.
- **Chems**: prefilled rows; changed rows highlight; running chem cost in the save bar.
- **Save**: sticky bottom bar "Save visit · $X earned" → confirmation shows fee, chem cost and net, plus "Next: [pool]" with a 3s auto-advance and a Stay button.
- **Non-pool stop**: "+ Stop" on Today → sheet with 3 big options → optional cost → inserted into route.
- **Save → Today**: after the 3s confirmation the app returns to Today with the next stop as the hero.
- **Inactive features**: visible rows (Import CSV/Excel, Add technician, Subscription, Desktop, Repairs) open a small "Coming soon" note.

## Responsive Behavior

Mobile only, designed at 390×844 and shown in an iPhone frame. Must hold up at 375 wide. No desktop layout in this POC.

## Accessibility Requirements

- WCAG AA: text ≥ 4.5:1, large numbers ≥ 3:1; key numbers and primary actions target ≥ 7:1 for sunlight.
- Touch targets ≥ 48px; primary actions ≥ 56px tall, reachable with one thumb.
- Reading state is never shown by color alone: add a label (Low / OK / High) or an icon.
- Steppers expose their values to screen readers; focus order follows the visual order; the confirmation's auto-advance can be paused.

## Out of Scope

Shown as visible but inactive entry points, not built:
- CSV / Excel import from competitor apps
- Multi-user / technician accounts and finance restrictions
- Subscription, pricing, 2-week trial, billing
- Desktop version (records download, map routing)
- Pool repair jobs

Not shown at all:
- Salt and calcium hardness readings
- Route optimization / maps
- Customer-facing reports, invoicing, payments
- Real data, auth, sync, offline behavior
