const UsersServices = require("../services/usersservice");

class usersController {
  static findUsers = async (req, res, next) => {
    try {
      const data = await UsersServices.findUsers(next);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };
  static findById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await UsersServices.findById(id, next);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };

  static createUsers = async (req, res, next) => {
    try {
      const data = await UsersServices.createUsers(req.body, next);
      res.status(201).json(data);
    } catch (err) {
      next(err);
    }
  };

  static updateUsers = async (req, res, next) => {
    try {
      const data = await UsersServices.updateUsers(req.body, next);
      res.status(201).json(data);
    } catch (err) {
      next(err);
    }
  };

  static deleteUsers = async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await UsersServices.deleteUsers(id, next);

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

module.exports = usersController;
