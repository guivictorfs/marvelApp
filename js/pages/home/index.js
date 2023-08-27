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
  if (results.length % 4 != 0) {
    charactersList.appendChild(currentRow);
  }
}

function clearData() {
  var charactersList = document.getElementById("charactersList");
  charactersList.innerHTML = "";
}

function configurePage() {
  var input = document.getElementById("searchInput");
  input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("searchButton").click();
    }
  });
}

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}