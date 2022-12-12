// represents the jpa layer to fetch data from db
const Users = require("../model/users");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const register = async (req, res) => {
    try {
          const {password, username} = req.body;       
          const hashedPassword = await bcrypt.hash(password, 10);
            await Users.create({
            password: hashedPassword,
            username,
          });
          const accessToken = jwt.sign({
            username: username,
        }, 'wpr');
        return res.json({
          success: true,
          accessToken: accessToken,
          message: 'create successfully!',
      });
      
    } catch (errors) {
      console.log(errors,'errors')
        return res.status(404).json(errors);
    }
};

const login = async (req, res) => {
    const {username, password} = req.body;
    const findUser = await Users.findOne({ where: { username: username } });
    if(!findUser) return res.json('Wrong password or username!');
    const validPassword = await bcrypt.compare(password, findUser.password);
    if(!validPassword)   return res.json('Wrong password or username!');
    const accessToken = jwt.sign({
      username: findUser.username,
  },'wpr');
  return res.json({
    success: true,
    accessToken: accessToken,
    message: 'login successfully!',
    data: findUser,
});
};

const getAllUsers = async (req, res) => {
  try {
  const users = await Users.findAndCountAll();
  res.send({
    context: users.rows,
    total: users.count
  });
} catch (err) {
  console.log(err);
}
};
module.exports = {
  register,
  login,
  getAllUsers,
};
