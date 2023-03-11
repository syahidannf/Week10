const pool = require("../config/config.js");

class Movies {
  static getMovies = async (next) => {
    const findQuery = `
        SELECT
        *
        FROM movies
    `;
    try {
      const data = await pool.query(findQuery);
      return data.rows;
    } catch (err) {
      next(err);
    }
  };

  static findById = async (id, next) => {
    const findQuery = `
      SELECT 
      *
      FROM movies
      WHERE id = $1

    `;
    try {
      const data = await pool.query(findQuery, [id]);

      if (data.rows.length === 0) {
        next({ name: "ErrorNotFound" });
      } else {
        return data.rows[0];
      }
    } catch (err) {
      next(err);
    }
  };

  static createMovies = async (params, next) => {
    try {
      const { title, genres, year } = params;
      const insertQuery = `
          INSERT INTO movies (title, genres, year)
          VALUES
          ($1, $2, $3)
          RETURNING *
      
      `;
      const data = pool.query(insertQuery, [title, genres, year]);
      return data;
    } catch (err) {
      next(err);
    }
  };

  static updateMovies = async (params, next) => {
    try {
      const updateQuery = ` 
        UPDATE movies
        set id = $1
            title = $2
            genres = $3
            year = $4
      `;
      pool.query(updateQuery, [id, title, genres, year]);
      return data.row;
    } catch (err) {
      next(err);
    }
  };

  static deleteMovie = async (id, next) => {
    try {
      const deleteQuery = `
        DELETE FROM movies
        WHERE id = $1
        RETURNING *
      `;
      const data = pool.query(deleteQuery, [id]);
      return data.row[0];
    } catch (err) {
      next(err);
    }
  };
}

module.exports = Movies;
