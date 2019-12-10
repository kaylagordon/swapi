export const getMovies = () => {
  return fetch('https://swapi.co/api/films')
  .then(response => {
    if (!response.ok) {
      throw Error('Oops! We had trouble finding the information you asked for. Please try again.');
    }
    return response.json();
  })
}
