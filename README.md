# Astro Explanations: Folders to leave alone

.astro contains the auto-generated cache. Ensure this is in the .gitignore, you don't want this in version control.
.vscode contains the workspace settings, works for Zed and VScode. May or may not want this in version control.
.node_modules is the engine room and will contain the actual code for external dependencies used in the project downloaded by npm.


## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

/public contains all downloadable assets that are served as-is by the web server without astro compiling or optimizing it.
  favicon.ico, favicon.svg, robots.txt, manifest files, raw downloadble assets (pdf crochet patterns).
  How it works: public/favicon.svg is downloadable at http://localhost:4321/favicon.svg and is directly accessible in the browser.

/src contains the source code and this is where building happens. Naturally. Put files in the correct folders to stay sane.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
