const MovieServices = require("../services/moviesservices.js");

class MovieController {
  static findMovies = async (req, res, next) => {
    try {
      const data = await MovieServices.findMovies(next);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };

  static findById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await MovieServices.findById(id, next);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };

  static createMovie = async (req, res, next) => {
    try {
      const data = await MovieServices.createMovie(req.body, next);
      res.status(201).json(data);
    } catch (err) {
      next(err);
    }
  };

  static updateMovie = async (req, res, next) => {
    try {
      const { id } = req.params;
      // belum selesai
    } catch (err) {
      next(err);
    }
  };

  static deleteMovie = async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await MovieServices.deleteMovie(id, next);

      if (data) {
        res.status(200).json({
          message: "Deleted Successfully",
          data,
        });
      } else {
        next({ name: "ErrorNotFound" });
      }
    } catch (err) {
      next(err);
    }
  };
}

module.exports = MovieController;
