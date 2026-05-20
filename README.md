# Mohamad Taher — Portfolio

A personal portfolio website built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/), showcasing my projects, experience, education, and skills.

🔗 **Live Site:** [MohamadTaher.github.io/portfolio](https://MohamadTaher.github.io/portfolio/)

---

## Tech Stack

- **Framework:** Astro
- **Styling:** Tailwind CSS v4
- **Deployment:** GitHub Pages via GitHub Actions

## Project Structure

```
├── public/              # Static assets (favicon, etc.)
├── src/
│   ├── components/      # Astro components (Hero, About, Projects, etc.)
│   ├── pages/           # Page routes
│   ├── styles/          # Global CSS
│   └── config.ts        # All site content (edit this to update the site)
├── .github/workflows/   # GitHub Actions deploy workflow
├── astro.config.mjs     # Astro configuration
└── package.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm

### Installation

```bash
git clone https://github.com/MohamadTaher/portfolio.git
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to view the site locally.

### Build

```bash
npm run build
```

The built site will be in the `dist/` directory.

## Customization

All site content is managed through a single file: [`src/config.ts`](src/config.ts). Edit this file to update:

- Name, title, and description
- Social links (email, LinkedIn, GitHub)
- About me section
- Skills
- Projects
- Work experience
- Education

## Deployment

The site automatically deploys to GitHub Pages whenever changes are pushed to the `main` branch. This is handled by the GitHub Actions workflow in `.github/workflows/deploy.yml`.

## License

This project is open source and available under the [MIT License](LICENSE.md).
