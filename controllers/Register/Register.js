const { Register: RegisterModel } = require("../../models/Register/Register");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const JWT_SECRET = 'OutletControl';

const RegisterController = {
  create: async (req, res) => {

    let { username, email, password, mobilenumber, country, terms } = req.body

  if(terms){
    //Is email and username unique  
    const emailExist = await RegisterModel.findOne({ email })
    const usernameExist = await RegisterModel.findOne({ username })

  if(emailExist || usernameExist){
      success = false
      res.send({success, message:"Please provide valid email and username"})
      
  } else{
      const salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, salt)
      RegisterModel.create({username, email, password, mobilenumber, country, terms})
      .then(user => {
        success = true
      
      const { password, ...finalUser} = Object.assign({}, user.toJSON());   //remove password from user data
      
      const authtoken = jwt.sign(password, JWT_SECRET);  //generate jwt token

      res.status(201).json({success, authtoken, user:finalUser})
      })
      .catch(err => res.send(err))

}

} else {
  res.status(400).send("You must agree to all terms and conditions")
}
  },

  login: async (req, res) => {
    const { email, password } = req.body

   const isUser = await RegisterModel.findOne({email}) //check user exist or not

   if(isUser){
    const passwordCompare = await bcrypt.compare(password, isUser.password);

    if (!passwordCompare) {
        success = false
        res.send({ success, error: "Please try to login with correct credentials" });
    } else {
        success = true

        const { password, ...finalUser} = Object.assign({}, isUser.toJSON());   //remove password from use

        const authtoken = jwt.sign(isUser.password, JWT_SECRET);  //Generatign jwt token

        res.send({ success, "authtoken": authtoken, user:finalUser });
      }

   } else {
    res.send({success:false, error:'invalid email'})
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
