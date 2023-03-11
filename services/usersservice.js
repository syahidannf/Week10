const UsersRepository = require("../repositories/usersrepository.js");

class UsersServices {
  static findUsers = async (next) => {
    try {
      const data = UsersRepository.findUsers(next);
      return data;
    } catch (err) {
      next(err);
    }
  };

  static findById = async (id, next) => {
    try {
      const data = await UsersRepository.findById(id, next);
      return data;
    } catch (err) {
      next(err);
    }
  };

  static createUsers = async (params, next) => {
    try {
      const data = await UsersRepository.createUsers(params, next);
    } catch (err) {
      next(err);
    }
  };

  static updateUsers = async (params, next) => {
    try {
      const data = await UsersRepository.updateUsers(params, next);
    } catch (err) {
      next(err);
    }
  };

  static deleteUsers = async (id, next) => {
    try {
      return UsersRepository.deleteUsers(id, next);
    } catch (err) {
      next(err);
    }
  };
}
module.exports = UsersServices;
