const { MembershipSold: MembershipSoldModel } = require("../../models/NewSale/MembershipSold");

const MembershipSoldController = {
  create: async (req, res) => {
    try {
      const response = await MembershipSoldModel.create(req.body);
      res.status(200).json({ response, msg: "name created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const MembershipSold = await MembershipSoldModel.find();
      res.json(MembershipSold);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const MembershipSold = await MembershipSoldModel.findById(req.params.id);
      if (!MembershipSold) return res.status(404).json({ msg: "name not found" });
      res.json(MembershipSold);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const MembershipSold = await MembershipSoldModel.findByIdAndDelete(req.params.id);
      if (!MembershipSold) return res.status(404).json({ msg: "name not found" });
      res.status(200).json({ MembershipSold, msg: "name deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const MembershipSold = {
        name: req.body.name,
      };
      const updatedmembershipsold = await MembershipSoldModel.findByIdAndUpdate(
        req.params.id,
        MembershipSold
      );
      if (!updatedmembershipsold)
        return res.status(404).json({ msg: "name not found" });
      res.status(200).json({ MembershipSold, msg: "name updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = MembershipSoldController;
