const sanprodtucsController = require("../controllers/sanProductsController");


const router = require("express").Router();

router.route("/sanproducts").post((req, res) => sanprodtucsController.create(req, res));
router.route("/sanproducts").get((req, res) => sanprodtucsController.getAll(req, res));
router.route("/sanproducts/:id")
.delete((req, res) => sanprodtucsController.deleteById(req, res));
router.route("/sanproducts/:id").get((req, res) => sanprodtucsController.getById(req, res));


module.exports = router;