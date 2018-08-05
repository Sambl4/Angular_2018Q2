const express = require('express');
const router = express.Router();
const url = require('url');

let failedRequestsCount = 0;

module.exports = (server) => {

	router.get('/users', (req, res, next) => {

		if (!req.header('Authorization')) {
			res.status(401).send('Unathorized!');
		}

		let usersDB = server.db.getState().users;

		if (req.query['textFragment'] === 'error' && failedRequestsCount <= 3) {
			failedRequestsCount++;
			res.status('500').send('Something went wrong');
		}

		let users = req.query['textFragment'] ? usersDB.filter((user) => {
			return user.name.toUpperCase().indexOf(req.query['textFragment'].toUpperCase()) >= 0;
		}) : usersDB;

		users = users.slice(0, req.query['count']);

		res.json(users);
	});

	return router;
};
