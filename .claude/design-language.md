# Maple Health Solution — Design Language

**Brand:** Maple Health Solution — Healthcare Services
**Version:** 1.0
**Last Updated:** April 2026

---

## 1. Brand Philosophy

The visual identity of Maple Health Solution is built on three pillars:

- **Trust** — calm, clinical confidence conveyed through navy and white
- **Vitality** — grounded in nature, expressed through the forest green of the maple leaf
- **Warmth** — approachable and human, anchored by terracotta and soft pastel fills

Every color decision must reinforce one or more of these pillars. When in doubt, default to restraint — less color creates more impact.

---

## 2. Color Palette

### 2.1 Brand Anchors (Direct Logo Colors)

These three colors are extracted directly from the logo. They carry the full weight of the brand identity and must be used intentionally.

| Token | Name | Hex | Role |
|---|---|---|---|
| `--color-green` | Forest Green | `#3A6B45` | Primary brand color |
| `--color-navy` | Navy Deep | `#1E3A5C` | Authority & text |
| `--color-terra` | Terracotta | `#A6402E` | Accent & warmth |

### 2.2 Pastel Fills (Derived from Brand Anchors)

These are desaturated, lightened versions of the brand anchors. They create breathing room without diluting the brand.

| Token | Name | Hex | Derived From |
|---|---|---|---|
| `--color-sage` | Sage Mist | `#E8F0E9` | Forest Green |
| `--color-fern` | Soft Fern | `#C8DED0` | Forest Green |
| `--color-steel` | Steel Whisper | `#D2DCEA` | Navy Deep |
| `--color-blush` | Blush Clay | `#EFD9D0` | Terracotta |

### 2.3 Neutral Base

| Token | Name | Hex | Role |
|---|---|---|---|
| `--color-white` | Off White | `#F7F5F2` | Page / hero background |
| `--color-text-body` | Soft Charcoal | `#3D4B42` | Long-form body text |
| `--color-border` | Pale Border | `#D9DDD8` | Dividers, input borders |

---

## 3. Color Usage Rules

### 3.1 Backgrounds

| Context | Color | Token | Notes |
|---|---|---|---|
| Page / global background | Off White | `--color-white` | Default surface for all pages |
| Hero section | Off White or Sage Mist | `--color-white` / `--color-sage` | Alternating works well |
| Alternating content sections | Sage Mist → Steel Whisper → Sage Mist | Cycle these two | Never use Navy or Terracotta as a full-width background |
| Feature / highlight cards | Soft Fern | `--color-fern` | Used for card surfaces in lists |
| Testimonial / quote blocks | Blush Clay | `--color-blush` | Warmth; use sparingly, max once per page |
| Footer | Navy Deep | `--color-navy` | The only full-width dark section |

**Rule:** Never place two adjacent sections of the same background color. Always alternate.

---

### 3.2 Typography Colors

| Element | Color | Token | Notes |
|---|---|---|---|
| Page title (H1) | Navy Deep | `--color-navy` | Establishes authority |
| Section headings (H2) | Forest Green | `--color-green` | Brand-forward, readable |
| Sub-headings (H3, H4) | Navy Deep | `--color-navy` | Consistency with H1 |
| Body text (paragraphs) | Soft Charcoal | `--color-text-body` | Easier to read than full black |
| Muted / supporting text | `#7A8C81` (60% of Forest Green) | — | Captions, metadata, labels |
| Footer text | Off White | `--color-white` | On Navy footer background |
| Links (inline) | Forest Green | `--color-green` | Underlined; on hover → Terracotta |

**Rule:** Never use Terracotta as a heading or body text color. It is an accent only.

---

### 3.3 Buttons & CTAs

#### Primary Button
- **Background:** Forest Green `#3A6B45`
- **Text:** Off White `#F7F5F2`
- **Border:** None
- **Hover:** Darken background to `#2E5638`
- **Use for:** Main call-to-action ("Book a Visit", "Contact Us", "Get Started")

#### Secondary Button
- **Background:** Transparent
- **Text:** Forest Green `#3A6B45`
- **Border:** 1.5px solid Forest Green `#3A6B45`
- **Hover:** Background fills to Sage Mist `#E8F0E9`
- **Use for:** Supporting actions ("Learn More", "View Services", "Download")

#### Tertiary / Ghost Button (on dark backgrounds)
- **Background:** Transparent
- **Text:** Off White `#F7F5F2`
- **Border:** 1.5px solid Off White `#F7F5F2`
- **Hover:** Background fills to `rgba(255,255,255,0.12)`
- **Use for:** Buttons placed on the Navy footer or any dark section

#### Danger / Alert Button
- **Background:** Terracotta `#A6402E`
- **Text:** Off White `#F7F5F2`
- **Use for:** Irreversible or urgent actions only (e.g. "Cancel Appointment")

---

### 3.4 Badges, Tags & Pills

| Type | Background | Text | Border | Use Case |
|---|---|---|---|---|
| Status: Active / Open | Soft Fern `#C8DED0` | Forest Green `#3A6B45` | None | "Accepting patients", "Open today" |
| Status: Urgent / Alert | Blush Clay `#EFD9D0` | Terracotta `#A6402E` | None | "Urgent care", "Limited availability" |
| Status: Info / Note | Steel Whisper `#D2DCEA` | Navy Deep `#1E3A5C` | None | "New service", "Updated hours" |
| Category / Tag | Sage Mist `#E8F0E9` | `#5A6B5E` | None | Service categories |

**Rule:** Never use a full-saturation brand color as a badge background. Always use the pastel version.

---

### 3.5 Cards & Containers

