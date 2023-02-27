const router = require("express").Router();

const InvoiceController = require("../../controllers/SanClient/InvoiceController");

// functions
router.route("/sanclients/invoice").post((req, res) => InvoiceController.create(req, res));
router.route("/sanclients/invoice").get((req, res) => InvoiceController.getAll(req, res));
router.route("/sanclients/invoice/:id").get((req, res) => InvoiceController.getById(req, res));
router.route("/sanclients/invoice/:id").delete((req, res) => InvoiceController.deleteById(req, res));
router.route("/sanclients/invoice/:id").put((req, res) => InvoiceController.update(req, res));

module.exports = router;