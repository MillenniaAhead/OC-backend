const router = require("express").Router();

const NewProductsController = require("../../controllers/NewSale/New");

// functions
router.route("/newproduct").post((req, res) => NewProductsController.create(req, res));
router.route("/newproduct").get((req, res) => NewProductsController.getAll(req, res));
router.route("/newproduct/:id").get((req, res) => NewProductsController.getById(req, res));
router.route("/newproduct/:id").delete((req, res) => NewProductsController.deleteById(req, res));
router.route("/newproduct/:id").put((req, res) => NewProductsController.update(req, res));

module.exports = router;