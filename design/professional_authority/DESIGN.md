---
name: Professional Authority
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#44474e'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#75777f'
  outline-variant: '#c5c6cf'
  surface-tint: '#4e5e81'
  primary: '#031635'
  on-primary: '#ffffff'
  primary-container: '#1a2b4b'
  on-primary-container: '#8293b8'
  inverse-primary: '#b6c6ef'
  secondary: '#006e25'
  on-secondary: '#ffffff'
  secondary-container: '#80f98b'
  on-secondary-container: '#007327'
  tertiary: '#2a0f00'
  on-tertiary: '#ffffff'
  tertiary-container: '#4a1f00'
  on-tertiary-container: '#e97000'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#b6c6ef'
  on-primary-fixed: '#081b3a'
  on-primary-fixed-variant: '#364768'
  secondary-fixed: '#83fc8e'
  secondary-fixed-dim: '#66df75'
  on-secondary-fixed: '#002106'
  on-secondary-fixed-variant: '#00531a'
  tertiary-fixed: '#ffdbc8'
  tertiary-fixed-dim: '#ffb68a'
  on-tertiary-fixed: '#321300'
  on-tertiary-fixed-variant: '#743500'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
  navy-deep: '#1a2b4b'
  success-green: '#28a745'
  cta-orange: '#fd7e14'
  text-main: '#2d3748'
  text-muted: '#718096'
  border-light: '#e2e8f0'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 4.8rem
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 3.2rem
    fontWeight: '700'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Montserrat
    fontSize: 2.4rem
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 1.8rem
    fontWeight: '400'
    lineHeight: '1.8'
  body-md:
    fontFamily: Inter
    fontSize: 1.6rem
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 1.4rem
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 2.8rem
    fontWeight: '700'
    lineHeight: '1.3'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 1.0rem
  gutter: 2.4rem
  margin-mobile: 1.6rem
  margin-desktop: 4.0rem
  content-max-width: 1200px
  article-max-width: 720px
---

## Brand & Style

This design system is engineered for **Gestión Autónomo**, a platform serving Spanish freelancers and small business owners. The brand personality is **Institutional, Efficient, and Authoritative**, aimed at providing clarity in the often complex world of tax and business management.

The design style follows a **Modern Corporate Minimalism** approach:
*   **High-Information Density:** Optimized for long-form educational content and regulatory updates.
*   **Functional Clarity:** Heavy use of whitespace to reduce cognitive load during complex tasks.
*   **Conversion-Centric:** Clear visual hierarchy that guides users from information gathering to affiliate conversion or ad engagement.
*   **Performance First:** Minimal heavy assets or complex animations to ensure rapid SEO-friendly loading times.

## Colors

The palette is anchored by **Institutional Navy Blue**, establishing trust and stability. 

*   **Primary (#1a2b4b):** Used for navigation, headings, and primary brand elements to convey seriousness.
*   **Secondary (#28a745):** A "Success Green" reserved for conversion points, "Approved" statuses, and positive financial indicators.
*   **Tertiary (#fd7e14):** An "Action Orange" used sparingly for high-urgency CTAs, notifications, or specific affiliate triggers to ensure they pop against the blue/white base.
*   **Neutral:** A range of cool grays and pure white (#ffffff) to maintain a clean, document-like feel for long-form reading.

## Typography

The typography uses a **1rem = 10px** scaling system for simplified developer handoff.

*   **Headlines:** Montserrat provides a geometric, modern, and confident feel. It is used for all titles to establish a strong hierarchy.
*   **Body:** Inter is chosen for its exceptional legibility at small sizes and high x-height. 
*   **Readability Constraints:** For long-form articles, the text container is strictly limited to a **max-width of 720px** to maintain an optimal 65-75 characters per line, preventing eye fatigue.
*   **Vertical Rhythm:** Generous line-height (1.8 for body text) is implemented to make dense tax information more digestible.

## Layout & Spacing

This design system utilizes a **12-column Fixed Grid** for desktop and a **Fluid Single Column** for mobile.

*   **Grid System:** 1200px max container with 24px gutters.
*   **Article Layout:** Uses a "Main + Sidebar" model (8 columns for content, 4 for the sticky sidebar/AdSense). On tablet/mobile, the sidebar reflows below the content or is hidden for certain AdSense containers.
*   **Padding Scale:** Built on a 4px/8px base (0.4rem/0.8rem). Use 2.4rem for standard section spacing and 4.8rem or 6.4rem for Hero section vertical padding.

## Elevation & Depth

To maintain a "Fast-Loading" and "Corporate" feel, depth is created through **Tonal Layers and Low-Contrast Outlines** rather than heavy shadows.

*   **Surfaces:** Use `#ffffff` for the main content areas and `#f8f9fa` (Neutral) for background sections or sidebar cards to create subtle separation.
*   **Outlines:** Use 1px borders in `border-light` (#e2e8f0) for cards and input fields.
*   **Interactive Elevation:** Only "Primary Buttons" and "Article Cards" receive a soft, low-opacity ambient shadow on hover to indicate interactivity without cluttering the visual field.

## Shapes

The shape language is **Soft (0.25rem / 4px)**. This minimal rounding preserves the "Institutional" feel—it is more approachable than sharp corners but remains more professional and structured than highly rounded or pill-shaped designs.

*   **Buttons:** 4px border-radius.
*   **Cards:** 8px (rounded-lg) for article previews to provide a modern "container" feel.
*   **Input Fields:** 4px border-radius.

## Components

### Navigation
A sticky top bar with a white background and 1px bottom border. Links use `label-md` in Navy Blue with a 2px bottom-accent color on active/hover states.

### Article Cards (Grid)
Cards feature a 16:9 featured image, followed by a category tag (using the `Secondary` or `Tertiary` color), a Montserrat H3 title, and a short excerpt. The entire card is a hit area with a subtle background shift on hover.

### Affiliate & CTA Buttons
*   **Primary CTA:** Uses `Secondary` (Green) for "positive" actions like "Calculadora de Cuotas" or "Darse de Alta".
*   **Affiliate Buttons:** Uses `Tertiary` (Orange) to draw immediate attention within the sidebar or article flow, paired with white text and bold weight.

### Table of Contents (ToC)
Located at the start of articles or top of the sidebar. Uses a light gray background (#f8f9fa), subtle indentations for nested headers, and an active-link indicator in Navy Blue.

### AdSense & Sidebar
AdSense placeholders are clearly marked with a "Publicidad" label in `text-muted` 1.0rem font. The sidebar remains sticky as the user scrolls through long-form content to ensure affiliate buttons and ads remain visible.

### Input Fields
Minimalist design with 1px `border-light`. On focus, the border transitions to `Primary` Navy Blue with a 2px soft glow.