export function loadContact() {
    const content = document.querySelector("#content")
    
    const imageContainer = document.createElement("div")
    imageContainer.classList.add("image-container")
    content.append(imageContainer)
    
    const textBox = document.createElement("div")
    textBox.classList.add("text-box")
    content.append(textBox)

    const reservations = document.createElement("div")
    reservations.textContent = "Reservations"
    reservations.classList.add("reservations")
    textBox.append(reservations)

    const yourName = document.createElement("div")
    yourName.innerText = "Your name"
    yourName.classList.add("your-name")
    textBox.append(yourName)

    const inputField1 = document.createElement("input")
    inputField1.type = "text"
    inputField1.classList.add("input-field1")
    textBox.append(inputField1)

    const partySize = document.createElement("div")
    partySize.innerText = "Party Size"
    partySize.classList.add("your-name")
    textBox.append(partySize)

    const inputField2 = document.createElement("input")
    inputField2.type = "number"
    inputField2.classList.add("input-field2")
    textBox.append(inputField2)

    const dateOfBooking = document.createElement("div")
    dateOfBooking.innerText = "Reservation date"
    dateOfBooking.classList.add("your-name")
    textBox.append(dateOfBooking)

    const inputField3 = document.createElement("input")
    inputField3.type = "date"
    inputField3.classList.add("input-field3")
    textBox.append(inputField3)

    const specialRequests = document.createElement("div")
    specialRequests.innerText = "Special Requests"
    specialRequests.classList.add("special-requests")
    textBox.append(specialRequests)

    const inputField4 = document.createElement("input")
    inputField4.type = "text"
    inputField4.classList.add("input-field4")
    textBox.append(inputField4)

    const submitButton = document.createElement("button")
    submitButton.textContent = "Submit reservation"
    submitButton.classList.add("submit-button")
    textBox.append(submitButton)
}