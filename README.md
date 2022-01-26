# create-react-app-3d
---
is a webpack-bundled, frontend development environment that serves as a starter kit to help you create React applications including 3d animation and much more. It's meant to be used instead of the standard _create-react-app_ environment. 

2D                         |3D
:-------------------------:|:-------------------------:
![](https://www.dropbox.com/s/qctbmba0cuukcbo/2d-landing-page.png?raw=1)  | ![](https://www.dropbox.com/s/46tsevv3xkg4dh9/3d-landing-page.png?raw=1)


### Click on the following link to view the animations:
[https://my-2d-3d-animation.herokuapp.com/](https://my-2d-3d-animation.herokuapp.com/)

<br>

## Features:
---
* default compilation/bundling of all JS, JSX, TS, and TSX files  
* a 3d animation example to play around with, if you are interested in learning how to create 3d or 2d animations in your React app (using **THREE.js** and **react-three-fiber**)
* support for TailwindCSS by default, but can also be used in combination with custom CSS
* produces minified and hashed JS and CSS files, plus a vendor folder, all linked together for deployment
* fast recompilation times during development mode (featuring the new Tailwind JIT compiler)

## Installation:
---

First get a clone of this github repository. 

```bash
git clone https://github.com/noFrontendSolutions/create-react-app-3d.git
```

Switch into the create-react-app-3d folder and type in,
```bash
npm install
```
For development mode use,
```bash
npm run dev
```
To build your project use,
```bash
npm run build-app
```
Obviously you need to have **node** and **git** installed on your local machine.

## Before You Start A New Project:
---
If you don't want to to deal with **webpack** configurations, leave all the files in the root directory of this repository as they are. The **src** folder is all yours, with the following restrictions:

* Your JS entry file has to be named **index.js**, and your html template has to be named **index.html**. They both have to be stored in the root direcory of the **src** folder. Create as many new files and folders inside the **src** folder as you like. Go as deeply nested as you need to.
* Keep the **styles** folder with the **tailwind-style.css** file, even if you don't intend to use TailwindCSS. You can create as many additional custom-style css files and folders as you like. But don't forget to link them into the **index.js** file. That's all the linking you'll have to do in your project.
* Delete everything else in the **src** folder and start your own React-Three-Fiber project...Enyoy!




