const router = require("express").Router();

// groups router
const groupsRouter = require("./groups");
router.use("/", groupsRouter);

// users router
const usersRouter = require("./users");
router.use("/", usersRouter);

// reason router
const reasonRouter = require("./SettingClients/Reason");
router.use("/", reasonRouter);

// sources router
const sourcesRouter = require("./SettingClients/Sources");
router.use("/", sourcesRouter);

// calender router
const calenderRouter = require("./Calender/Calender");
router.use("/", calenderRouter);

module.exports = router;
