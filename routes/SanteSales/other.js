const router = require("express").Router();

const OtherController = require("../../controllers/SansetSales/OtherController");

router.route("/sansetsales/other").post((req, res) => OtherController.create(req, res));
router.route("/sansetsales/other").get((req, res) => OtherController.getAll(req, res));
router.route("/sansetsales/other/:id").get((req, res) => OtherController.getById(req, res));
router.route("/sansetsales/other/:id").delete((req, res) => OtherController.deleteById(req, res));
router.route("/sansetsales/other/:id").put((req, res) => OtherController.update(req, res));

module.exports = router;
