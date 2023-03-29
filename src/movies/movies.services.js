const movieControllers = require('./movies.controllers')

const getAllMovies = (req,res) => {
  movieControllers.findAllMovies()
    .then((data) => {
    res.status(200).json(data)
    })
    .catch((err) => {
    res.status(400).json({message:"Bad request",err})
  })
}

const getMovieById = (req, res) => {
  const id = Number(req.params.id)
  movieControllers.findMovieById(id)
    
    .then(data => {
      //? En caso de que data no exita (el usuario no exita)
      if (!data) {
       return res.status(404).json({message:`movie with id:${id}, not found`})
      }
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json({message:'Bad request',err})
  })
}
const postNewMovie = (req, res) => {
  const movieObj = req.body
  movieControllers.createMovie(movieObj)
    .then(data => {
      res.status(201).json(data)
    })
    .catch(err => {
      res.status(400).json({message:'Bad request',err})
    })
  
}

module.exports = {
  getAllMovies,
  getMovieById,
  postNewMovie
}