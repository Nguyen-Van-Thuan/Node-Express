const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
// const morgan = require('morgan')
const app = express();
const port = 3000;

const route = require('./routes');

// Khai bao folder
app.use(express.static(path.join(__dirname, 'public')));

// HTTP Logger
// app.use(morgan('combined'))

// Teamplate engine
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views')); //Set Views

// Routing
route(app);

// app.get('/', (req, res) => {
//   res.render('home');
// })

// app.get('/news', (req, res) => {
//   res.render('news');
// })

// app.get('/search', (req, res) => {
//   console.log(req.query.q)
//   res.render('search');
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
