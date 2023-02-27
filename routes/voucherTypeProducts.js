const router = require("express").Router();

const voucherTypeProductController = require("../controllers/voucherTypeProductController");

// functions
router.route("/voucherTypeProducts").post((req, res) => voucherTypeProductController.create(req, res));
router.route("/voucherTypeProducts").get((req, res) => voucherTypeProductController.getAll(req, res));
router.route("/voucherTypeProducts/:id").get((req, res) => voucherTypeProductController.getById(req, res));
router
    .route("/voucherTypeProducts/:id")
    .delete((req, res) => voucherTypeProductController.deleteById(req, res));
router.route("/voucherTypeProducts/:id").put((req, res) => voucherTypeProductController.update(req, res));

module.exports = router;
