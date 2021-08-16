# create-react-app-3d
---
is a webpack-bundled, frontend development environment that serves as a starter kit to help you create React applications including 3d animation and much more.

2D                         |3D
:-------------------------:|:-------------------------:
![](https://www.dropbox.com/s/qctbmba0cuukcbo/2d-landing-page.png?raw=1)  | ![](https://www.dropbox.com/s/46tsevv3xkg4dh9/3d-landing-page.png?raw=1)


## Features:
---
* create 3d and 2d animations in your React app (using **THREE.js** and **react-three-fiber**)
* compatible with Typescript and/or Javascript (jsx and tsx files are both supported)
* enjoy the perks of TailwindCSS in combination with custom CSS
* let webpack take care of the dreaded file-linking-dependency hussle
* receive minified and hashed JS and CSS files for production
* enjoy ultra-fast recompilation during development mode (featuring the new Tailwind JIT compiler)

## Installation:
---
Get a clone of this github repository and switch into the create-react-app-3d folder and type in,
```bash
npm install
```
For development mode use,
```bash
npm run dev
```
To build your project use,
```bash
npm run build
```
You need to have **node** and **git** installed on your local machine.

## Before You Start A New Project:
---
If you don't want to to deal with **webpack** configurations, leave all the files in the root directory of this repository as they are. The **src** folder is all yours, with the following restrictions:

* Your JS entry file has to be named **index.js**, and your html template has to be named **index.html**. They both have to be stored in the root direcory of the **src** folder. Create as many new files and folders inside the **src** folder as you like. Go as deeply nested as you need to.
* Keep the **styles** folder with the **tailwind-style.css** file, even if you don't intend to use TailwindCSS. You can create as many additional custom-style css files and folders as you like. But don't forget to link them into the **index.js** file. That's all the linking you'll have to do in your project.
* Delete everything else in the **src** folder and start your own React-Three-Fiber project...Enyoy!




