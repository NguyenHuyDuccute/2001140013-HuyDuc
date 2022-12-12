// represents the jpa layer to fetch data from db
const CourseUser = require("../model/courseUsers");
const Course = require("../model/courses");

const create = async (req, res) => {
    try {
        await CourseUser.create({
            courseId: req.body.courseId,
            userId: req.body.userId,
        }).then(() => {
            res.sendStatus(201).json('Successfull');
    });
    } catch (err) {
        console.log(err);
    }
};
const getAllCourses = async (req, res) => {
    try {
    const allCourseUsers = await CourseUser.findAll({
    });
    const allCourses = await Course.findAll({})
    if(allCourseUsers.length > 0) {
        const myCourseIds = allCourseUsers.reduce((prev,curr)=>prev.concat(curr.id),[])
        const result = allCourses.filter(item=>myCourseIds.includes(item.id));
        return res.json(result)
    }
    return res.json([]);
  } catch (err) {
    console.log(err);
  }
  };
module.exports = {
    create,
    getAllCourses,
};
