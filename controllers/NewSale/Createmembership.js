const { CreateMembership: CreateMembershipModel } = require("../../models/NewSale/Createmembership");

const CreateMembershipController = {
  create: async (req, res) => {
    try {
      const createmembership = {
        name: req.body.name,
        price: req.body.price,
      };

      const response = await CreateMembershipModel.create(createmembership);
      res.status(200).json({ response, msg: "Membership created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const CreateMembership = await CreateMembershipModel.find();
      res.json(CreateMembership);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const CreateMembership = await CreateMembershipModel.findById(req.params.id);
      if (!CreateMembership) return res.status(404).json({ msg: "Membership not found" });
      res.json(CreateMembership);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const CreateMembership = await CreateMembershipModel.findByIdAndDelete(req.params.id);
      if (!CreateMembership) return res.status(404).json({ msg: "Membership not found" });
      res.status(200).json({ CreateMembership, msg: "Membership deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const CreateMembership = {
        name: req.body.name,
        price: req.body.price,
      };
      const updatedcreatemembership = await CreateMembershipModel.findByIdAndUpdate(
        req.params.id,
        CreateMembership
      );
      if (!updatedcreatemembership)
        return res.status(404).json({ msg: "Membership not found" });
      res.status(200).json({ CreateMembership, msg: "Membership updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = CreateMembershipController;
