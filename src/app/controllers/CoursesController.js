class CoursesController {
    // GET /course
    index(req,res){
        res.render('course');
    }
    show(req,res){
        res.send(200);
}
}

module.exports = new CoursesController();
