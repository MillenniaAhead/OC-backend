const router = require("express").Router();

const SaleInvoiceControllerr = require("../../controllers/SansetSales/SaleInvoiceController");

// functions
router.route("/sansetsales/saleInvoice").post((req, res) => SaleInvoiceControllerr.create(req, res));
router.route("/sansetsales/saleInvoice").get((req, res) => SaleInvoiceControllerr.getAll(req, res));
router.route("/sansetsales/saleInvoice/:id").get((req, res) => SaleInvoiceControllerr.getById(req, res));
router.route("/sansetsales/saleInvoice/:id").delete((req, res) => SaleInvoiceControllerr.deleteById(req, res));
router.route("/sansetsales/saleInvoice/:id").put((req, res) => SaleInvoiceControllerr.update(req, res));

module.exports = router;
