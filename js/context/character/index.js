function getCharacter(id) {
    get(`/characters/${id}`)
      .then((data) =>{
        populateFields(data.data.results[0])
      } )
      .catch((error) => console.log(error));
  }