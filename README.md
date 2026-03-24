# Cinematic Portfolio

A high-fidelity, pixel-perfect personal portfolio built with React, Vite, Tailwind CSS, and GSAP. This project serves as a digital instrument to showcase projects, skills, and professional experience with smooth, weighted animations and a premium aesthetic.

## Features

- **Dynamic Navigation:** A magnetic, floating pill-shaped navbar that adjusts colors dynamically based on background contrast.
- **GSAP Animations:** 
  - Staggered fade-ups for smooth content entrances.
  - Scroll-triggered pinning and stacking effects for the Flagship Projects archive.
  - Magnetic buttons and subtle hover lifts for micro-interactions.
- **Component Architecture:**
  - `Hero`: Full-bleed opening shot with contrast typography.
  - `About Me`: High-contrast symmetric grid layout with styled portrait and dynamic narrative.
  - `Skills`: Functional UI cards dynamically populated with the tech stack.
  - `Projects`: Sticky, stacking archive for flagship projects that scales, blurs, and fades on scroll.
  - `ContactFooter`: Focused call-to-action with interactive availability status.
- **Premium Design System:**
  - Custom SVG noise overlay (`<feTurbulence>`) for visual texture.
  - Rounded container system (`rounded-[2rem]` to `rounded-[3rem]`) for a cohesive, organic feel.
  - Curated color palette and typography combinations based on the chosen aesthetic preset.
- **Optimized External Links:** Secure and user-friendly outbound linking to LinkedIn, GitHub, and live projects.

## Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v3.4.17
- **Animation:** GSAP 3 (+ ScrollTrigger)
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AntonK0/cinematic_portfolio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd cinematic_portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the application in your browser.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

This will generate a `dist` folder containing the static assets.

## Project Structure

```text
src/
├── assets/         # Images, PDFs, and static files
├── components/     # React components divided by section
│   ├── About.jsx
│   ├── ContactFooter.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── Projects.jsx
│   └── Skills.jsx
├── App.jsx         # Main application component
├── index.css       # Global styles and Tailwind configuration
└── main.jsx        # Entry point
```

## License

This project is open-source and available under the MIT License.
