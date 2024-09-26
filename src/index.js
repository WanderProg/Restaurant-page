import "./styles.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";



 const homeButton = document.querySelector(".home")
const menuButton = document.querySelector(".menu")

homeButton.addEventListener("click", loadHome)
menuButton.addEventListener("click", loadMenu)


loadHome()


