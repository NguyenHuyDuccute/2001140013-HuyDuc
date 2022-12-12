const express = require("express");
const app = express();
var path = require ('path');
const cors = require('cors');

app.use(express.static(path.join(__dirname, 'server/public')))


// // application

const courseRoutes = require("./routes/course.routes");
const courseUserRoutes = require("./routes/courseUser.routes");
const announcementRoutes = require("./routes/announcement.routes");
const userRoutes = require("./routes/user.routes");
const quizzRoutes = require("./routes/quiz.routes");
const {
  verifyToken,
} = require('./utils/jwtoken.js');

const corsOptions = {
  // origin: origin,
  methods: ['OPTIONS', 'GET', 'PUT', 'POST', 'DELETE'],
  allowedHeaders: [
      'Origin',
      'Content-Type',
      'Accept',
      'x-access-token',
      'x-auth-token',
      'x-xsrf-token',
      'authorization',
      'Access-Control-Allow-Origin',
      'Access-Control-Allow-Credentials',
  ],
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
const bodyParser = require('body-parser') 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// application routes
app.get("/", (req, resp) => resp.send("application is up and running"));

app.use("/api", verifyToken, courseRoutes.routes);
app.use("/api", verifyToken, courseRoutes.routes);
app.use("/api", verifyToken, announcementRoutes.routes);
app.use("/api", verifyToken, quizzRoutes.routes);
app.use("/api/my", verifyToken, courseUserRoutes.routes);
app.use("/", userRoutes.routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Service endpoint= http://localhost:${PORT}`);
});
