const router = require("express").Router();

const SalesHistoryController = require("../../controllers/NewSale/SalesHistory");

// functions
router.route("/saleshistory").post((req, res) => SalesHistoryController.create(req, res));
router.route("/saleshistory").get((req, res) => SalesHistoryController.getAll(req, res));
router.route("/saleshistory/:id").get((req, res) => SalesHistoryController.getById(req, res));
router.route("/saleshistory/:id").delete((req, res) => SalesHistoryController.deleteById(req, res));
router.route("/saleshistory/:id").put((req, res) => SalesHistoryController.update(req, res));

module.exports = router;