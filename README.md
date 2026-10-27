# panavb.com

Personal site for Panav B. Built with [Astro](https://astro.build), hosted on Cloudflare Pages, edited with [Pages CMS](https://pagescms.org).

## Editing (no code)

1. Go to **panavb.com/admin** (it forwards to app.pagescms.org) and sign in with GitHub.
2. Open this repo. You'll see **Blog posts**, **Work** and **Experience**.
3. Edit, drag screenshots into the editor, and hit **Save**. The site rebuilds and is live in about a minute.

Post status:
- **draft**: has its own page for previewing, but isn't listed anywhere and isn't indexed by Google
- **planned**: listed as "Soon" with no page
- **published**: live everywhere, including the RSS feed

Experience and Work entries have a **Hide from the site** switch.

## Where things live

- `src/content/blog`, `src/content/work`, `src/content/experience`: the content
- `public/media`: images and files uploaded from the editor
- `src/components`: the home page sections
- `src/styles/global.css`: all styles

## Running locally (optional)

```
npm install
npm run dev
```
