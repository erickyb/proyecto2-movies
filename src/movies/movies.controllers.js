const movieBd = [
  
  {
    "id" : 1,
    "title": "Stalker ",
    "description": "Conocida también como La Zona, esta película es la versión que Andrei Tarkovski hizo sobre una novela breve de ciencia ficción titulada The Roadside Picnic (1977)",
    "year": 1979,
    "director": "Andréi Tarkovski"
  },

  {
    "id": 2,
    "title": "Seven",
    "description": "En esta unos detectives, Somerset y David Mills, se ven involucrados en una investigación de una serie de asesinatos basados en los siete pecados capitales: gula, pereza, soberbia, avaricia, envidia, lujuria e ira.",
    "year": 1995,
    "director": "David Fincher"
  },

  // {
  //   "id": 3,
  //   "title": "La milla verde",
  //   "description": "Esta película está basada en un relato de Stephen King y narra la historia de Paul Edgecomb, un hombre de avanzada edad que recuerda su experiencia como vigilante en la prisión de Cold Mountain en 1932.",
  //   "year": 1999,
  //   "director": "Frank Darabont"
  // },

  // {
  //   "id": 4,
  //   "title": "Good Will Hunting",
  //   "description": "Esta película narra la vida de Will, un joven rebelde con don privilegiado para las matemáticas. Cuando sus profesores descubren su talento, el protagonista tiene que enfrentarse a un gran dilema: seguir con su vida normal, con un trabajo común y sin preocupaciones, o escoger un nuevo camino y aprovechar su ingenio. MI PREFERIDA :)",
  //   "year": 1997,
  //   "director": "Gus Van Sant"
  // }

]



// let userId = 3

// const findAllUsers = () => {
//   return userDb
// }

// const findUserById = (id) => {
//   const data = userDb.find(user => user.id === id)
//   return data
// }

// const createUser = (userObj) => {
//   const newUser = {
//     id: userId++,
//     name: userObj.name || 'Anonymous',
//     email: userObj.email || 'example@example.com',
//     password: userObj.password || 'root'
//   }
//   userDb.push(newUser)
//   return newUser
// }


let movieId = 5

const findAllMovies = async () => {
  return movieBd
}

const findMovieById = async (id) => {
  const data = movieBd.find(movie => movie.id === id)
  return data
}
 
const createMovie = async (movieObj) => {
  const newMovie = {
    id: movieId++,
    title: movieObj.title || "Anonymous",
    description: movieObj.description||"loren",
    year: movieObj.year || "2023",
    director: movieObj.director ||"Anonymous"
  }
  movieBd.push(newMovie)
  return newMovie
}
module.exports = {
  findAllMovies,
  findMovieById,
  createMovie
}