const { Basicinfo: BasicinfoModel} = require("../../models/ProdutcsModel/BasicinfoModel");

const basicinfoController = {
    create: async (req, res) => {
        try {
          const product = {
            productname: req.body.productname,
            productbarcode: req.body.productbarcode,
            measure: req.body.measure,
            amount: req.body.amount,
            shortdesc: req.body.shortdesc,
            productdesc: req.body.productdesc,
           
          
          };
    
          const response = await BasicinfoModel.create(product);
          res.status(200).json({ response, msg: "created successfully" });
        } catch (error) {
          console.log(error);
        }
      },
      getAll: async (req, res) => {
        try {
          const users = await BasicinfoModel.find();
          res.json(users);
        } catch (error) {
          console.log(error);
        }
      },
      getById: async (req, res) => {
        try {
          const users = await BasicinfoModel.findById(req.params.id);
          if (!users)
            return res.status(404).json({ msg: "Product is  not found" });
          res.json(users);
        } catch (error) {
          console.log(error);
        }
      },
      deleteById: async (req, res) => {
        try {
          const users = await BasicinfoModel.findByIdAndDelete(req.params.id);
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
            productname: req.body.productname,
            productbarcode: req.body.productbarcode,
            measure: req.body.measure,
            amount: req.body.amount,
            shortdesc: req.body.shortdesc,
            productdesc: req.body.productdesc,
                     
          };
          const updatedUser = await BasicinfoModel.findByIdAndUpdate(
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

module.exports = basicinfoController;