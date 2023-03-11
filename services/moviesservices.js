const MovieRepository = require("../repositories/moviesrepository.js");

class MovieServices {
  static findMovies = async (next) => {
    try {
      const data = MoviesRepository.findMovies(next);
      return data;
    } catch (err) {
      next(err);
    }
  };

  static findById = async (id, next) => {
    try {
      const data = await MoviesRepository.findById(id, next);
      return data;
    } catch (err) {
      next(err);
    }
  };

  static createMovies = async (params, next) => {
    try {
      const data = await MoviesRepository.createMovies(params, next);
    } catch (err) {
      next(err);
    }
  };

  static updateMovies = async (params, next) => {
    try {
      const data = await MoviesRepository.updateMovies(params, next);
    } catch (err) {
      next(err);
    }
  };

  static deleteMovies = async (id, next) => {
    try {
      return MovieRepository.deleteMovies(id, next);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = MovieServices;
