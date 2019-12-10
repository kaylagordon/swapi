export const getMovies = () => {
  return fetch('https://swapi.co/api/films')
  .then(response => {
    if (!response.ok) {
      throw Error('Oops! We had trouble finding the information you asked for. Please try again.');
    }
    return response.json();
  })
}

export const getCharacter = (characterURL) => {
  return fetch(characterURL)
  .then(response => {
    if (!response.ok) {
      throw Error('Oops! We had trouble finding the information you asked for. Please try again.');
    }
    return response.json();
  })
}

export const getSpecies = (speciesURL) => {
  return fetch(speciesURL)
  .then(response => {
    if (!response.ok) {
      throw Error('Oops! We had trouble finding the information you asked for. Please try again.');
    }
    return response.json();
  })
  .then(data => data.name)
}

export const getHomeworld = (homeworldURL) => {
  return fetch(homeworldURL)
  .then(response => {
    if (!response.ok) {
      throw Error('Oops! We had trouble finding the information you asked for. Please try again.');
    }
    return response.json();
  })
  .then(data => {
    return [data.name, data.population]
  })
}

export const getFilm = (filmURL) => {
  return fetch(filmURL)
  .then(response => {
    if (!response.ok) {
      throw Error('Oops! We had trouble finding the information you asked for. Please try again.');
    }
    return response.json();
  })
  .then(data => data.title)
}
