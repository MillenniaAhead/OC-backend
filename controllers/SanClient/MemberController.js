const { Member: MemberModal } = require("../../models/SanClient/MemberModal");

const MemberController = {
  create: async (req, res) => {
    try {
      const Member = {
        member: req.body.member
       
      };

      const response = await MemberModal.create(Member);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const Members = await MemberModal.find();
      res.json(Members);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const Members = await MemberModal.findById(req.params.id);
      if (!Members)
        return res.status(404).json({ msg: "Member not found" });
      res.json(Members);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const Members = await MemberModal.findByIdAndDelete(req.params.id);
      if (!Members)
        return res.status(404).json({ msg: "Member not found" });
      res.status(200).json({ Members, msg: "Member deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const Member = {
        member: req.body.member
        
      };
      const updatedMember = await MemberModal.findByIdAndUpdate(
        req.params.id,
        Member
      );
      if (!updatedMember)
        return res.status(404).json({ msg: "Member not found" });
      res.status(200).json({ Member, msg: "Member updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = MemberController;
