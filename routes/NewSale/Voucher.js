const router = require("express").Router();

const VoucherController = require("../../controllers/NewSale/Voucher");

// functions
router.route("/voucher").post((req, res) => VoucherController.create(req, res));
router.route("/voucher").get((req, res) => VoucherController.getAll(req, res));
router.route("/voucher/:id").get((req, res) => VoucherController.getById(req, res));
router.route("/voucher/:id").delete((req, res) => VoucherController.deleteById(req, res));
router.route("/voucher/:id").put((req, res) => VoucherController.update(req, res));

module.exports = router;