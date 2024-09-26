import "./styles.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";



loadHome()
document.addEventListener("DOMContentLoaded", () => {
    const homeButton = document.querySelector(".home");
    const menuButton = document.querySelector(".menu");

    homeButton.addEventListener("click", e => {
        const content = document.querySelector("#content"); 
        if (!content) {
            console.error("#content not found");
            return;
        }
        console.log("Before loading home:", content.innerHTML);
        content.textContent = ""; 
        loadHome(); 
        console.log("After loading home:", content.innerHTML);
    });

    menuButton.addEventListener("click", e => {
        const content = document.querySelector("#content"); 
        if (!content) {
            console.error("#content not found");
            return;
        }
        console.log("Before loading menu:", content.innerHTML);
        content.textContent = ""; 
        loadMenu(); 
        console.log("After loading menu:", content.innerHTML);
    });

});

