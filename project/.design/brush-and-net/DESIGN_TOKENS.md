# Design Tokens: Brush & Net (3a · Deep End Refined)

Approved Oct 20, 2026. Light-first; dark theme follows the system setting (not built in the POC). All values are applied inline in the prototype; this file is the reference.

## Color

| Token | Value | Use |
|---|---|---|
| ink | #0a1b36 | Primary text, titles, numbers |
| ink-2 | #34496a | Secondary text (never lighter) |
| line | #d9e3f0 | Card borders |
| line-soft | #e3eaf3 | Row dividers |
| control-line | #d3deec | Stepper / glass borders |
| card | linear-gradient(180deg,#ffffff,#f6f9fd) | Cards |
| navy | #0a2a5c | Primary action ground, hero |
| navy-grad | radial-gradient(100% 90% at 100% 0%,#1f8aa870,#1f8aa800 60%), linear-gradient(155deg,#123f7a,#0a2a5c 55%,#08214a) | Next-stop hero, save bar |
| on-navy | #ffffff / #eaf1fb / #d6e3f5 | Text on navy (primary / secondary / label) |
| teal | #0a6f8a | Earned, progress, links |
| teal-tint | #e0f2f6 · text #0a5a70 | Changed chem row |
| coral | #b8391d | Costs, counts, High |
| coral-tint | #fde6e1 · text #9a2f17 | High reading, shopping chip |
| ok | #13734a · tint #e3f4ea · text #0f5c3b | OK reading, on-site timer |
| low | #8a5a00 · tint #fdf0d6 · text #6e4800 | Low reading, non-pool stop |
| ground | radial-gradient(110% 45% at 0% 0%,#d4eef4,#d4eef400 60%), radial-gradient(90% 40% at 100% 100%,#dcecf6,#dcecf600 60%), linear-gradient(180deg,#e9f4f7,#eef5f9 50%,#eaf2f8) | Screen background |

Contrast (checked): ink 15.3:1 · ink-2 8.1:1 · teal 5.1:1 · Low 7.2 / OK 7.0 / High 6.3 on tints · on-navy ≥ 9.2:1.

## Type

- **Sora** 700: display 38 (−0.035em), titles 17–28 (−0.02/−0.03em), numbers 19–30 tabular, primary buttons 16–17.
- **Figtree** 500–600: body 15–16/600, secondary 13–15/500, labels 12–13/600.
- No mono fonts. No weight-400 grey text.

## Shape & spacing

- Radii: card 22–24, hero 28, pill 999, task tile 16, chem row 14.
- Screen gutters 16 (cards) / 22 (headlines). Card padding 14–18. Stack gap 10–12.
- Targets: ≥ 44px controls, 52–56px primary buttons, 64px floating tab bar, 68px save bar (both inset 16px, 24px from bottom).
- Shadows: card `0 1px 2px #0a2a5c14, 0 12px 28px -14px #0a2a5c33`; hero `0 18px 36px -18px #0a2a5caa`.
