const pool = require("../config/config.js");

class Users {
  static getMUsers = async (next) => {
    const findQuery = `
          SELECT
          *
          FROM users
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
        FROM users
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

  static createUsers = async (params, next) => {
    try {
      const { email, gender, password, role } = params;
      const insertQuery = `
            INSERT INTO movies (email, gender, password, role)
            VALUES
            ($1, $2, $3, 4)
            RETURNING *
        
        `;
      const data = pool.query(insertQuery, [email, gender, password, role]);
      return data;
    } catch (err) {
      next(err);
    }
  };

  static updateUsers = async (params, next) => {
    try {
      const updateQuery = ` 
          UPDATE users
          set id = $1
              email = $2
              gender = $3
              password = $4
              role = $5
        `;
      pool.query(updateQuery, [id, email, gender, password, role]);
      return data.row;
    } catch (err) {
      next(err);
    }
  };

  static deleteusers = async (id, next) => {
    try {
      const deleteQuery = `
          DELETE FROM users
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
