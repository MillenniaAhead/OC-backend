const router = require("express").Router();

const voucherSettingListController = require("../controllers/voucherSettingListController");

// functions
router.route("/voucherSettingLists").post((req, res) => voucherSettingListController.create(req, res));
router.route("/voucherSettingLists").get((req, res) => voucherSettingListController.getAll(req, res));
router.route("/voucherSettingLists/:id").get((req, res) => voucherSettingListController.getById(req, res));
router
    .route("/voucherSettingLists/:id")
    .delete((req, res) => voucherSettingListController.deleteById(req, res));
router.route("/voucherSettingLists/:id").put((req, res) => voucherSettingListController.update(req, res));

module.exports = router;
