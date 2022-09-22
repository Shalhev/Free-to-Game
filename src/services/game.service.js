import Axios from 'axios'

export const gamesService = {
    query,
    get,
}
function query() {
    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        headers: {
            'X-RapidAPI-Key': '68652673d8mshb9f3817b1160c4fp1c2653jsnd2a1f6c0e461',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    return Axios.request(options).then(function (response) {
        // console.log(response.data);
        return response.data
    }).catch(function (error) {
        console.error(error);
    });
}

function get(gameId){
    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
        params: {id: gameId},
        headers: {
          'X-RapidAPI-Key': '68652673d8mshb9f3817b1160c4fp1c2653jsnd2a1f6c0e461',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };
      
      return Axios.request(options).then(function (response) {
        //   console.log(response.data);
          return response.data
      }).catch(function (error) {
          console.error(error);
      });
}
