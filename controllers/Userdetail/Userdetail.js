const { UserDetail: UserDetailModel } = require("../../models/Userdetail/UserDetail");

const userDetailController = {
  create: async (req, res) => {
    try {
        const response = await UserDetailModel.create(req.body);
        res.status(200).json({ response, msg: "User Detail created successfully" });
      } catch (error) {
        console.log(error);
      }
    },
    getAll: async (req, res) => {
      try {
        const UserDetail = await UserDetailModel.find();
        res.json(UserDetail);
      } catch (error) {
        console.log(error);
      }
    },
    getById: async (req, res) => {
      try {
        const UserDetail = await UserDetailModel.findById(req.params.id);
        if (!UserDetail) return res.status(404).json({ msg: "User Detail not found" });
        res.json(UserDetail);
      } catch (error) {
        console.log(error);
      }
    },
    deleteById: async (req, res) => {
      try {
        const UserDetail = await UserDetailModel.findByIdAndDelete(
          req.params.id
        );
        if (!UserDetail) return res.status(404).json({ msg: "User Detail not found" });
        res.status(200).json({ UserDetail, msg: "User Detail deleted with success!" });
      } catch (error) {
        console.log(error);
      }
    },
    update: async (req, res) => {
      try {
        const UserDetail = {
          main_business: req.body.main_business,
          related_business: req.body.related_business,
          team_size: req.body.team_size,
          location: req.body.location,
          software_name: req.body.software_name,
          hear_about: req.body.hear_about,
        };
        const updateduserDetail = await UserDetailModel.findByIdAndUpdate(
          req.params.id,
          UserDetail
        );
        if (!updateduserDetail)
          return res.status(404).json({ msg: "User Detail not found" });
        res.status(200).json({ UserDetail, msg: "User Detail updated successfully!" });
      } catch (error) {
        console.log(error);
      }
    },
  };
  
  module.exports = userDetailController;
