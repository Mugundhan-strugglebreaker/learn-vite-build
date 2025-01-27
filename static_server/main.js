import classes from "./style.module.css";


console.log("Server is running in " + import.meta.env.MODE)
if(import.meta.env.DEV){
    console.log("We are in Dev Server")
}
console.log(import.meta.env)
console.log(classes)
document.querySelector("title").className = classes.title
document.querySelector("h1").className = classes.h1
console.log("Hello world !!!")