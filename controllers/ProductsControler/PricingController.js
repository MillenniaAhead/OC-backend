const { Pricing: PricingModel} = require("../../models/ProdutcsModel/PricingModel");

const PricingController = {
    create: async (req, res) => {
        try {
          const product = {
            supplyPrice: req.body.supplyPrice,
            retailSales: req.body.retailSales,
            retailPrice: req.body.retailPrice,
            specialPrice: req.body.specialPrice,
            markup: req.body.markup,
            tax: req.body.tax,
            teamMemberCommission: req.body.teamMemberCommission,
           
          
          };
    
          const response = await SanProducts.create(product);
          res.status(200).json({ response, msg: "created successfully" });
        } catch (error) {
          console.log(error);
        }
      },
      getAll: async (req, res) => {
        try {
          const users = await PricingModel.find();
          res.json(users);
        } catch (error) {
          console.log(error);
        }
      },
      getById: async (req, res) => {
        try {
          const users = await PricingModel.findById(req.params.id);
          if (!users)
            return res.status(404).json({ msg: "Product is  not found" });
          res.json(users);
        } catch (error) {
          console.log(error);
        }
      },
      deleteById: async (req, res) => {
        try {
          const users = await PricingModel.findByIdAndDelete(req.params.id);
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
            supplyPrice: req.body.supplyPrice,
            retailSales: req.body.retailSales,
            retailPrice: req.body.retailPrice,
            specialPrice: req.body.specialPrice,
            markup: req.body.markup,
            tax: req.body.tax,
            teamMemberCommission: req.body.teamMemberCommission,
           
                     
          };
          const updatedUser = await PricingModel.findByIdAndUpdate(
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

module.exports = PricingController;