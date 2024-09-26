import "./styles.css";
import {loadHome} from "./home.js";
import {loadMenu} from "./menu.js";
import { loadContact } from "./contact.js";



loadHome()
document.addEventListener("DOMContentLoaded", () => {
    const homeButton = document.querySelector(".home");
    const menuButton = document.querySelector(".menu");
    const contactButton = document.querySelector(".contact")

    homeButton.addEventListener("click", e => {
        const content = document.querySelector("#content"); 
        content.textContent = ""; 
        loadHome(); 
    })

    menuButton.addEventListener("click", e => {
        const content = document.querySelector("#content") 
        content.textContent = ""
        loadMenu() 
    })

    contactButton.addEventListener("click", e => {
        const content = document.querySelector("#content")
        content.textContent = ""
        loadContact()
    })

})


