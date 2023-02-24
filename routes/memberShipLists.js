const router = require("express").Router();

const memberShipListController = require("../controllers/memberShipListController");

// functions
router.route("/memberShipLists").post((req, res) => memberShipListController.create(req, res));
router.route("/memberShipLists").get((req, res) => memberShipListController.getAll(req, res));
router.route("/memberShipLists/:id").get((req, res) => memberShipListController.getById(req, res));
router
    .route("/memberShipLists/:id")
    .delete((req, res) => memberShipListController.deleteById(req, res));
router.route("/memberShipLists/:id").put((req, res) => memberShipListController.update(req, res));

module.exports = router;
