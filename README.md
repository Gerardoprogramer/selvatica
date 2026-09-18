# Selvática

A cinematic hospitality concept built around the landscape of Arenal, Costa Rica.

**Selvática** is a conceptual web experience focused on frontend craft, interaction design, accessibility, performance, and responsive art direction. Rather than presenting a traditional hotel landing page, the project explores how motion, typography, photography, and layout can create a slower and more immersive digital experience.

> Selvática is a fictional concept created as a design and development project. It does not represent a real hotel, tourism operator, or commercial business.

### Live site

**[selvatica.gerardomartinez.dev](https://selvatica.gerardomartinez.dev)**

---

## Overview

The main goal of Selvática was to build a visually expressive website without sacrificing engineering quality.

The experience is structured around different ways of interacting with the landscape:

* Cinematic hero and navigation
* Scroll-driven experiences section
* Editorial territory composition
* Interactive photographic archive
* Accessible image lightbox
* Morning-to-night narrative section
* Booking inquiry drawer
* Fully responsive layouts with different desktop and mobile behavior

The project intentionally avoids generic SaaS patterns, excessive cards, glassmorphism, and decorative animations without purpose.

---

## Tech Stack

* **Next.js 16** — App Router
* **React**
* **TypeScript**
* **Tailwind CSS v4**
* **Motion**
* **React Icons**
* **next/image**
* **next/font**
* **Vercel**

---

## Frontend Architecture

The project uses **Server Components by default** and introduces Client Components only where browser-side interaction is required.

Examples include:

* Booking drawer state
* Mobile navigation
* Scroll-driven experience transitions
* Interactive gallery
* Lightbox navigation

Static content, layout, metadata, and most sections remain server-rendered.

This keeps the interactive layer focused instead of turning the entire application into a client-side experience.

---

## Interaction Design

### Experiences

On desktop, the experience section uses a sticky visual area while the narrative progresses vertically.

The active photography changes according to the section currently entering the viewport.

On mobile, the interaction is replaced by a simpler vertical layout better suited to touch and smaller screens.

### Archive

The photographic archive uses an asymmetric editorial grid rather than a traditional carousel.

Images can be opened in a custom lightbox with:

* Previous and next navigation
* Keyboard arrow controls
* `Escape` to close
* Focus restoration
* Native `<dialog>` semantics

### Booking

The booking interface is implemented as a global drawer accessible from multiple parts of the page.

The form builds a WhatsApp inquiry from the selected:

* Arrival date
* Departure date
* Number of guests

No personal information is stored by the website.

---

## Accessibility

Accessibility was treated as part of the design rather than as a final patch.

The project includes:

* Semantic HTML
* Visible keyboard focus states
* Skip navigation link
* Native `<dialog>` elements
* Keyboard-accessible lightbox navigation
* Focus restoration
* Descriptive image alternative text
* Accessible color contrast
* Reduced-motion support
* Responsive touch targets

### Lighthouse

Recent mobile Lighthouse audit:

| Category       | Score |
| -------------- | ----: |
| Performance    |    93 |
| Accessibility  |   100 |
| Best Practices |   100 |
| SEO            |   100 |

Lighthouse performance scores may vary slightly depending on the test environment.

---

## Performance

The site is image-heavy by design, so image delivery and loading behavior were important considerations.

Optimizations include:

* `next/image`
* AVIF/WebP support
* Responsive `sizes`
* Hero image preload
* Lazy loading for below-the-fold imagery
* Local optimized fonts through `next/font`
* Limited client-side JavaScript
* Motion loaded only where interaction requires it

The visual experience was intentionally preserved instead of removing meaningful imagery or motion solely to maximize a synthetic performance score.

---

## Security

Although Selvática is a static conceptual experience without authentication or a backend, the deployment includes several defensive browser policies.

Configured headers include:

* Content Security Policy
* Strict Transport Security
* `X-Content-Type-Options`
* Referrer Policy
* Permissions Policy
* Anti-framing protections

The application also disables the default Next.js powered-by header.

No private credentials or sensitive data are exposed to the browser.

---

## Responsive Design

Desktop and mobile are not treated as the same layout at different widths.

Some interactions intentionally change depending on the device.

For example:

* Desktop experiences use scroll-driven photography
* Mobile experiences use a natural vertical sequence
* Navigation changes to a full-screen mobile menu
* Gallery layouts adapt to available space
* Typography scales fluidly across viewport sizes

The goal was to preserve the visual identity while respecting the interaction model of each device.

---

## Design Direction

The visual system is inspired by volcanic landscapes, humid forest, stone, water, and mist.

The design combines:

* Large editorial typography
* Serif and sans-serif contrast
* Asymmetric composition
* Dark immersive sections
* Light breathing spaces
* Restrained animation
* Photography-led storytelling

Motion is used primarily to communicate transitions and hierarchy rather than as decoration.

---

## Running Locally

### Requirements

* Node.js
* pnpm

Clone the repository and install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open:

```text
http://localhost:3000
```

Create a production build:

```bash
pnpm build
```

Run the production build locally:

```bash
pnpm start
```

---

## Project Structure

```text
app/
├── layout.tsx
├── page.tsx
├── robots.ts
└── sitemap.ts

components/
├── booking/
├── cta/
├── experiences/
├── gallery/
├── motion/
├── rhythm/
└── territory/

content/
├── experiences.ts
├── gallery.ts
└── rhythm.ts

lib/
└── site.ts

public/
└── assets/
```

Content is separated from presentation where useful, allowing sections such as Experiences, Archive, and Rhythm to be driven from typed data instead of hardcoded repeated markup.

---

## What I Focused On

Selvática was built primarily to explore and demonstrate:

* Advanced responsive layouts
* Frontend architecture
* Visual storytelling
* Interaction design
* Motion with purpose
* Image optimization
* Accessibility
* Semantic HTML
* Performance
* SEO
* Browser security policies

The objective was not only to create a visually strong landing page, but to make the implementation underneath it equally intentional.

---

## Author

**Gerardo Martínez Monge**

Full Stack Developer — Costa Rica

Portfolio: [gerardomartinez.dev](https://www.gerardomartinez.dev)
