// represents the jpa layer to fetch data from db
const Announcement = require("../model/announcements");

const create = async (req, res) => {
    try {
        await Announcement.create({
            courseId: req.body.courseId,
            announcementContent: req.body.announcementContent,
            announcementTitle: req.body.announcementTitle,
        }).then(() => {
            res.sendStatus(201);
    });
    } catch (err) {
        console.log(err);
    }
};
const getAllAnnouncements = async (req, res) => {
    try {
    const announcements = await Announcement.findAndCountAll();
    res.send({
      context: announcements.rows,
      total: announcements.count
    });
  } catch (err) {
    console.log(err);
  }
  };
module.exports = {
    create,
    getAllAnnouncements,
};
