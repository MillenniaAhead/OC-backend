const SupplierdetailsController = require("../../controllers/SuplierControler/SupplierdetailsController");

const router = require("express").Router();

router.route("/supplierdetails").post((req, res) => SupplierdetailsController.create(req, res));
router.route("/supplierdetails").get((req, res) => SupplierdetailsController.getAll(req, res));
router.route("/supplierdetails/:id")
.delete((req, res) => sanprodtucsController.deleteById(req, res));
router.route("/supplierdetails/:id").get((req, res) => SupplierdetailsController.getById(req, res));



module.exports = router;