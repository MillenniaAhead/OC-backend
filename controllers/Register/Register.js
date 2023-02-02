const { Register: RegisterModel } = require("../../models/Register/Register");

const RegisterController = {
  create: async (req, res) => {
    try {
      const register = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        mobilenumber: req.body.mobilenumber,
        country: req.body.country,
      };

      const response = await RegisterModel.create(register);
      res
        .status(200)
        .json({ response, msg: "Register successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const Register = await RegisterModel.find();
      res.json(Register);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const Register = await RegisterModel.findById(req.params.id);
      if (!Register)
        return res.status(404).json({ msg: "Register data not found" });
      res.json(Register);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const Register = await RegisterModel.findByIdAndDelete(req.params.id);
      if (!Register)
        return res.status(404).json({ msg: "Register data not found" });
      res
        .status(200)
        .json({ Register, msg: "Register data deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const Register = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        mobilenumber: req.body.mobilenumber,
        country: req.body.country,
      };
      const updatedregister = await RegisterModel.findByIdAndUpdate(
        req.params.id,
        Register
      );
      if (!updatedregister)
        return res.status(404).json({ msg: "Register data not found" });
      res
        .status(200)
        .json({ Register, msg: "Register data updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = RegisterController;
