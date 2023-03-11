const Users = require("../models/users");

class UsersRepository {
  static findUsers = async (next) => {
    try {
      const data = await Users.getUsers(next);
      return data;
    } catch (err) {
      next(err);
    }
  };

  static findById = async (id, next) => {
    try {
      const data = await Users.findById(id, next);
      return data;
    } catch (err) {
      next(err);
    }
  };

  static createUsers = async (params, next) => {
    try {
      const data = await Users.createUsers(params, next);
    } catch (err) {
      next(err);
    }
  };

  static updateUsers = async (params, next) => {
    try {
      const data = await Users.updateUsers(params, next);
    } catch (err) {
      next(err);
    }
  };

  static deleteUsers = async (id, next) => {
    try {
      return Users.deleteUsers(id, next);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = UsersRepository;
