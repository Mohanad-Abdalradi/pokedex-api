const type = (pokeArray, type) => {
  let results = pokeArray.filter(pokemon => pokemon.type.includes(type));
  results = results.map(pokemon => ({ name: pokemon.name, num: pokemon.num }));
  return results;
};

module.exports = type;
