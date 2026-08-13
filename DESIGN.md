---
name: shuvshow
description: A live visual surface for terminal coding agents.
colors:
  brand: "#D35C46"
  brand-hover: "#B64E36"
  ink: "#0C1119"
  light: "#E7ECF3"
typography:
  body:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.3
rounded:
  sm: "6px"
  md: "8px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
components:
  brand-home:
    textColor: "{colors.brand}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "16px 16px 12px"
---

# Design System: shuvshow

## 1. Overview

**Creative North Star: "The Live Devil Stage"**

shuvshow is a compact working surface whose content always gets top billing. Its selectable themes
continue to control the viewer and published surfaces; the shuv identity appears through a horned stage
mark, the Midnight Brick brand color, precise naming, and clear live-state feedback.

The system is playful, precise, and alive without becoming theatrical chrome. It explicitly rejects
generic AI dashboard styling, ornamental glass and glow, and decoration that competes with a user's
work.

**Key Characteristics:**

- Dense, familiar product UI.
- Restrained brand expression around a vivid devil-family mark.
- Theme-native content with an identity that remains recognizable in every theme.
- Fast, state-driven motion with reduced-motion support.

## 2. Colors

Midnight Brick is the fork identity; selectable viewer themes remain the working palette.

### Primary

- **Midnight Brick:** The shuv family color. Use it for the product mark and sparse branded emphasis.
- **Deep Brick:** Hover and active treatment for brand-only controls.

### Neutral

- **Night Ink:** The dark field inside the mark and the family anchor for dark branded artifacts.
- **Signal Light:** The mark's internal surface lines and light-on-dark branded detail.

### Named Rules

**The Stage Rule.** Published work owns the palette and the visual hierarchy; brand color never washes
over content.

**The Live-State Rule.** Connectivity remains a semantic green state with a shape cue. Midnight Brick
does not replace success or connection colors.

## 3. Typography

**Display Font:** System UI sans serif
**Body Font:** System UI sans serif

**Character:** Familiar, compact, and platform-native. The mark and product behavior provide identity;
type never performs for its own sake.

### Hierarchy

- **Title** (500, 15px, 1.3): Product wordmark and compact navigation titles.
- **Body** (400, 14px, 1.5): Interface copy and comments; prose remains within 75ch.
- **Label** (500, 13px, 1.3): Actions, metadata, and compact controls.

### Named Rules

**The One-Family Rule.** Use the existing system sans stack throughout the product UI. Do not add a
display face to routine controls.

## 4. Elevation

shuvshow is flat by default. Tonal layers, borders, and content grouping create depth; shadows appear
only where existing themes use them to express a temporary interactive layer.

### Named Rules

**The Content-First Rule.** Never elevate brand chrome above the post being viewed.

## 5. Components

### Buttons

- **Shape:** Existing gently curved controls (6px to 8px radius).
- **Primary:** Theme accent for task actions; Midnight Brick is reserved for brand actions.
- **Hover / Focus:** Immediate color response and a 2px visible focus outline.
- **Secondary / Ghost:** Theme-native text and borders, never decorative fills.

### Cards / Containers

- **Corner Style:** Existing theme radius.
- **Background:** Theme surface tokens.
- **Shadow Strategy:** Flat by default.
- **Border:** Theme border token; no colored side stripes.
- **Internal Padding:** Existing 8px and 16px rhythm.

### Inputs / Fields

- **Style:** Theme surface, full border, familiar radius.
- **Focus:** Visible theme-accent outline with no layout shift.
- **Error / Disabled:** Text or icon accompanies semantic color.

### Navigation

Navigation stays compact and conventional. The horned stage mark and `shuvshow` wordmark form one home
control; live state is adjacent but remains independently legible.

### Brand Mark

The mark is a horned stage/window holding three surface lines and a pointed tail. Use the full-color
master on fixed branded artifacts and the monochrome `currentColor` master in theme-aware UI.

## 6. Do's and Don'ts

### Do:

- **Do** keep Midnight Brick rare enough that the mark remains distinctive.
- **Do** preserve theme ownership of working surfaces and controls.
- **Do** maintain WCAG 2.2 AA contrast and keyboard-visible focus states.
- **Do** use state-driven motion between 150ms and 250ms and respect reduced motion.

### Don't:

- **Don't** use generic AI dashboard styling: purple gradients, glass panels, or ornamental glow.
- **Don't** add theatrical chrome that competes with the work being presented.
- **Don't** use colored side-stripe borders, gradient text, or nested decorative cards.
- **Don't** turn compatibility names into visible branding defects by mechanically renaming stable data,
  configuration, or integration contracts.
