function createCard(imageLink, titleText, characterId){
    var container = document.createElement("div")
    container.classList.add("col-lg-3")
    container.classList.add("col-md-6")
    container.classList.add("col-12")
    var card = document.createElement("div")
    card.classList.add("card")
    card.classList.add("m-1")
    card.classList.add("p-1")
    container.appendChild(card)
    var image = document.createElement("img")
    image.src = imageLink
    image.classList.add("card-img-top")
    image.classList.add("image-ratio")
    card.appendChild(image)
    var descriptionContainer = document.createElement("div")
    descriptionContainer.classList.add("card-body")
    card.appendChild(descriptionContainer)
    var title = document.createElement("h5")
    title.classList.add("card-title")
    title.textContent = titleText
    descriptionContainer.appendChild(title)    
    var buttonContainer = document.createElement("div")
    buttonContainer.classList.add("text-end")
    descriptionContainer.appendChild(buttonContainer)
    var button = document.createElement("a")
    button.classList.add("btn")
    button.classList.add("btn-primary")
    button.textContent = "Character Page"
    button.href = `/pages/randomCharacter.html?id=${characterId}`
    buttonContainer.appendChild(button)
    return container
}

function createCardRow(){
    var row = document.createElement("div")
    row.classList.add("row")
    row.classList.add("alignment")
    row.classList.add("col-12")
    return row
}

function createFullCard(imageLink, titleText, descriptionText){
    var container = document.createElement("div")
    container.classList.add("col-12")
    var card = document.createElement("div")
    card.classList.add("card")
    card.classList.add("m-1")
    card.classList.add("p-1")
    container.appendChild(card)
    var image = document.createElement("img")
    image.src = imageLink
    image.classList.add("card-img-top")
    image.classList.add("image-ratio")
    card.appendChild(image)
    var descriptionContainer = document.createElement("div")
    descriptionContainer.classList.add("card-body")
    card.appendChild(descriptionContainer)
    var title = document.createElement("h5")
    title.classList.add("card-title")
    title.textContent = titleText
    descriptionContainer.appendChild(title)    
    var description = document.createElement("p")
    description.classList.add("card-text")
    description.textContent = descriptionText
    descriptionContainer.appendChild(description)
    return container
}