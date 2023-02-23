const router = require("express").Router();

// groups router
const groupsRouter = require("./groups");
router.use("/", groupsRouter);

// users router
const usersRouter = require("./users");
router.use("/users", usersRouter);

// services router
const servicesMenuRouter = require("./servicesMenu");
router.use("/servicesMenu",servicesMenuRouter);

// services router
const servicesMenu2Router = require("./servicesMenu2");
router.use("/servicesMenu2",servicesMenu2Router);

// services router
const serviceTypeRouter = require("./serviceType");
router.use("/serviceType",serviceTypeRouter);

// services router
const singleServiceRouter = require("./singleService");
router.use("/singleService",singleServiceRouter);

// services router
const advancePricingRouter = require("./advancePricing");
router.use("/",advancePricingRouter);

// services router
const addNewRouter = require("./addNew");
router.use("/addNew",addNewRouter);

// services router
const selectCategoryRouter = require("./selectCategory");
router.use("/selectCategory",selectCategoryRouter);

// services router
const editSingleRouter = require("./editSingle");
router.use("/editSingle",editSingleRouter);

// services router
const newCategoryRouter = require("./newCategory");
router.use("/newCategory",newCategoryRouter);

// services router
const selectBrandRouter = require("./selectBrand");
router.use("/selectBrand",selectBrandRouter);

// services router
const newProductRouter = require("./newProduct");
router.use("/newProduct",newProductRouter);

// services router
const newPackageRouter = require("./newPackage");
router.use("/newPackage",newPackageRouter);

module.exports = router;
