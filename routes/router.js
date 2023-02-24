const router = require("express").Router();

// groups router
const groupsRouter = require("./groups");
router.use("/", groupsRouter);

// users router
const usersRouter = require("./users");
router.use("/", usersRouter);

// createMemberShipProduct router
const createMemberShipProductsRouter = require("./createMemberShipProducts");
router.use("/", createMemberShipProductsRouter);

// SelectCategoryProduct router
const selectCategoryProductsRouter = require("./selectCategoryProducts");
router.use("/", selectCategoryProductsRouter);


// voucherTypeProduct router
const voucherTypeProductsRouter = require("./voucherTypeProducts");
router.use("/", voucherTypeProductsRouter);

// addNewProduct router
const addNewProductsRouter = require("./addNewProducts");
router.use("/", addNewProductsRouter);

// memberShipList router
const memberShipListsRouter = require("./memberShipLists");
router.use("/", memberShipListsRouter);

// voucherList router
const voucherListsRouter = require("./voucherLists");
router.use("/", voucherListsRouter);

// voucherSettingList router
const voucherSettingListsRouter = require("./voucherSettingLists");
router.use("/", voucherSettingListsRouter);

// attractNewClientList router
const attractNewClientsRouter = require("./attractNewClients");
router.use("/", attractNewClientsRouter);

// addNewModals router
const addNewModalsRouter = require("./addNewModals");
router.use("/", addNewModalsRouter);

// addCatMods router
const addCatModsRouter = require("./addCatMods");
router.use("/", addCatModsRouter);


// categoryMods router
const categoryModsRouter = require("./categoryMods");
router.use("/", categoryModsRouter);


//selectMemberShipModals router
const selectMemberShipModalsRouter = require("./selectMemberShipModals");
router.use("/",selectMemberShipModalsRouter);

// selectMemberShip router
const selectMemberShipsRouter = require("./selectMemberShips");
router.use("/", selectMemberShipsRouter);

module.exports = router;
