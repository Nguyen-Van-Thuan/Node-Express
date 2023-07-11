const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {
  // [GET] /me/stored/coures
  storedCoures(req, res, next) {
    Promise.all([Course.find({}), Course.countDocuments()])
      .then(([courses, deletedCount]) =>
        res.render('me/stored-courses', {
          deletedCount,
          courses: mutipleMongooseToObject(courses),
        }),
      )
      .catch(next);

    //   Course.countDocumentsDeleted()
    //     .then((deletedCount) => {
    //       console.log(deletedCount, 'deletedCount')
    //     })
    //     .catch(() => { });

    //   Course.find({})
    //     .then(courses => res.render('me/stored-courses', {
    //       courses: mutipleMongooseToObject(courses),
    //     }))
    //     .catch(next);
  }

  // [GET] /me/trash/coures
  trashCoures(req, res, next) {
    Course.findDeleted({})
      .then((courses) => {
        // Loc ra danh sach ban ghi co truong delete
        const filteredCourses = courses.filter((course) => course.deleted);
s.filter(course => course.deleted);

        // Render danh sách filteredCourses
        res.render('me/trash-courses', {
          courses: mutipleMongooseToObject(filteredCourses),
        });
      })
      .catch(next);
  }
}

module.exports = new MeController();
