const Course = require('../models/Course')
const {mutipleMongooseToObject} = require('../../util/mongoose')

class SiteController {
  // [GET] /
  async index(req, res, next) {

    // try {
    //   // Tìm tài liệu từ cùng một bộ sưu tập
    //   const data = await Course.find({});
    //   res.json(data);
    // } catch (err) {
    //   res.status(400).json({ error: err });
    // }

    Course.find({})
      .then(courses => {
        res.render('home', { 
          courses: mutipleMongooseToObject(courses)
         })
      })
      .catch(next);

    // res.render('home');
  }

  // [GET] /search
  seach(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
