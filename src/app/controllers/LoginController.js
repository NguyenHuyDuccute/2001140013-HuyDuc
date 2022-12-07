class LoginController {
    // GET /login
    login(req,res){
        res.render('login');}
}

module.exports = new LoginController();