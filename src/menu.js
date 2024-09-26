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

    const menuNavBar = document.createElement("div") 
    menuNavBar.classList.add("menu-nav-bar")
    content.append(menuNavBar)

    const textMenu = document.querySelector("div")
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
    
    const buttonTwo = document.createElement("button")
    buttonTwo.classList.add("button-2")
    buttonTwo.textContent = "Menu Utrecht"
    buttonContainer.append(buttonTwo)

    const buttonThree = document.createElement("button")
    buttonThree.classList.add("button-3")
    buttonThree.textContent = "Menu London"
    buttonContainer.append(buttonThree)
}