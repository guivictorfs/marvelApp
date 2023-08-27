var currentPage = 0;
var pageSize = 12;
var filters = "";

function getCharacters() {
    get("/characters", `&limit=${pageSize}&offset=${currentPage*pageSize}${filters}`)
      .then((data) =>{
        populateCharacters(data.data.results)
      } )
      .catch((error) => console.log(error));
  }

  function loadMoreCharacters(){
    currentPage++;
    getCharacters()
  }

  function findByName(name) {
    filters = `&nameStartsWith=${name}`
    resetPage()     
    getCharacters()
  }

  function resetPage(){
    currentPage = 0;
    clearData()   
  }