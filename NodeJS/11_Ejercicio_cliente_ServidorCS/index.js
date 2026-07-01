const axios = require("axios"); //Traer el paquete y se almacena en la constante axios
const fs = require('fs').promises;
const path = require('path');

const main = async () => {
  let response = await axios.get("https://rickandmortyapi.com/api/character");
  let {
    data: { results },
  } = response;
  let character = results
    .map((character) => {
      return {
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
      };
    })
    .map((personaje) => Object.values(personaje).join(","))
    .join('\n');
  //console.log(path.join(__dirname,'data.csv'));
  await fs.writeFile(path.join(__dirname,'data.csv'), character);
  //console.log(character);
};

main();
