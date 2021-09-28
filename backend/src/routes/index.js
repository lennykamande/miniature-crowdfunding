const express = require ("express");
//import PersonnelRouter from "./personnel";
//import TasksRouter from "./tasks";

const router = express.Router();

// index -> root endpoint
router.get("/welcome", (req, res) => {
  res.status(200).send({
    message: "Welcome to thundafund api"
  });
});

//router.use("/personnel", PersonnelRouter);
//router.use("/tasks", TasksRouter);

module.exports = router;
