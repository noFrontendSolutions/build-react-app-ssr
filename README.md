# CRASSR (Create-React-App-SSR)

---

is a minimalistic, webpack-made, full-stack React development environment providing the must-have key features every modern-day web application should have. It is easy to configure and extend, with a minimum of webpack knowledge required.

## Features:

- **SSR**: make use of **react-dom/server** to **inject initial data** into the app before it gets send to the client, as opposed to fetching the initial data from the cliend-side.
- create **comprehensive HTML output files** (with seperate CSS and JS files) for web-crawlers and search engines to consume
- features **simultaneous compilation** of frontend and backend source code if required
- fast recompilation times during development-mode, featuring **HMR** on the client-side
- **Typescript** support by default, but not mandatory
- support for **multiple tsconfig.json**-files to fine-tune compiler options for frontend and backend seperately
- uses **Express.js** on the backend, but isn't bound to it
- has build-in **TailwindCSS** and modern-day **CSS** support by default
- produces **minified** and hashed, deployable bundles with seperated JS, CSS and image files
- includes a simple default example that demonstrates how to inject initial data into your app before it will be rendered on the browser

|                       App using client-side fetching                        |                    App using server-side data injection                     |
| :-------------------------------------------------------------------------: | :-------------------------------------------------------------------------: |
| ![](https://www.dropbox.com/s/jndddtsmyp9qugr/crassr-example-std.png?raw=1) | ![](https://www.dropbox.com/s/aidxinll957yx38/crassr-example-ssr.png?raw=1) |

[Link to App using client-side fetching](https://crassr-example-std.herokuapp.com)

[Link to App using server-side data injection](https://crassr-example-ssr.herokuapp.com)

---

---

<br>

## Installation

---

```bash
npx crassr-now
```

Executes **bin/install.js**: the command creates a new folder (**my-react-app-ssr**) and copies all the necessary files into it and then installs the required dependencies. The command has one optional parameter, which determines the name of the root folder.

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

This is the development mode for your whole application front-to-back all at once. It's particularly useful if your app relies on server-side data injections. Both frontend and backend (**src/ssr/client/index.tsx** and **src/ssr/server/server.tsx**) are compiled simultaneously, one with target **web**, one with target **node**. Both entry points are being watched and getting almost instantly recompiled on save once edited.\
The command opens the browser on **localhost:8082**. When clicking on refresh, the server (**src/ssr/server/server.tsx**) serves the edited frontend bundle, which includes the changes you've just made, plus the initial data that might have been fed into it.\
Note that this command creates temporary output, which lands in the **dist/ssr** folder, from where it also runs, as opposed to running from memory, which would be the case if using the standard client-dev mode.

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
npm run start-std
```

After you've **build** your application (frontend and backend seperately compiled), this command starts your app on **localhost:8080**.

<br>

```
npm run start-ssr
```

This is the equivalent to the command above, if frontend and backend have been compiled simultaneously (**npm run build-ssr**). The command starts the app on **localhost:8082**  
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

Once you've build your app and it runs without errors, the outut folder **dist** is almost ready to get deployed. Notice that if your application runs inside the root folder of your **crassr**-app, it most likely will not yet run outside of it. It's because your backend code will probably rely on certain node modules. And since you probably won't need modules like **path**, **fs**, or **express** to get bundled by webpack, **webpack-node-externals** plugin prevents just that from happening.\
So all you have to do is create a new **package.json** just outside the **dist** folder (i.e. the root directory of the folder you intend to deploy) and then **install** your **backend dependencies**.\
In case your App uses server-side data injection, as in my example App, you also need at least **react** and **react-router-dom** installed, too.

<br>

I've deployed the two simple default example Apps (client-side fetching vs. server-side data injection) to **Heroku**. My two **package.json** files look like this:\

Client-side fetching example app:

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

Server-side data injection example app:

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
