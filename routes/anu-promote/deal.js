const router = require("express").Router();

const dealController = require("../../controllers/anu-promote/dealController");

router.route("/deals").post((req, res) => dealController.create(req, res));
router.route("/deals").get((req, res) => dealController.getAll(req, res));
router.route("/deals/:id").delete((req, res) => dealController.deleteById(req, res));
router.route("/deals/:id").put((req, res) => dealController.update(req, res));
router.route("/deals/:id").get((req, res) => dealController.getById(req, res));

module.exports = router;