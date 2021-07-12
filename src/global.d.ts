//you need this file if you wanna link images inside jsx/tsx files
//via import statement you let webpage know that there is an image which should be linked
//example: 
//put the import on top of your jsx/tsx file: 
//import myImage from "./myFolder/myImage.png"
//then link like this inside an jsx/tsx image tag: <img src = {myImage} />


declare module "*.jpe?g" {
  export default "" as string;
}
declare module "*.png" {
  export default "" as string;
}
declare module "*.svg" {
  export default "" as string;
}
declare module "*gif" {
  export default "" as string;
}
