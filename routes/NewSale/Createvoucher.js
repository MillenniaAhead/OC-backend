const router = require("express").Router();

const CreateVoucherController = require("../../controllers/NewSale/Createvoucher");

// functions
router.route("/createvoucher").post((req, res) => CreateVoucherController.create(req, res));
router.route("/createvoucher").get((req, res) => CreateVoucherController.getAll(req, res));
router.route("/createvoucher/:id").get((req, res) => CreateVoucherController.getById(req, res));
router.route("/createvoucher/:id").delete((req, res) => CreateVoucherController.deleteById(req, res));
router.route("/createvoucher/:id").put((req, res) => CreateVoucherController.update(req, res));

module.exports = router;