# CRASSR (Create-React-App-SSR)

---

is a minimalistic, webpack-made, fullstack **React Development Environment**, which can be used instead of **Create React App** or **Vite**. It is easy to configure and extend, with a minimum of webpack knowledge required.

## Features:

- build a fullstack **React** app that uses **Express.js** on the server-side
- **SSR**: supports server-side rendering if desired 
- features **HMR** (Hot-Module-Replacement) during client-side development
- **Typescript** support by default, but not mandatory
- uses **Express.js** on the backend, but isn't bound to it
- has build-in **TailwindCSS** and modern-day **CSS** support by default
- produces **minified** and hashed, deployable bundles with seperated JS, CSS and image files
- a simple example App is included: 

|                       Example App                         |                    Example App using SSR                    |
| :-------------------------------------------------------------------------: | :-------------------------------------------------------------------------: |
| ![](https://www.dropbox.com/s/jndddtsmyp9qugr/crassr-example-std.png?raw=1) | ![](https://www.dropbox.com/s/aidxinll957yx38/crassr-example-ssr.png?raw=1) |

[Link to Example App](https://crassr-example-std.herokuapp.com)

[Link to Example App using SSR](https://crassr-example-ssr.herokuapp.com)

---

---

<br>

## Installation

---

```bash
npx crassr-now
```

Executes **bin/install.js**: the command creates a new folder (**my-react-app-ssr**) and copies all the necessary files into it and then installs the required dependencies. The command has one optional parameter that determines the name of the root folder.

<br>

```bash
npx crassr-now my-app
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

<br>

```bash
npm run dev-server
```

Starts the backend server in watch-mode on **localhost:8081** (targeting **src/backend/server.ts** and using nodemon-webpack-plugin). The compilation runs independent from the frontend, but a simultaneous use of both modes is possible by running the processes in seperate terminals.

<br>

```bash
npm run dev-ssr
```

This mode should only be used if if you want to build an App that should feature SSR. <br>
The command starts the development server on **localhost:8082**. Both frontend and backend (**src/ssr/client/index.tsx** and **src/ssr/server/server.tsx**) are compiled simultaneously. Both entry points are being watched and recompiled on save once edited.\
Note that **HMR** is not available in this mode.

<br>

### Build Scripts:

---

```bash
npm run build-client
npm run build-server
npm run build-ssr
```

These commands are the equivalent to the dev-scripts above. The individual, "production-ready" bundles are outputed into the **dist** folder by default (**dist/client**, **dist/server**, **"dist/ssr"**).

<br>

### Start Scripts:

---

```bash
npm run start-build-std
```

After you've **build** your application (npm run build-client + npm run build-server), you can test if it is deployment-ready with this command. The command starts your app on **localhost:8080**. 

<br>

```
npm run start-build-ssr
```

If you've **build** an application that features SSR (npm run build-ssr), you can test if it is deployment-ready with this command. The command starts your app on **localhost:8082**.  
<br>

## Entry Points and Roots

---

To change the folder structure of your project, all you have to do is edit the following file: **webpack/entry-paths.js**.

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

### Folder Structure (default):

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
|    |——server.ts (server entry)
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

Output File Structure (default):

```
dist
|
|——client
|    |
|    |——index.[hash].html
|    |——index.[hash].js
|    |——styles.[hash].css
|    |
|   images
|
|——server
|    |
|    |——server.js
|
|——ssr
|    |
|    |——client
|    |     |
|    |     |——index.[hash].html
|    |     |——index.[hash].js
|    |     |——styles.[hash].css
|    |     |
|    |     images
|    |
|    |——server
|    |     |
|    |     |——server.js
|    |     |——index.js (only in dev-ssr mode)
|    |     |
|    |     images
```

For custom webpack configuration use one of the following folders: **webpack/client**, **webpack/server** and/or **webpack/ssr**.

<br>

## Deployment

---

Once you've build your app and it runs without errors, it is almost ready to get deployed. Notice that if your application works inside the root folder of your **crassr**-app environment, it most likely will not yet run outside of it, because it's probably missing some dependencies that haven't been installed yet. 
All you have to do is create a new directory with a name of your chosing and copy the **dist** folder into it. Then create a **package.json** file in the root directory and then **install** all your **backend dependencies**.\
In case your App uses SSR, you also need at least **react** and **react-router-dom** installed, too.

<br>

I've deployed the default Example App two times (one using SSR, one not) to **Heroku**. My two **package.json** files look like this:

Standard Example App:

```JS

{
  "name": "crassr-example-std",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "start": "node dist/server/server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.3"
  }
}
```

<br>

SSR Example App:

```JS

{
  "name": "crassr-example-ssr",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "start": "node dist/ssr/server/server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.3",
    "react": "^17.0.2",
    "react-router-dom": "^6.2.2"
  }
}
```

Happy coding :)
............................................................................................................................................................................................................................................................................................................................................................................................................................................................................
