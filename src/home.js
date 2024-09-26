export function loadHome() {
    const content = document.querySelector("#content");
;
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("imagecontainer");
    content.append(imageContainer);

    const award = document.createElement("div");
    award.classList.add("award");
    award.innerHTML = `Award-winning visrestaurant <br> van familie De Visscher </br>`;
    content.append(award);

    const svg = document.createElement("div");
    svg.innerHTML = `<svg width="150px" height="150px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img"><path fill="#2B3B47" d="..."></path></svg>`;
    content.append(svg);

    const gridContainer = document.createElement("div") 
    gridContainer.classList.add("grid-container")
    content.append(gridContainer)

    const gridChildOne = document.createElement("div")
    gridChildOne.classList.add("grid-child1")
    gridChildOne.textContent = "Met De Visscher als achternaam opende Fons in 1984 zijn viswinkel in Helmond, geliefd bij Brabanders uit de verre omstreken. In 2012 opende hij zijn eerste visrestaurant, The Seafood Bar, aan de Van Baerlestraat. Met behulp van zijn zoon en dochter groeide dit uit tot een instituut met lange wachtrijen."
    gridContainer.append(gridChildOne)

    const gridChildTwo = document.createElement("div")
    gridChildTwo.classList.add("grid-child2")
    const imageOne = document.createElement("div")
    imageOne.classList.add("image1")
    gridChildTwo.append(imageOne)
    gridContainer.append(gridChildTwo)

    const gridChildThree = document.createElement("div")
    gridChildThree.classList.add("grid-child3")
    const imageTwo = document.createElement("div")
    imageTwo.classList.add("image2")
    gridChildThree.append(imageTwo)
    gridContainer.append(gridChildThree)

    const gridChildFour = document.createElement("div")
    gridChildFour.classList.add("grid-child4")
    gridChildFour.textContent = "Ons visrestaurant staat bekend om zijn uitstekende kwaliteit en service. Of je nu zin hebt in een lichte lunch of een uitgebreide maaltijd, bij The Seafood Bar ben je aan het juiste adres. Met een breed scala aan visgerechten bereid met de meest verse ingrediënten, streven we ernaar om de beste culinaire ervaring te bieden in een sfeervolle ambiance."
    gridContainer.append(gridChildFour)

    const gridChildFive = document.createElement("div")
    gridChildFive.classList.add("grid-child5")
    gridChildFive.textContent = "Bezoek een van onze visrestaurants in Amsterdam Centrum, Amsterdam Zuid, Amsterdam De Pijp, Utrecht naast het station of Soho, Londen en ontdek waarom wij het beste visrestaurant zijn voor lunch en diner. The Seafood Bar, waar kwaliteit en vakmanschap samenkomen, is dé plek voor visliefhebbers."
    gridContainer.append(gridChildFive)

    const gridChildSix = document.createElement("div")
    gridChildSix.classList.add("grid-child6")
    const imageThree = document.createElement("div")
    imageThree.classList.add("image3")
    gridChildSix.append(imageThree)
    gridContainer.append(gridChildSix)

    const gridChildSeven = document.createElement("div")
    gridChildSeven.classList.add("grid-child7")
    const imageFour = document.createElement("div")
    imageFour.classList.add("image4")
    gridChildSeven.append(imageFour)
    gridContainer.append(gridChildSeven)

    const gridChildEight = document.createElement("div")
    gridChildEight.classList.add("grid-child8")
    gridChildEight.textContent = "Duurzame vis vinden we belangrijk. Vis eten is heerlijk maar alleen zolang de visstanden gezond blijven en we onze mooie planeet in balans houden.Hoe doen ze wat? We selecteren samen met leveranciers zorgvuldig de beschikbare vis en werken uitsluitend met innovatieve en duurzame visserijen."
    gridContainer.append(gridChildEight)

    const quoteBarOne = document.createElement("div")
    quoteBarOne.classList.add("quote-bar-one")
    const quoteTitle1 = document.createElement("div")
    quoteTitle1.textContent = "Financial Times"
    quoteTitle1.classList.add("quote-title")
    const quoteText1 = document.createElement("div")
    quoteText1.textContent = "“It might also become something of a Soho institution.”"
    quoteText1.classList.add("quote-text")
    content.append(quoteBarOne)
    quoteBarOne.append(quoteTitle1)
    quoteBarOne.append(quoteText1)
    

    const quoteBarTwo = document.createElement("div")
    quoteBarTwo.classList.add("quote-bar-two")
    const quoteTitle2 = document.createElement("div")
    quoteTitle2.textContent = "The Guardian"
    quoteTitle2.classList.add("quote-title")
    const quoteText2 = document.createElement("div")
    quoteText2.textContent = "“Soho’s new seafood place will soon have you hooked.”"
    quoteText2.classList.add("quote-text")
    content.append(quoteBarTwo)
    quoteBarTwo.append(quoteTitle2)
    quoteBarTwo.append(quoteText2)
    
}