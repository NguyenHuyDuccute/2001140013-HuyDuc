var path = require('path');
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const port = 3000

const route = require('./routes')
app.use(express.static(path.join(__dirname, 'public')))
//Template engine
app.engine('hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})