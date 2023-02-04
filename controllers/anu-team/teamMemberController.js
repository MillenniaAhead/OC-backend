const { TeamMember: TeamMemberModel } = require("../../models/anu-team/TeamMember");

const teamMemberController = {
  create: async (req, res) => {
    try {

      const response = await TeamMemberModel.create(req.body);
      res.status(200).json({ response, msg: "Team member created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const teamMembers = await TeamMemberModel.find();
      res.json(teamMembers);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const teamMembers = await TeamMemberModel.findById(req.params.id);
      if (!teamMembers)
        return res.status(404).json({ msg: "Team member not found" });
        res.json(teamMembers);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const teamMembers = await TeamMemberModel.findByIdAndDelete(req.params.id);
      if (!teamMembers)
        return res.status(404).json({ msg: "Team member not found" });
      res.status(200).json({ teamMembers, msg: "Team member deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const updatedTeamMember = await TeamMemberModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      if (!updatedTeamMember)
        return res.status(404).json({ msg: "User not found" });
      res.status(200).json({ data:req.body, msg: "Team member updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = teamMemberController;
