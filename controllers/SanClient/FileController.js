const { File: FileModal } = require("../../models/SanClient/FileModal");

const FileController = {
  create: async (req, res) => {
    try {
      const File = {
        file: req.body.file
       
      };

      const response = await FileModal.create(File);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const Files = await FileModal.find();
      res.json(Files);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const Files = await FileModal.findById(req.params.id);
      if (!Files)
        return res.status(404).json({ msg: "File not found" });
      res.json(Files);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const Files = await FileModal.findByIdAndDelete(req.params.id);
      if (!Files)
        return res.status(404).json({ msg: "File not found" });
      res.status(200).json({ Files, msg: "File deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const File = {
        file: req.body.file
        
      };
      const updatedFile = await FileModal.findByIdAndUpdate(
        req.params.id,
        File
      );
      if (!updatedFile)
        return res.status(404).json({ msg: "File not found" });
      res.status(200).json({ File, msg: "File updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = FileController;
