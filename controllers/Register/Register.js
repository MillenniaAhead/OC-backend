const { Register: RegisterModel } = require("../../models/Register/Register");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const JWT_SECRET = 'OutletControl';

const RegisterController = {
  create: async (req, res) => {
    let { username, email, password, mobilenumber, country } = req.body
  const userExist = await RegisterModel.findOne({email})
  if(userExist){
      success = false
      res.send({success, message:"Please provide valid email"})
  } else{
      const salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, salt)
      RegisterModel.create({username, email, password, mobilenumber, country})
      .then(user => console.log(user))
      .catch(err => res.send(err))
      success = true
      const authtoken = jwt.sign(password, JWT_SECRET);
      res.send({success, "authtoken": authtoken})
}
  },

  login: async (req, res) => {
    const { email, password } = req.body
   const isUser = await RegisterModel.findOne({email})
   if(isUser){
    const passwordCompare = await bcrypt.compare(password, isUser.password);
    if (!passwordCompare) {
        success = false
        res.send({ success, error: "Please try to login with correct credentials" });
    } else {
        success = true
        const authtoken = jwt.sign(isUser.password, JWT_SECRET);
        res.send({ success, "authtoken": authtoken });
      }
   } else {
    res.send('invalid email')
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
        username: req.body.username,
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
