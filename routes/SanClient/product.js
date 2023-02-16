const router = require("express").Router();

const ProductController = require("../../controllers/SanClient/ProductController");

// functions
router.route("/sanclients/product").post((req, res) => ProductController.create(req, res));
router.route("/sanclients/product").get((req, res) => ProductController.getAll(req, res));
router.route("/sanclients/product/:id").get((req, res) => ProductController.getById(req, res));
router.route("/sanclients/product/:id").delete((req, res) => ProductController.deleteById(req, res));
router.route("/sanclients/product/:id").put((req, res) => ProductController.update(req, res));

module.exports = router;