| Card Type | Background | Border | Header Text | Body Text |
|---|---|---|---|---|
| Standard service card | Off White `#F7F5F2` | 1px `--color-border` | Navy `#1E3A5C` | Soft Charcoal |
| Featured / highlight card | Soft Fern `#C8DED0` | None | Forest Green `#3A6B45` | Soft Charcoal |
| Testimonial card | Blush Clay `#EFD9D0` | None | Terracotta `#A6402E` | Soft Charcoal |
| Alert / info card | Steel Whisper `#D2DCEA` | Left border 3px Navy | Navy `#1E3A5C` | Navy |
| Icon feature card | Sage Mist `#E8F0E9` | None | Forest Green `#3A6B45` | Soft Charcoal |

---

### 3.6 Navigation

| Element | Color | Notes |
|---|---|---|
| Nav background | Off White `#F7F5F2` | Sticky header |
| Nav links | Navy Deep `#1E3A5C` | Default state |
| Nav link (hover) | Forest Green `#3A6B45` | With underline |
| Nav link (active) | Forest Green `#3A6B45` | Bold, with green underline bar |
| Mobile nav background | Off White `#F7F5F2` | Full-screen overlay |
| Nav CTA button | Forest Green (Primary Button) | "Book Now" or "Contact" |

---

### 3.7 Forms & Inputs

| Element | Default State | Focus State | Error State |
|---|---|---|---|
| Input background | Off White `#F7F5F2` | Off White | Off White |
| Input border | `#D9DDD8` | Forest Green `#3A6B45` | Terracotta `#A6402E` |
| Label text | Navy `#1E3A5C` | Navy | Terracotta `#A6402E` |
| Helper text | `#7A8C81` | `#7A8C81` | Terracotta |
| Submit button | Primary Button rules | — | — |

---

### 3.8 Icons

| Context | Color | Notes |
|---|---|---|
| Primary icons (services, features) | Forest Green `#3A6B45` | On light backgrounds |
| Supporting / UI icons (arrows, chevrons) | Navy Deep `#1E3A5C` | Navigation, interactive |
| Icons on dark backgrounds | Off White `#F7F5F2` | Footer, navy sections |
| Alert / warning icons | Terracotta `#A6402E` | Sparingly |

---

### 3.9 Dividers & Decorative Lines

| Element | Color | Thickness |
|---|---|---|
| Section dividers | `#D9DDD8` | 1px |
| Accent rule below H2 | Forest Green `#3A6B45` | 3px, 40px wide |
| Footer separator | `rgba(255,255,255,0.2)` | 1px |

---

## 4. What Not to Do

- **Do not** use Forest Green, Navy, or Terracotta as a full-page background color
- **Do not** place Terracotta text on any background other than Off White or Blush Clay
- **Do not** mix Blush Clay and Steel Whisper in adjacent sections — they create a jarring warm/cool clash
- **Do not** use more than two brand anchor colors in any single component
- **Do not** use black (`#000000`) anywhere — use Navy or Soft Charcoal instead
- **Do not** use pure white (`#FFFFFF`) — always use Off White `#F7F5F2`
- **Do not** add opacity to brand anchor colors to create pastels — use the designated pastel tokens

---

## 5. Color Pairing Quick Reference

| Foreground | Background | Approved? | Notes |
|---|---|---|---|
| Navy `#1E3A5C` | Off White `#F7F5F2` | ✅ Yes | Default body pairing |
| Navy `#1E3A5C` | Sage Mist `#E8F0E9` | ✅ Yes | Section headings |
| Navy `#1E3A5C` | Soft Fern `#C8DED0` | ✅ Yes | Card headings |
| Forest Green `#3A6B45` | Off White `#F7F5F2` | ✅ Yes | H2 headings, CTAs |
| Forest Green `#3A6B45` | Steel Whisper `#D2DCEA` | ✅ Yes | Section sub-headings |
| Off White `#F7F5F2` | Navy `#1E3A5C` | ✅ Yes | Footer text, reversed buttons |
| Terracotta `#A6402E` | Off White `#F7F5F2` | ✅ Yes | Accent badges, links |
| Terracotta `#A6402E` | Blush Clay `#EFD9D0` | ✅ Yes | Warm badge text |
| Terracotta `#A6402E` | Sage Mist `#E8F0E9` | ⚠️ Use with care | Low contrast — avoid for small text |
| Navy `#1E3A5C` | Blush Clay `#EFD9D0` | ⚠️ Use with care | Works for labels only, not large blocks |
| Forest Green `#3A6B45` | Soft Fern `#C8DED0` | ⚠️ Use with care | Low contrast — bold text only |
| Any color | Terracotta `#A6402E` | ❌ No | Never use Terracotta as a background |
| Any color | Navy `#1E3A5C` (full bg) | ❌ No (footer only) | Only in footer |

---

## 6. CSS Variables Reference

```css
:root {
  /* Brand Anchors */
  --color-green:       #3A6B45;
  --color-navy:        #1E3A5C;
  --color-terra:       #A6402E;

  /* Pastel Fills */
  --color-sage:        #E8F0E9;
  --color-fern:        #C8DED0;
  --color-steel:       #D2DCEA;
  --color-blush:       #EFD9D0;

  /* Neutral Base */
  --color-white:       #F7F5F2;
  --color-text-body:   #3D4B42;
  --color-text-muted:  #7A8C81;
  --color-border:      #D9DDD8;

  /* Hover States */
  --color-green-dark:  #2E5638;
  --color-navy-dark:   #162D47;
}
```

---

*This document should be treated as the single source of truth for all color decisions across the Maple Health Solution website and branded materials.*