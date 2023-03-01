const { ContactInfo: ContactInfoModel} = require("../../models/SupplierModel/ContactInfoModel");

const ContactInfoController = {
    create: async (req, res) => {
        try {
          const product = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            phone: req.body.phone,
            telephone: req.body.telephone,
            email: req.body.email,
            website: req.body.lastname,
            
     
           
          
          };
    
          const response = await ContactInfoModel.create(product);
          res.status(200).json({ response, msg: "created successfully" });
        } catch (error) {
          console.log(error);
        }
      },
      getAll: async (req, res) => {
        try {
          const users = await ContactInfoModel.find();
          res.json(users);
        } catch (error) {
          console.log(error);
        }
      },
      getById: async (req, res) => {
        try {
          const users = await ContactInfoModel.findById(req.params.id);
          if (!users)
            return res.status(404).json({ msg: "Product is  not found" });
          res.json(users);
        } catch (error) {
          console.log(error);
        }
      },
      deleteById: async (req, res) => {
        try {
          const users = await ContactInfoModel.findByIdAndDelete(req.params.id);
          if (!users)
            return res.status(404).json({ msg: "products not found" });
          res.status(200).json({ users, msg: "Product deleted with success!" });
        } catch (error) {
          console.log(error);
        }
      },
      update: async (req, res) => {
        try {
          const user = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            phone: req.body.phone,
            telephone: req.body.telephone,
            email: req.body.email,
            website: req.body.lastname,
                     
          };
          const updatedUser = await ContactInfoModel.findByIdAndUpdate(
            req.params.id,
            user
          );
          if (!updatedUser)
            return res.status(404).json({ msg: "product not found" });
          res.status(200).json({ user, msg: "Product updated successfully!" });
        } catch (error) {
          console.log(error);
        }
      },
}

module.exports =  ContactInfoController;