export function loadHome() {
    const content = document.querySelector("#content")
    content.textContent = ""
    const imageContainer = document.createElement("div")
    imageContainer.classList.add("imagecontainer")
    content.append(imageContainer)

    const award = document.createElement("div")
    award.classList.add("award")
    award.innerHTML = `Award-winning visrestaurant <br> van familie De Visscher </br>`
    content.append(award)

    const svg = document.createElement("svg") 
    svg.innerHTML = `<svg width="150px" height="150px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fxemoji" preserveAspectRatio="xMidYMid meet"><path fill="#2B3B47" d="M478.679 226.691c-31.649 0-60.946 19.093-80.381 52.383l-.004.006c-8.907 15.252-20.189 23.999-30.954 23.999c-10.769 0-22.052-8.75-30.958-24.006l-.014-.023c-19.435-33.276-48.726-52.36-80.368-52.36c-31.649 0-60.947 19.093-80.381 52.382c-8.907 15.257-20.19 24.007-30.958 24.007c-10.768 0-22.052-8.75-30.958-24.007c-19.435-33.289-48.732-52.382-80.381-52.382c-15.803 0-28.614 12.811-28.614 28.614s12.811 28.614 28.614 28.614c10.768 0 22.052 8.75 30.958 24.007c19.435 33.289 48.732 52.382 80.381 52.382c31.648 0 60.946-19.093 80.381-52.382c8.907-15.257 20.19-24.007 30.958-24.007c10.766 0 22.048 8.747 30.954 23.999l.004.006c19.435 33.29 48.732 52.383 80.382 52.383c31.644 0 60.939-19.088 80.373-52.369l.008-.013c8.906-15.256 20.189-24.006 30.957-24.006c15.803 0 28.614-12.812 28.614-28.614c.001-15.802-12.811-28.613-28.613-28.613z"></path></svg>`
    content.append(svg)

    const gridContainer = document.createElement("div") 
    gridContainer.classList.add("grid-container")
    content.append(gridContainer)

    const gridChildOne = document.createElement("div")
    gridChildOne.classList.add("grid-child1")
    gridChildOne.textContent = "Met De Visscher als achternaam opende Fons in 1984 zijn viswinkel in Helmond, geliefd bij Brabanders uit de verre omstreken. In 2012 opende hij zijn eerste visrestaurant, The Seafood Bar, aan de Van Baerlestraat. Met behulp van zijn zoon en dochter groeide dit uit tot een instituut met lange wachtrijen."
    gridContainer.append(gridChildOne)

    const gridChildTwo = document.createElement("div")
    gridChildTwo.classList.add("grid-child2")
    const imageOne = document.createElement("img")
    imageOne.classList.add("image1")
    gridChildTwo.append(imageOne)
    gridContainer.append(gridChildTwo)

    const gridChildThree = document.createElement("div")
    gridChildThree.classList.add("grid-child3")

    const gridChildFour = document.createElement("div")
    gridChildFour.classList.add("grid-child4")

    const gridChildFive = document.createElement("div")
    gridChildFive.classList.add("grid-child5")

    const gridChildSix = document.createElement("div")
    gridChildSix.classList.add("grid-child6")

    const gridChildSeven = document.createElement("div")
    gridChildSeven.classList.add("grid-child7")

    const gridChildEight = document.createElement("div")
    gridChildEight.classList.add("grid-child8")
}