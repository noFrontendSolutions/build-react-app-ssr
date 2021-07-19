//If you use Typescript and set '"strict": true' in the ts.config file, you'll need this file in the root of the src folder to link images inside jsx/tsx files.

//example for linking images in jsx/tsx files: 
//import myImage from "./myFolder/myImage.png"
//<img src = {myImage} />


declare module "*.jpe?g" {
  export default "" as string;
}
declare module "*.png" {
  export default "" as string;
}
declare module "*.svg" {
  export default "" as string;
}
declare module "*.gif" {
  export default "" as string;
}
