const { Login: LoginModel } = require("../../models/Login/Login");

const LoginController = {
  create: async (req, res) => {
    try {
      const login = {
        email: req.body.email,
        password: req.body.password,
      };

      const response = await LoginModel.create(login);
      res
        .status(200)
        .json({ response, msg: "Login successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const Login = await LoginModel.find();
      res.json(Login);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const Login = await LoginModel.findById(req.params.id);
      if (!Login)
        return res.status(404).json({ msg: "Login data not found" });
      res.json(Login);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const Login = await LoginModel.findByIdAndDelete(req.params.id);
      if (!Login)
        return res.status(404).json({ msg: "Login data not found" });
      res
        .status(200)
        .json({ Login, msg: "Login data deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const Login = {
        email: req.body.email,
        password: req.body.password,
      };
      const updatedlogin = await LoginModel.findByIdAndUpdate(
        req.params.id,
        Login
      );
      if (!updatedlogin)
        return res.status(404).json({ msg: "Login data not found" });
      res
        .status(200)
        .json({ Login, msg: "Login data updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = LoginController;
