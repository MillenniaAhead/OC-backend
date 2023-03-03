const { Permission: PermissionModel } = require("../../models/anu-team/Permission");

const permissionController = {
  create: async (req, res) => {
    try {
      const response = await PermissionModel.create(req.body);
      res.status(200).json({ response, msg: "Permissions created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const permissions = await PermissionModel.find();
      res.json(permissions);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const permissions = await PermissionModel.findById(req.params.id);
      if (!permissions)
        return res.status(404).json({ msg: "Permissions not found" });
        res.json(permissions);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const permissions = await PermissionModel.findByIdAndDelete(req.params.id);
      if (!permissions)
        return res.status(404).json({ msg: "Permissions not found" });
        res.status(200).json({ permissions, msg: "Permissions deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
        
      const updatedPermissions = await PermissionModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      if (!updatedPermissions)
        return res.status(404).json({ msg: "Permissions not found" });
        res.status(200).json({ body:req.body, msg: "Permissions updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = permissionController;
