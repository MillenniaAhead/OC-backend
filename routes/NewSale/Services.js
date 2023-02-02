const router = require("express").Router();

const ServicesController = require("../../controllers/NewSale/Services");

// functions
router.route("/services").post((req, res) => ServicesController.create(req, res));
router.route("/services").get((req, res) => ServicesController.getAll(req, res));
router.route("/services/:id").get((req, res) => ServicesController.getById(req, res));
router.route("/services/:id").delete((req, res) => ServicesController.deleteById(req, res));
router.route("/services/:id").put((req, res) => ServicesController.update(req, res));

module.exports = router;