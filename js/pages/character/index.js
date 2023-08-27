function  populateFields(character){
    var container = document.getElementById("characterContainer")
    container.appendChild(createFullCard(`${character.thumbnail.path}.${character.thumbnail.extension}`,character.name,character.description))
}