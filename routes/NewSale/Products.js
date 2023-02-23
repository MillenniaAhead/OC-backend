const router = require("express").Router();

const ProductsController = require("../../controllers/NewSale/Products");

// functions
router.route("/products").post((req, res) => ProductsController.create(req, res));
router.route("/products").get((req, res) => ProductsController.getAll(req, res));
router.route("/products/:id").get((req, res) => ProductsController.getById(req, res));
router.route("/products/:id").delete((req, res) => ProductsController.deleteById(req, res));
router.route("/products/:id").put((req, res) => ProductsController.update(req, res));

module.exports = router;