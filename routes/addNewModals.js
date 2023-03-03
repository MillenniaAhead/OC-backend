const router = require("express").Router();

const addNewModalController = require("../controllers/addNewModalController");

// functions
router.route("/addNewModals").post((req, res) => addNewModalController.create(req, res));
router.route("/addNewModals").get((req, res) => addNewModalController.getAll(req, res));
router.route("/addNewModals/:id").get((req, res) => addNewModalController.getById(req, res));
router.route("/addNewModals/:id").delete((req, res) => addNewModalController.deleteById(req, res));
router.route("/addNewModals/:id").put((req, res) => addNewModalController.update(req, res));

module.exports = router;
