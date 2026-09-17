# Design Guide
### Principles, Transitions & Animations Playbook

Reference this guide when building or reviewing any page/component on the Hearts to Hands site.

---

## 1. Design Principles

### 1.1 Visual Hierarchy
- Every section needs exactly one primary focal point (headline, image, or CTA) — not two or three competing for attention.
- Establish hierarchy through **size, weight, and color contrast**, not just position.
- Recommended scan path per section: Headline → Supporting text → Action (CTA button).
- CTA buttons should use a distinct accent color that appears nowhere else on the page except for other CTAs.

### 1.2 Spacing System
- Pick a base unit (commonly **8px**) and build all spacing as multiples of it: 8, 16, 24, 32, 48, 64, 96px.
- Apply consistently to: section padding, card gaps, text margins, button padding.
- Rule of thumb: section vertical padding should be 2-3x larger than internal element spacing, so sections feel distinct from each other.

### 1.3 Color Palette
- **1 primary** brand color (main identity, used in header/logo/key headings).
- **1 accent** color (reserved strictly for CTAs and key highlights — do not overuse).
- **2 neutrals** (e.g., a dark text color and a light background/gray).
- Optional: 1 semantic color set for success/error states (forms, confirmations).
- Avoid introducing a new color per section — this is one of the most common mistakes on organization sites.

### 1.4 Typography
- Maximum of **2 typefaces**: one for headings, one for body (or a single variable font family with multiple weights).
- Suggested scale (base 16px):

| Element | Size | Weight |
|---|---|---|
| H1 | 40-56px | Bold (700) |
| H2 | 28-36px | Semibold (600) |
| H3 | 20-24px | Semibold (600) |
| Body | 16-18px | Regular (400) |
| Small/caption | 13-14px | Regular (400) |

- Line height: 1.4-1.6 for body text, 1.1-1.3 for headings.
- Line length: keep body paragraphs to ~60-75 characters per line for readability.

### 1.5 Whitespace
- Generous section padding (64-120px vertical on desktop, 40-64px on mobile) so sections feel intentional, not cramped.
- Don't let cards/testimonials/team grids touch — minimum 24-32px gap between grid items.

### 1.6 Content Quality
- No duplicated boilerplate copy across sections (a common failure mode — reused paragraphs read as unfinished/lazy).
- Every section should answer a specific visitor question: Who are you? What do you do? Who's involved? Does it work? How do I join?
- Testimonials should include name, role, and affiliation for credibility — avoid anonymous quotes.

### 1.7 Mobile-First Layout
- Design and build the mobile layout first, then expand to desktop — not the reverse.
- Stack multi-column grids vertically below ~768px.
- Collapse navigation into a hamburger/menu icon below tablet breakpoint.
- Minimum tap target size: 44x44px for buttons and links.

### 1.8 Information Architecture
- Keep primary navigation shallow: 5-7 top-level items max.
- Use in-page anchors (`#mentors`, `#gallery`) for related content within a page rather than fragmenting into many thin pages.
- Reserve separate subdomains/microsites only for genuinely distinct, high-traffic sub-products (e.g., an annual conference).

---

## 2. Transitions

| Element | Transition | Duration | Easing |
|---|---|---|---|
| Section entrance | Fade in + translateY(20px → 0) | 400-600ms | ease-out |
| Navbar on scroll | Transparent → solid background/blur | 200-300ms | ease-in-out |
| Button/link hover | Color, underline, or scale(1 → 1.03) | 150-250ms | ease-in-out |
| Page/route change (SPA) | Crossfade or slide | 200-400ms | ease-in-out |
| Image hover (cards) | Scale(1 → 1.05) or slight shadow lift | 200ms | ease-out |
| Accordion/dropdown open | Height auto + fade | 250-300ms | ease-in-out |

**Rule of thumb:** anything under 100ms feels instant/unnoticed; anything over 500ms starts to feel sluggish. Most UI transitions should live in the 150-400ms range.

---

## 3. Animations

### 3.1 Scroll-Triggered Reveals
- Use `IntersectionObserver` to trigger fade/slide-in animations as elements enter the viewport.
- Stagger grid items (cards, team members, testimonials) by 50-100ms each for a cascading effect rather than firing simultaneously.

### 3.2 Counting-Up Statistics
- Animate numbers (e.g., "500+ mentees", "50+ mentors") from 0 to target value over ~1.2-1.8s when scrolled into view.
- Very effective for organization/nonprofit sites to visually communicate impact.

### 3.3 Subtle Parallax
- Apply light parallax (differential scroll speed) only to decorative background layers in the hero — never to primary text or CTAs, which should remain crisp and stationary.

### 3.4 Micro-Interactions
- Button press/ripple feedback on click.
- Icon nudge on hover (e.g., arrow shifts right on "Read More" links).
- Form field focus states with smooth border/label transitions.

### 3.5 What to Avoid
- Autoplaying carousels without user controls (pause/next/prev).
- Animations that block or delay scrolling.
- Infinite looping animations that compete for attention (spinning logos, pulsing badges) — these undermine trust-building, which is the primary goal of most organization sites.
- Overly long animations (>800ms) that make the site feel slow.

---

## 4. Implementation Notes

- **CSS-only approach:** `transition` + `@keyframes` + `IntersectionObserver` covers the majority of the patterns above with zero dependencies — good default for simpler sites.
- **For more complex sequencing:** use **Framer Motion** (React projects) or **GSAP** with the **ScrollTrigger** plugin (framework-agnostic) — GSAP's ScrollTrigger is purpose-built for scroll-reveal patterns.
- Always test animations with `prefers-reduced-motion` media query respected — disable or simplify motion for users who have this accessibility setting enabled.

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 5. Quick Reference Checklist

- [ ] One primary CTA color, used consistently
- [ ] 8px-based spacing system applied throughout
- [ ] Max 2 typefaces, clear size/weight hierarchy
- [ ] No duplicated section copy
- [ ] Mobile layout designed first, tap targets ≥44px
- [ ] Section entrances fade/slide in on scroll (staggered for grids)
- [ ] Stats counters animate on scroll into view
- [ ] Hover/button transitions between 150-250ms
- [ ] No autoplay carousels or infinite distracting loops
- [ ] `prefers-reduced-motion` respected
