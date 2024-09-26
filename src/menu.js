export function loadMenu() {
    const content = document.querySelector("#content")

    const menuContainer = document.createElement("div")
    menuContainer.classList.add("menu-container")
    content.append(menuContainer)

    const menuTitle = document.createElement("div")
    menuTitle.classList.add("menu-title")
    menuTitle.textContent = "Menu"
    menuContainer.append(menuTitle)

    const menuTextContainer = document.createElement("div")
    menuTextContainer.classList.add("menu-text-container")
    menuContainer.append(menuTextContainer)

    const menuText1 = document.createElement("div")
    menuText1.classList.add("menu-text1")
    menuText1.textContent = "The Seafood Bar werkt uitsluitend met dagverse vis en zeevruchten van de beste kwaliteit."
    menuTextContainer.append(menuText1)

    const menuText2 = document.createElement("div")
    menuText2.classList.add("menu-text2")
    menuText2.textContent = "Dat betekent onbewerkt, zonder toevoegingen, met een transparante en verantwoorde herkomst en waar mogelijk duurzaam en Fair Trade."
    menuTextContainer.append(menuText2)

    const svg = document.createElement("div");
    svg.innerHTML = `<svg width=80px" height="80px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fxemoji" preserveAspectRatio="xMidYMid meet"><path fill="#2B3B47" d="M478.679 226.691c-31.649 0-60.946 19.093-80.381 52.383l-.004.006c-8.907 15.252-20.189 23.999-30.954 23.999c-10.769 0-22.052-8.75-30.958-24.006l-.014-.023c-19.435-33.276-48.726-52.36-80.368-52.36c-31.649 0-60.947 19.093-80.381 52.382c-8.907 15.257-20.19 24.007-30.958 24.007c-10.768 0-22.052-8.75-30.958-24.007c-19.435-33.289-48.732-52.382-80.381-52.382c-15.803 0-28.614 12.811-28.614 28.614s12.811 28.614 28.614 28.614c10.768 0 22.052 8.75 30.958 24.007c19.435 33.289 48.732 52.382 80.381 52.382c31.648 0 60.946-19.093 80.381-52.382c8.907-15.257 20.19-24.007 30.958-24.007c10.766 0 22.048 8.747 30.954 23.999l.004.006c19.435 33.29 48.732 52.383 80.382 52.383c31.644 0 60.939-19.088 80.373-52.369l.008-.013c8.906-15.256 20.189-24.006 30.957-24.006c15.803 0 28.614-12.812 28.614-28.614c.001-15.802-12.811-28.613-28.613-28.613z"></path></svg>`;
    menuTextContainer.append(svg);

    const menuNavBar = document.createElement("div") 
    menuNavBar.classList.add("menu-nav-bar")
    content.append(menuNavBar)

    const textMenu = document.createElement("div")
    textMenu.classList.add("text-menu")
    textMenu.textContent = "Download Menu"
    menuNavBar.append(textMenu)

    const buttonContainer = document.createElement("div")
    buttonContainer.classList.add("button-container")
    menuNavBar.append(buttonContainer)

    const buttonOne = document.createElement("button")
    buttonOne.classList.add("button-1")
    buttonOne.textContent = "Menu Amsterdam"
    buttonContainer.append(buttonOne)
    buttonOne.addEventListener("click", e => {
        alert("Download not available")
    })
    
    const buttonTwo = document.createElement("button")
    buttonTwo.classList.add("button-2")
    buttonTwo.textContent = "Menu Utrecht"
    buttonContainer.append(buttonTwo)
    buttonTwo.addEventListener("click", e => {
        alert("Download not available")
    })

    const buttonThree = document.createElement("button")
    buttonThree.classList.add("button-3")
    buttonThree.textContent = "Menu London"
    buttonContainer.append(buttonThree)
    buttonThree.addEventListener("click", e => {
        alert("Download not available")
    })

    const gridContainer = document.createElement("div")
    gridContainer.classList.add("grid-container2")
    content.append(gridContainer)

    const gridItem1 = document.createElement("div")
    gridItem1.classList.add("grid-item1")
    gridContainer.append(gridItem1)
    
    const gridItem2 = document.createElement("div")
    gridItem2.classList.add("grid-item2")
    gridContainer.append(gridItem2)
   
    const gridItem3 = document.createElement("div")
    gridItem3.classList.add("grid-item3")
    gridContainer.append(gridItem3)
   
    const gridItem4 = document.createElement("div")
    gridItem4.classList.add("grid-item4")
    gridContainer.append(gridItem4)
   
    const gridItem5 = document.createElement("div")
    gridItem5.classList.add("grid-item5")
    gridContainer.append(gridItem5)
   
    const gridItem6 = document.createElement("div")
    gridItem6.classList.add("grid-item6")
    gridContainer.append(gridItem6)




}