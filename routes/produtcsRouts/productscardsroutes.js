const BasicInfoController = require("../../controllers/ProductsControler/BasicInfoController");

const router = require("express").Router();

router.route("/basicinfo").post((req, res) => BasicInfoController.create(req, res));
router.route("/basicinfo").get((req, res) => BasicInfoController.getAll(req, res));
router.route("/basicinfo/:id")
.delete((req, res) => sanprodtucsController.deleteById(req, res));
router.route("/basicinfo/:id").get((req, res) => BasicInfoController.getById(req, res));



module.exports = router;