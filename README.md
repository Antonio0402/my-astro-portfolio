### Overview

Realtor webiste is built using Next.js, a React framework for server-side rendering and static site generation. It is typed with Typescript and styled using Chakra UI component library.

For state management, Jotai is chosen because of simple, fast React state solution.

This project also is powered by a simple remake caching and synchronizing async state management, working similar to queryClient from React Query library

Together, this project take advantages of Next.Js cutting-edge features and performance optimizations on routing and static rendering to build a fast, scalable commercial website.

### Key Features

1. Search and Filters
   Find products easily with pagination, sorting, and advanced filters
2. Responsive
   Fully responsive design optimized for all devices
3. Rapid API
   Using Rapid API in order to fetching async datas and display filtered datas base on search query parameter
4. SSG and SSR
   The project supports both prefetched data on static routing as well as real-time datas when searching in order to create dynamic routing whichs ensures a sleek and responsive experience.

### Installation

Clone this repo and install all dependencies

```
git clone https://github.com/Antonio0402/realtor-nextjs-project.git

cd realtor-nextjs-project

npm install
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### Screenshot

![Desktop Design](./screenshots/desktop-design.png)

## 👀 Want to learn more?

Feel free to check [Astro's documentation](https://docs.astro.build) or jump into Astro 's [Discord server](https://astro.build/chat).
