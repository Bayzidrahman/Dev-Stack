# Dev Stack

Build your ideal development stack: browse technologies, add them to **Your Stack**, remove them again.

**Tech:** React 19 · Vite · Tailwind CSS 4 · DaisyUI 5 · React-Toastify · JSON data

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in /dist
```

## Folder structure

```
dev-stack/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── favicon.svg
│   └── data/technologies.json      ← all technology data (fetched at runtime)
└── src/
    ├── main.jsx                    ← entry point
    ├── App.jsx                     ← page composition + <ToastContainer />
    ├── index.css                   ← Tailwind + DaisyUI + brand gradient (single source)
    ├── assets/
    │   └── hero-stack.svg
    ├── components/
    │   ├── common/                 ← Logo, Spinner, TechIcon, Icons
    │   ├── layout/                 ← Navbar, Footer
    │   ├── home/                   ← Hero, TechnologySection
    │   ├── technology/             ← TechGrid, TechCard
    │   └── stack/                  ← YourStack, StackItem
    ├── constants/                  ← nav/footer links, badge colours
    ├── hooks/                      ← useTechnologies (fetch + loading), useStack (add/remove/clear)
    └── utils/
        └── notify.js               ← all react-toastify messages
```

## Re-theming

Edit `--brand-gradient` in `src/index.css`. The logo, hero highlight, section heading and primary buttons all use it.

## Adding a technology

Append an object to `public/data/technologies.json`. If its `badge` is new, add a colour for it in `src/constants/badgeStyles.js`.
