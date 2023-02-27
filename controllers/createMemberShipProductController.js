const { CreateMemberShipProduct: CreateMemberShipProductModel } = require("../models/CreateMemberShipProduct");

const createMemberShipProductController = {
  create: async (req, res) => {
    try {
      const response = await CreateMemberShipProductModel.create(req.body);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const createMemberShipProducts = await CreateMemberShipProductModel.find();
      res.json(createMemberShipProducts);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const createMemberShipProducts = await CreateMemberShipProductModel.findById(req.params.id);
      if (!createMemberShipProducts)
        return res.status(404).json({ msg: "User not found" });
      res.json(createMemberShipProducts);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const createMemberShipProducts = await CreateMemberShipProductModel.findByIdAndDelete(req.params.id);
      if (!createMemberShipProducts)
        return res.status(404).json({ msg: "User not found" });
      res.status(200).json({ createMemberShipProducts, msg: "User deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const createMemberShipProduct = {
        name: req.body.name,
        description: req.body.description,
        sessions: req.body.sessions,
        amount: req.body.amount,
        terms: req.body.terms,
      };
      const updatedCreateMemberShipProduct = await CreateMemberShipProductModel.findByIdAndUpdate(
        req.params.id,
        createMemberShipProduct
      );
      if (!updatedCreateMemberShipProduct)
        return res.status(404).json({ msg: "User not found" });
      res.status(200).json({ createMemberShipProduct, msg: "User updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = createMemberShipProductController;
