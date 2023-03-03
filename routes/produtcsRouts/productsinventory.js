const InventoryCardController = require("../../controllers/ProductsControler/InventoryCardController");

const router = require("express").Router();
router.route("/inventorycard").post((req, res) => InventoryCardController.create(req, res));
router.route("/inventorycard").get((req, res) => InventoryCardController.getAll(req, res));
router.route("/inventorycard/:id")
.delete((req, res) => InventoryCardController.deleteById(req, res));
router.route("/inventorycard/:id").get((req, res) => InventoryCardController.getById(req, res));



module.exports = router;