# Karen Pelletier - Academic Portfolio Website

A modern, responsive academic portfolio website built with Astro, featuring smooth animations and an elegant design.

## Overview

This is a personal academic website showcasing research publications, teaching activities, and professional information. Built with performance and accessibility in mind.

**Live site:** [karenpelletier.ch](https://karenpelletier.ch)

## Tech Stack

- **[Astro](https://astro.build)** - Static site generator
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[DaisyUI](https://daisyui.com)** - Component library for Tailwind

## Features

- Single-page application with smooth section navigation
- Scroll-triggered animations with IntersectionObserver
- Responsive design with mobile-friendly navigation
- SEO optimized with JSON-LD structured data
- Automatic sitemap and RSS feed generation
- Lazy image loading
- Reduced motion support for accessibility

## Prerequisites

- [mise](https://mise.jdx.dev) (recommended) or Node.js 22+

## Getting Started

### With mise (recommended)

```bash
# Install dependencies
mise install

# Install npm packages
npm install

# Start development server
npm run dev
```

### Without mise

```bash
# Ensure Node.js 22+ is installed
node --version

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

## Available Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start local dev server at `localhost:4321`  |
| `npm run build`   | Build production site to `./dist/`          |
| `npm run preview` | Preview build locally before deploying      |

## Project Structure

```
├── src/
│   ├── pages/          # Astro routes (index, 404, RSS)
│   ├── sections/       # Content sections (intro, about, publications...)
│   ├── components/     # Reusable components (Navbar, Footer, SEO...)
│   ├── layouts/        # Page layouts
│   ├── data/           # Site metadata and navigation config
│   ├── styles/         # Global CSS and animations
│   └── js/             # Utility scripts
├── public/             # Static assets (documents, icons, manifest)
├── mise.toml           # mise configuration
└── astro.config.mjs    # Astro configuration
```

## Deployment

The site automatically deploys to GitHub Pages on push to the `main` branch via GitHub Actions.

## License

MIT
