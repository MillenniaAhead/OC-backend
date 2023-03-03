const { Form: FormModal } = require("../../models/SanClient/FormModal");

const FormController = {
  create: async (req, res) => {
    try {
      const Form = {
        form: req.body.form
       
      };

      const response = await FormModal.create(Form);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const Forms = await FormModal.find();
      res.json(Forms);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const Forms = await FormModal.findById(req.params.id);
      if (!Forms)
        return res.status(404).json({ msg: "Form not found" });
      res.json(Forms);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const Forms = await FormModal.findByIdAndDelete(req.params.id);
      if (!Forms)
        return res.status(404).json({ msg: "Form not found" });
      res.status(200).json({ Forms, msg: "Form deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const Form = {
        form: req.body.form
        
      };
      const updatedForm = await FormModal.findByIdAndUpdate(
        req.params.id,
        Form
      );
      if (!updatedForm)
        return res.status(404).json({ msg: "Form not found" });
      res.status(200).json({ Form, msg: "Form updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = FormController;
