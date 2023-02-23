const { Membership: MembershipModel } = require("../../models/NewSale/Membership");

const MembershipController = {
  create: async (req, res) => {
    try {
      const membership = {
        name: req.body.name,
      };

      const response = await MembershipModel.create(membership);
      res.status(200).json({ response, msg: "name created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const Membership = await MembershipModel.find();
      res.json(Membership);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const Membership = await MembershipModel.findById(req.params.id);
      if (!Membership) return res.status(404).json({ msg: "name not found" });
      res.json(Membership);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const Membership = await MembershipModel.findByIdAndDelete(req.params.id);
      if (!Membership) return res.status(404).json({ msg: "name not found" });
      res.status(200).json({ Membership, msg: "name deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const Membership = {
        name: req.body.name,
      };
      const updatedmembership = await MembershipModel.findByIdAndUpdate(
        req.params.id,
        Membership
      );
      if (!updatedmembership)
        return res.status(404).json({ msg: "name not found" });
      res.status(200).json({ Membership, msg: "name updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = MembershipController;
