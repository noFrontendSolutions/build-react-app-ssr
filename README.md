# Build-React-App-SSR

---

is a fullstack React development environment, featuring server-side rendering. It's easy configurable and extendable with a minimum of webpack knowledge. It's unopinionated and super leight-weight. It's there to help you build a prototype of your fullstack React app.

## Features:

- creates comprehensive HTML output files (with seperate CSS and JS files) for web-crawlers and search engines to consume
- fast recompilation times during development-mode, featuring **HMR** on the client-side
- **Typescript** support by default, but not mandatory
- support for multiple **tsconfig**-files to fine-tune compiler options for frontend and backend seperately
- both **TailwindCSS** and modern-day **CSS** support by default
- produces minified and hashed, production-ready bundles with seperated JS, CSS and image files
- includes a simple default example that demonstrates how to properly inject initial data into your app before it will be rendered on the browser

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

Starts the frontend dev-server on **localhost:8080** (featuring **HMR**), targeting **src/client/index.tsx**.

```bash
npm run dev-server
```

Starts the backend server in watch-mode on **localhost:3050** (targeting **src/backend/server.ts** and using nodemon-webpack-plugin). The compilation runs independent from the frontend, but a simultaneous use of both modes is possible by running the processes in seperate terminals.

```bash
npm run dev-ssr
```

This mode should only be used if you intend to build an application, which ought to inject intital data into the app before it gets send to the client. As opposed to fetching the initial data from the client side.\
Both frontend and backend (**src/ssr/client/index.tsx** and **src/ssr/server/server.tsx**) are compiled within the same compilation cycle, one with target **web**, one with target **node**. Both entry points are being watched and getting almost instantly recompiled on save once edited.\
The command also opens the browser, running on **localhost:8000**. When clicking on refresh, the server (**src/ssr/server/server.tsx**) serves the edited frontend bundle, which includes the changes you've just made, plus the initial data that might have been fed into it.

### Build Scripts:

---

```bash
npm run build-client
npm run build-server
npm run build-ssr
```

These commands are the equivalent to the dev-scripts above. The individual "production-ready" bundles are outputed into the **dist** folder by default (**dist/client**, **dist/server**, **"dist/ssr"**). For details concerning the output-files and output-structure of your project read the **Output** section.

### Start Scripts:

---

```bash
npm run start-std
```

After you've **build** your application (frontend and backend seperately compiled), this script starts your app on **localhost:8050**.

```
npm run start-ssr
```

This is the equivalent to the command above, if frontend and backend got compiled simultaneously (**npm run build-ssr**). It runs on **localhost:8100**  
<br>

## Entry Points and Roots

---

If you intend to change the folder structure of your project, all you have to do is edit the following file: **webpack/entry-paths.js**.

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

### Default Folder Structure

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

Note that, if you intend to use multiple **tsconfig** files for individually set compiler options, a nested folder structure like the one above would be mandatory. There has to be a main **tsconfig** in the root of your project from which the others inherit. With the help of the **tsconfig-paths-webpack-plugin** you can then point to the individual **tsconfig** files, whose settings would then be used during compilation.

<br>

## Output Paths

---

The output paths can be changed in the following file: **webpack/output-paths.js.**

```JS
//**********ROOT OUTPUT PATHS OF BACKEND AND FRONTEND***********
const outputRootClient = "dist/client"
const outputRootServer = "dist/server"

const outputRootSsrClient = "dist/ssr/client"
const outputRootSsrServer = "dist/ssr/server"


```
