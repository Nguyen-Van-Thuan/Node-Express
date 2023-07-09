const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
// const morgan = require('morgan')

const methodOverride = require('method-override');
const app = express();
const port = 3000;

// Fix lỗi k hiển thị khi create courses
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sử dụng Express Override
app.use(methodOverride('_method'))


const route = require('./routes');
// Import db
const db = require('./config/db')

// Connect to DB
db.connect();

// Khai bao folder
app.use(express.static(path.join(__dirname, 'public')));

// HTTP Logger
// app.use(morgan('combined'))

// Teamplate engine
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
    }
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
  console.log(`App listening on port ${port}`);
});
