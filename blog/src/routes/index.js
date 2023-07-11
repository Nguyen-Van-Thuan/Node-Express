const newsRouter = require('./news');
const meRouter = require('./me');
const coursesRouter = require('./courses');
const siteRouter = require('./site');

function route(app) {
  /* Page HOME */
  // app.get('/', (req, res) => {
  //   res.render('home');
  // })

  /*  Page NEWS*/
  // app.get('/news', (req, res) => {
  //   res.render('news');
  // })

  /* Page Search */
  // app.get('/search', (req, res) => {
  //   console.log(req.query.q)
  //   res.render('search');
  // })

  app.use('/news', newsRouter);
  app.use('/me', meRouter);
  app.use('/courses', coursesRouter);

  app.use('/', siteRouter);
}

module.exports = route;
