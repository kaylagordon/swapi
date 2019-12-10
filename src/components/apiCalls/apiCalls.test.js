import { getMovies, getCharacter, getSpecies, getHomeworld, getFilm } from './apiCalls';

describe('Fetch Calls', () => {
  describe('getMovies', () => {
    let mockResponse = [
      {
        title: 'A New Hope',
        episode_id: 4,
        release_date: '1977-05-25',
        characters: ['url1', 'url2']
      },
      {
        title: 'Attack of the Clones',
        episode_id: 2,
        release_date: '2002-05-16',
        characters: ['url1', 'url2']
      }
    ];

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => {
            return Promise.resolve(mockResponse)
          }
        })
      })
    })

    it('should be provided with the correct URL', () => {
      getMovies();
      expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/films')
    })

    it('should return an array of movies', () => {
      expect(getMovies()).resolves.toEqual(mockResponse)
    })

    it('should return an error for response not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      })

      expect(getMovies()).rejects.toEqual(Error('Oops! We had trouble finding the information you asked for. Please try again.'))
    })
  })

  describe('getCharacter', () => {
    let mockResponse = {
      name: 'C-3PO',
      homeworld: 'homeworlURL',
      films: ['filmURL1', 'filmURL2'],
      species: ['speciesURL']
    };

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => {
            return Promise.resolve(mockResponse)
          }
        })
      })
    })

    it('should be provided with the correct URL', () => {
      getCharacter('testURL');
      expect(window.fetch).toHaveBeenCalledWith('testURL')
    })

    it('should return an array of movies', () => {
      expect(getCharacter()).resolves.toEqual(mockResponse)
    })

    it('should return an error for response not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      })

      expect(getCharacter()).rejects.toEqual(Error('Oops! We had trouble finding the information you asked for. Please try again.'))
    })
  })
})
