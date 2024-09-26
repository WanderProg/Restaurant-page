import "./styles.css";
import { greeting } from "./greeting.js";
import { loadHome } from "./home.js";

console.log(greeting)

const homeButton = document.querySelector(".home")

homeButton.addEventListener("click", loadHome)