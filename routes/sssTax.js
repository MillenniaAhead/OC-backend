const router = require("express").Router();

const SSSTaxController = require("../controllers/SSSTaxController");

// functions
router.route("/sansetsales/ssstaxs").post((req, res) => SSSTaxController.create(req, res));
router.route("/sansetsales/ssstaxs").get((req, res) => SSSTaxController.getAll(req, res));
router.route("/sansetsales/ssstaxs/:id").get((req, res) => SSSTaxController.getById(req, res));
router
  .route("/sansetsales/ssstaxs/:id")
  .delete((req, res) => SSSTaxController.deleteById(req, res));
router.route("/sansetsales/ssstaxs/:id").put((req, res) => SSSTaxController.update(req, res));

module.exports = router;
