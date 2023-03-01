const { PhysicalAddress: PhysicalAddressModel} = require("../../models/SupplierModel/PhysicalAddressModel");

const PhysicalAddresController = {
    create: async (req, res) => {
        try {
          const product = {
            street: req.body.street,
            suburb: req.body.suburb,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            country: req.body.country,
            sameAsPostalAddress: req.body.sameAsPostalAddress,
            
            
     
           
          
          };
    
          const response = await PhysicalAddressModel.create(product);
          res.status(200).json({ response, msg: "created successfully" });
        } catch (error) {
          console.log(error);
        }
      },
      getAll: async (req, res) => {
        try {
          const users = await PhysicalAddressModel.find();
          res.json(users);
        } catch (error) {
          console.log(error);
        }
      },
      getById: async (req, res) => {
        try {
          const users = await PhysicalAddressModel.findById(req.params.id);
          if (!users)
            return res.status(404).json({ msg: "Product is  not found" });
          res.json(users);
        } catch (error) {
          console.log(error);
        }
      },
      deleteById: async (req, res) => {
        try {
          const users = await PhysicalAddressModel.findByIdAndDelete(req.params.id);
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
            street: req.body.street,
            suburb: req.body.suburb,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            country: req.body.country,
            sameAsPostalAddress: req.body.sameAsPostalAddress,
                     
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

module.exports =  PhysicalAddresController;