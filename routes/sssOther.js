const router = require("express").Router();

const SSSOtherController = require("../controllers/SSSOtherController");

router.route("/sansetsales/other").post((req, res) => SSSOtherController.create(req, res));
router.route("/sansetsales/other").get((req, res) => SSSOtherController.getAll(req, res));
router.route("/sansetsales/other/:id").get((req, res) => SSSOtherController.getById(req, res));
router.route("/sansetsales/other/:id").delete((req, res) => SSSOtherController.deleteById(req, res));
router.route("/sansetsales/other/:id").put((req, res) => SSSOtherController.update(req, res));

module.exports = router;
