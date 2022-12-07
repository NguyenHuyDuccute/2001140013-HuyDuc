
const coursesRouter = require('./courses.route')
const loginRouter = require('./login.route')
function route(app){
    app.use('/login',loginRouter);
    app.use('/course', coursesRouter);
}
module.exports=route;