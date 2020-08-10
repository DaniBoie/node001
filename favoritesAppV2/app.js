let movies = require('./favoriteMovies.js')
let songs = require('./favoriteSongs.js')
let foods = require('./favoriteFoods.js')
let games = require('./favoriteGames.js')

let favorites = {
  movies: movies,
  songs: songs, 
  foods: foods,
  games: games
}

console.log(`
My Fav Movies: ${favorites.movies[0]}, ${favorites.movies[1]}, ${favorites.movies[2]}
My Fav Songs: ${favorites.songs[0]}, ${favorites.songs[1]}, ${favorites.songs[2]}
My Fav Foods: ${favorites.foods[0]}, ${favorites.foods[1]}, ${favorites.foods[2]}
My Fav Games: ${favorites.games[0]}, ${favorites.games[1]}, ${favorites.games[2]}
`)