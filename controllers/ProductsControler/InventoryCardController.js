const { InventoryCards: InventoryCardModel} = require("../../models/ProdutcsModel/InventoryCardModel");

const InventoryCardController = {
    create: async (req, res) => {
        try {
          const product = {
            sku: req.body.sku,
            success: req.body.success,
            currentstock: req.body.currentstock,
            successCheck: req.body.successCheck,
            lowstocke: req.body.lowstocke,
            recordquantity: req.body.recordquantity,
           
          
          };
    
          const response = await SanProducts.create(product);
          res.status(200).json({ response, msg: "created successfully" });
        } catch (error) {
          console.log(error);
        }
      },
      getAll: async (req, res) => {
        try {
          const users = await InventoryCards.find();
          res.json(users);
        } catch (error) {
          console.log(error);
        }
      },
      getById: async (req, res) => {
        try {
          const users = await InventoryCards.findById(req.params.id);
          if (!users)
            return res.status(404).json({ msg: "Product is  not found" });
          res.json(users);
        } catch (error) {
          console.log(error);
        }
      },
      deleteById: async (req, res) => {
        try {
          const users = await InventoryCards.findByIdAndDelete(req.params.id);
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
            sku: req.body.sku,
            success: req.body.success,
            currentstock: req.body.currentstock,
            successCheck: req.body.successCheck,
            lowstocke: req.body.lowstocke,
            recordquantity: req.body.recordquantity,
          };
          const updatedUser = await InventoryCards.findByIdAndUpdate(
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

module.exports = InventoryCardController;