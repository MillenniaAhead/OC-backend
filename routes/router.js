const router = require("express").Router();

// groups router
const groupsRouter = require("./groups");
router.use("/", groupsRouter);

// users router
const usersRouter = require("./users");
router.use("/", usersRouter);

// deals router
const dealsRouter = require("./anu-promote/deal");
router.use("/", dealsRouter); 

// newAppointments router
const newAppointmentsRouter = require("./anu-appointment/newAppointment");
router.use("/", newAppointmentsRouter);

// teamMembers router
const teamMembersRouter = require("./anu-team/teamMember");
router.use("/", teamMembersRouter);

// Under anu-team commission router
const commissionsRouter = require("./anu-team/commission");
router.use("/", commissionsRouter);

// Under anu-team permission router
const permissionsRouter = require("./anu-team/permission");
router.use("/", permissionsRouter);

// Under anu-team Opening hours router
const openingHoursRouter = require("./anu-team/openingHour");
router.use("/", openingHoursRouter);

module.exports = router;
