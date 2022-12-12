// represents the router class
const express = require("express");
const {
  create,
  getAllAnnouncements,
} = require("../controller/announcementsController");

const router = express.Router();

router.post("/create", create);
router.get("/announcements", getAllAnnouncements);

module.exports = {
  routes: router
};
