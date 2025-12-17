🎨 DESIGN.md
Tailwind UI / UX Guidelines (Stable-style SaaS)

This document defines the single source of truth for layout, spacing, colors, typography, and components.
Do not invent new styles outside this system.

1. Design Philosophy

Clean, calm, SaaS-first UI

Strong whitespace

Minimal color usage

Soft depth (no harsh shadows)

Clear hierarchy > decoration

Avoid

Random gradients

Multiple border radii

Decorative blobs everywhere

Centered paragraphs

2. Layout System
Container
<div class="max-w-7xl mx-auto px-6">

Breakpoint	Padding
Mobile	px-4
Tablet	px-6
Desktop	px-8
Section Spacing

Use ONLY these values:

Section gap:        py-24
Section inner gap:  space-y-12
Card gap:           gap-6


❌ No arbitrary margins (mt-7, mb-13, etc.)

3. Color System
Brand Colors
primary:  #6C4CF1
primary-600
primary-500
primary-400

Neutral
dark:     #0F0B2D
gray-900
gray-700
gray-500
gray-400
gray-200
white

Backgrounds
Page BG:        bg-white
Soft sections: bg-gray-50
Dark sections: bg-[#0F0B2D]


❌ Never mix more than 1 accent color per section

4. Typography
Font
Primary font: Inter (or Plus Jakarta Sans)

Type Scale (Strict)
Element	Tailwind
H1	text-5xl font-semibold tracking-tight
H2	text-3xl font-semibold
H3	text-xl font-medium
Body	text-base text-gray-600
Small	text-sm text-gray-500
Paragraph Rules
leading-relaxed
max-w-prose


❌ No centered long text
❌ No font-size guessing

5. Buttons
Primary
<button class="h-11 px-6 rounded-lg bg-primary text-white font-medium hover:bg-primary-600 transition">

Secondary
<button class="h-11 px-6 rounded-lg border border-primary text-primary hover:bg-primary/5 transition">

Button Rules

Height: 44px

Radius: 8px

One hover effect only

No shadows on buttons

6. Cards
Standard Card
<div class="rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-6">

Dark Card
<div class="rounded-2xl bg-[#141033] text-white p-6">

Card Rules

Radius: 16px

Shadow: one global style

No nested cards unless necessary

7. Icons

Use one icon style only (outline OR duotone)

Icon size:

w-5 h-5 (inline)
w-10 h-10 (feature cards)


Icon container:

<div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">

8. Feature Sections (Stable-Style)
Icon
Title (1 line)
Description (1 line max)


Tailwind example:

<div class="space-y-2">
  <div class="w-10 h-10 bg-primary/10 rounded-lg"></div>
  <h3 class="text-lg font-medium">Cost Optimization</h3>
  <p class="text-sm text-gray-500">
    Automatically reduce AWS waste
  </p>
</div>


❌ No long feature descriptions
❌ No cards inside cards

9. Images & Screenshots
Rules

Rounded: rounded-xl

Shadow only if floating:

shadow-[0_20px_60px_rgba(0,0,0,0.15)]


Prefer product screenshots over stock photos

If stock images are used:

One per section max

10. Background Effects (Blobs)

Allowed

blur-3xl opacity-20 absolute


Rules

Max 1–2 per page

Always behind content

Never intersect text

❌ No moving blobs
❌ No strong gradients

11. Animation Guidelines
Allowed

Fade + translate

Hover micro-interaction

Subtle scale (≤ 1.02)

Example
transition-all duration-200 ease-out


❌ No parallax
❌ No heavy GSAP timelines

12. Forms
Input
<input class="h-11 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/30">

Labels
<label class="text-sm font-medium text-gray-700">

13. What NOT To Do

🚫 Invent new colors
🚫 Random spacing values
🚫 Mixed icon styles
🚫 Multiple shadows
🚫 Centered paragraphs
🚫 Over-decoration

14. Final Rule

If a new UI element doesn’t fit this document, redesign it until it does.

Next Step (Highly Recommended)

If you want, I can:

Convert this into tailwind.config.js

Create reusable components (Button, Card, Section)

Help you refactor your current page to match Stable section by section

Just tell me 👉 “config”, “components”, or “refactor hero”