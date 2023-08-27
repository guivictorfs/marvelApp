function populateCharacters(results) {
  var charactersList = document.getElementById("charactersList");
  var currentRow = createCardRow();
  for (var i = 0; i < results.length; i++) {
    currentRow.appendChild(
      createCard(
        `${results[i].thumbnail.path}.${results[i].thumbnail.extension}`,
        results[i].name,
        results[i].id
      )
    );
    if (i % 4 == 3) {
      if (currentRow) {
        charactersList.appendChild(currentRow);
      }
      currentRow = createCardRow();
    }
  }
}

function clearData(){
  var charactersList = document.getElementById("charactersList")
  charactersList.innerHTML = ""
}

function configurePage(){
  var input = document.getElementById("searchInput")
  input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("searchButton").click();
    }
  });
}