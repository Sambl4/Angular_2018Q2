const express = require('express');
const router = express.Router();
const url = require('url');

let failedRequestsCount = 0;

module.exports = (server) => {

  router.get('/courses', (req, res, next) => {

    if (!req.header('Authorization')) {
      res.status(401).send('Unathorized!');
    }

    let coursesDB = server.db.getState().courses;

    if (req.query['textFragment'] === 'error' && failedRequestsCount <= 3) {
      failedRequestsCount++;
      res.status('500').send('Something went wrong');
    }

    // let courses = req.query['textFragment'] ? coursesDB.filter((course) => {
    //   return course.name.toUpperCase().indexOf(req.query['textFragment'].toUpperCase()) >= 0;
    // }) : coursesDB;

    // courses = courses.slice(0, req.query['count']);

    // res.json(courses);
    res.json(coursesDB);
  });

  // router.get('/courses', (req, res, next) => {
	// 	let url_parts = url.parse(req.originalUrl, true),
	// 		query = url_parts.query,
	// 		from = query.start || 0,
	// 		to = +query.start + +query.count,
	// 		sort = query.sort,
	// 		queryStr = query.query,
	// 		courses = server.db.getState().courses;
		
	// 		if (!!query.textFragment) {
	// 			courses = courses.filter((course) => course.name.concat(course.description).toUpperCase().indexOf(query.textFragment.toUpperCase()) >= 0);
	// 		}

	// 	if (courses.length < to || !to) {
	// 		to = courses.length;
	// 	}
	// 	courses = courses.slice(from, to);
		
	// 	res.json(courses);
	// });

  return router;
};
