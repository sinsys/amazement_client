// Games Service - Our service to interact with the Games api endpoints
import config from '../config';

const GamesApiService = {

  getGames: () => {
    return (
      fetch(`${config.API_ENDPOINT}/games`, {
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json() 
        )
    );
  },
  getGameById: (gameUUID) => {
    return (
      fetch(`${config.API_ENDPOINT}/games/${gameUUID}`, {
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    );
  },
  addGame: (newGame) => {
    return (
      fetch(`${config.API_ENDPOINT}/games`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(newGame)
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()  
        )
    );
  }
};

export default GamesApiService;