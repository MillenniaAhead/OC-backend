const ContactInfoController = require("../../controllers/SuplierControler/ContactInfoController");

const router = require("express").Router();

router.route("/contactinfo").post((req, res) => ContactInfoController.create(req, res));
router.route("/contactinfo").get((req, res) => ContactInfoController.getAll(req, res));
router.route("/contactinfo/:id")
.delete((req, res) => sanprodtucsController.deleteById(req, res));
router.route("/contactinfo/:id").get((req, res) => ContactInfoController.getById(req, res));



module.exports = router;