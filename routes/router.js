const router = require("express").Router();

// groups router
const groupsRouter = require("./groups");
router.use("/", groupsRouter);

// users router
const usersRouter = require("./users");
router.use("/", usersRouter);

//san products routes
const sanproductsRouter = require("./sanprducts")
router.use("/",sanproductsRouter )

const basicInfoRouter = require("./produtcsRouts/productscardsroutes")
router.use("/",basicInfoRouter )

const inventoryRouter = require("./produtcsRouts/productsinventory")
router.use("/",inventoryRouter )

const pricingRouter = require("./produtcsRouts/pricingroutes")
router.use("/",pricingRouter )

const suplierRoutes = require("./SuplierRoutes/suplierdetailsroutes")
router.use("/",suplierRoutes  )

const contactinfoRoutes = require("./SuplierRoutes/contactinforouter")
router.use("/",contactinfoRoutes  )

const physicaladdressRoutes = require("./SuplierRoutes/physicaladdressrouter")
router.use("/",physicaladdressRoutes  )


module.exports = router;
