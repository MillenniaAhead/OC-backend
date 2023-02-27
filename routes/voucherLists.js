const router = require("express").Router();

const voucherListController = require("../controllers/voucherListController");

// functions
router.route("/voucherLists").post((req, res) => voucherListController.create(req, res));
router.route("/voucherLists").get((req, res) => voucherListController.getAll(req, res));
router.route("/voucherLists/:id").get((req, res) => voucherListController.getById(req, res));
router
    .route("/voucherLists/:id")
    .delete((req, res) => voucherListController.deleteById(req, res));
router.route("/voucherLists/:id").put((req, res) => voucherListController.update(req, res));

module.exports = router;
