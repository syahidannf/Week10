const Movies = require("../models/movies");
const { param } = require("../routes");

class MovieRepository {
  static findMovies = async (next) => {
    try {
      const data = await Movies.getMovies(next);
      return data;
    } catch (err) {
      next(err);
    }
  };

  static findById = async (id, next) => {
    try {
      const data = await Movies.findById(id, next);
      return data;
    } catch (err) {
      next(err);
    }
  };

  static createMovies = async (params, next) => {
    try {
    } catch (err) {
      next(err);
    }
  };

  static deleteMovies = async (id, next) => {
    try {
      return Movies.deleteMovies(id, next);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = MovieRepository;
