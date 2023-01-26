const { User: UserModel } = require("../models/User");

const userController = {
  create: async (req, res) => {
    try {
      const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        group: req.body.group,
      };

      const response = await UserModel.create(user);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const users = await UserModel.find();
      res.json(users);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const users = await UserModel.findById(req.params.id);
      if (!users)
        return res.status(404).json({ msg: "User not found" });
      res.json(users);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const users = await UserModel.findByIdAndDelete(req.params.id);
      if (!users)
        return res.status(404).json({ msg: "User not found" });
      res.status(200).json({ users, msg: "User deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        group: req.body.group,
      };
      const updatedUser = await UserModel.findByIdAndUpdate(
        req.params.id,
        user
      );
      if (!updatedUser)
        return res.status(404).json({ msg: "User not found" });
      res.status(200).json({ user, msg: "User updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = userController;
