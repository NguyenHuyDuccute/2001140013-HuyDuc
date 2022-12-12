// represents the jpa layer to fetch data from db
const Course = require("../model/courses");
const CourseUser = require("../model/courseUsers");
const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll();
    const allCourseUsers = await CourseUser.findAll({})
    if(allCourseUsers.length > 0) {
        const myCourseIds = allCourseUsers.reduce((prev,curr)=>prev.concat(curr.id),[])
        const result = courses.filter(item=>!myCourseIds.includes(item.id));
        return res.json(result)
    }
  return res.json(courses);
} catch (err) {
  console.log(err);
}
};

const getCourse = async (req, res) => {
  try {
    const id = req.params.id;
    await Course.findOne({ where: { id: id } }).then((item) => {
      if (item != null) {
        res.send(item);
      } else {
        res.sendStatus(404);
      }
    });
  } catch (err) {
    console.log(err);
  }
  
};

const saveCourse = async (req, res) => {
  const Course = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone
  };
  await Course.create(Course).then(() => {
    res.sendStatus(201);
  });
};

const updateCourse = async (req, res) => {
  const id = req.params.id;// represents the jpa layer to fetch data from db



  

  module.exports = {
    getAllProfiles,
    getProfile,
    saveProfile,
    updateProfile,
    deleteProfile
  };
  
  await Course.findByPk(id).then((item) => {
    if (item != null) {
      item
        .update({
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone
        })
        .then(() => {
          res.sendStatus(204);
        });
    } else {
      res.sendStatus(404);
    }
  });
};

const deleteCourse = async (req, res) => {
  const id = req.params.id;
  await Course.findByPk(id).then((item) => {
    if (item != null) {
      item.destroy();
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  });
};

module.exports = {
  getAllCourses,
  getCourse,
  saveCourse,
  updateCourse,
  deleteCourse
};
