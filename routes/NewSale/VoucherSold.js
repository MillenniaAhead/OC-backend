const router = require("express").Router();

const VoucherSoldController = require("../../controllers/NewSale/VoucherSold");

// functions
router.route("/vouchersold").post((req, res) => VoucherSoldController.create(req, res));
router.route("/vouchersold").get((req, res) => VoucherSoldController.getAll(req, res));
router.route("/vouchersold/:id").get((req, res) => VoucherSoldController.getById(req, res));
router.route("/vouchersold/:id").delete((req, res) => VoucherSoldController.deleteById(req, res));
router.route("/vouchersold/:id").put((req, res) => VoucherSoldController.update(req, res));

module.exports = router;