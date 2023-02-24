const { SelectMemberShip: SelectMemberShipModel } = require("../models/SelectMemberShip");

const selectMemberShipController = {
  create: async (req, res) => {
    try {
      const response = await SelectMemberShipModel.create(req.body);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const selectMemberShips = await SelectMemberShipModel.find();
      res.json(selectMemberShips);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const selectMemberShips = await SelectMemberShipModel.findById(req.params.id);
      if (!selectMemberShips)
        return res.status(404).json({ msg: "User not found" });
      res.json(selectMemberShips);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const selectMemberShips = await SelectMemberShipModel.findByIdAndDelete(req.params.id);
      if (!selectMemberShips)
        return res.status(404).json({ msg: "User not found" });
      res.status(200).json({ selectMemberShips, msg: "User deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const selectMemberShip = {
        name: req.body.name,
        description: req.body.description,
        sessions: req.body.sessions,
        amount: req.body.amount,
        terms: req.body.terms,
      };
      const updatedSelectMemberShip = await SelectMemberShipModel.findByIdAndUpdate(
        req.params.id,
        selectMemberShip
      );
      if (!updatedSelectMemberShip)
        return res.status(404).json({ msg: "User not found" });
      res.status(200).json({ selectMemberShip, msg: "User updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = selectMemberShipController;
