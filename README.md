# Build-React-App-SSR

---

is a fullstack React development environment, featuring server-side rendering. It's easy configurable and extendable with a minimum of webpack knowledge. It's unopinionated and super leight-weight. It's there to help you build a prototype of your fullstack React app.

## Features

- includes a default template, which makes server-side data injections into your frontend app easy, without any webpack configuration.
- fast recompilation times during development-mode, featuring **HMR**
- Typescript support by default, but not mandatory
- both TailwindCSS and modern-day CSS support by default
- produces minified and hashed, production-ready bundles with seperated JS, CSS and image files

## Installation

---

```bash
npx build-react-app-ssr
```

Executes **bin/install.js**: the command creates a new folder (**my-react-app-ssr**) and copyies all the necessary files into it and then installs the necessary dependencies. The command has one optional parameter, which determines the name of the root folder.

```bash
npx build-react-app-ssr my-app
```

Would create a new project into the **my-app** folder.

<br>

## Scripts

---

### Developement Scripts:

---

```bash
npm run dev-client
```

Starts the "pure" frontend dev-server on **localhost:8080** (featuring **HMR**), targeting **src/client/index.tsx**.

```bash
npm run dev-server
```

Starts the backend server in watch-mode (targeting **src/backend/server.ts** and using nodemon-webpack-plugin). The compilation runs independent from the frontend.

```bash
npm run dev-ssr
```

THIS might as well be the **highlight** of this whole project. Both frontend and backend (**src/ssr/client/index.tsx** and **src/ssr/server/servert.tsx**) are compiled within the same compilation cycle, one with target **web**, one with target **node**. Both entry points are being watched and getting almost instantly recompiled on save when edited.\
The command also opens the browser, running on **localhost:8000**. When clicking on refresh, the server (**src/ssr/server/server.tsx**) serves the edited frontend bundle, which includes the changes you've just made, plus the initial data you might have fed into it.\
Notice that a simultaneous webpack-compilation of both frontend and backend is crucial, if you want to inject some sort of initial data into your frontend App. For more details read the **SSR-related** paragraph and look at the source code.

### Build Scripts:

---

```bash
npm run build-client
npm run build-server
npm run build-ssr
```

These commands are the equivalent to the dev-scripts above. The individual "production-ready" bundles are outputed into the **dist** folder by default (**dist/client**, **dist/server**, **"dist/ssr"**). For details concerning the output-files and output-structure read the **Output** section.

### Start Scripts:

---

```bash
npm run start-std
```

After you've **build** your "standard" application (frontend and backend seperately compiled) this script starts your app on **localhost:8050**.

```
npm run start-ssr
```

This is the equivalent to the command above, if you've build an app that injects some sort initial data into it. It can be executed once you've executed **npm run build-ssr**. It runs on **localhost:8100**  
<br>

## Entry Points and Roots

---

```JS
//****ROOT ENTRY PATHS OF BACKEND AND FRONTEND OR SSR APP******
const entryRootClient = "src/client"
const entryRootServer = "src/server"

const entryRootSsrClient = "src/ssr/client"
const entryRootSsrServer = "src/ssr/server"

//*************************************************************
//***********************WEBPACK ENTRY PATHS*******************
//*************************************************************

//***************ENTRY POINTS CLIENT***************************
const entryClient = {
  index: path.resolve(__dirname, `../${entryRootClient}/index.tsx`),
}

//************ENTRY POINTS SERVER*******************************
const entryServer = {
  server: path.resolve(__dirname, `../${entryRootServer}/server.ts`),
}

//************ENTRY POINTS SSR**********************************

const entrySsrClient = {
  index: path.resolve(__dirname, `../${entryRootSsrClient}/index.tsx`),
}

const entrySsrServer = {
  server: path.resolve(__dirname, `../${entryRootSsrServer}/server.tsx`),
}

```

### Default Folder Structure (skeleton)

```
src
|
|——client
|    |
|    |——index.tsx (entry client)
|    |——App.tsx (main)
|
|——server
|    |
|    |——server.ts (entry standard server [no ssr])
|
|——ssr
|    |
|    |——client
|    |     |
|    |     |——index.tsx (entry SSR client)
|    |     |——App.tsx (import from src/client or individual)
|    |     |
|    |     |——routers
|    |           |
|    |           |——ClientRouter.tsx (using BrowserRouter from "react-router-dom")
|    |           |——ServerRouter.tsx (using StaticRouter from "react-router-dom/server")
|    |               .
|    |——server       . (connection between front- and backend)
|    |     |         .
|    |     |——server.tsx (functioning also as dev-server)
```

<br>

## Output

---
