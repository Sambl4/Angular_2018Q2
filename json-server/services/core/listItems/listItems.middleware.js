const express = require('express');
const router = express.Router();
const url = require('url');

let failedRequestsCount = 0;

module.exports = (server) => {

  router.get('/coursesList', (req, res, next) => {

    if (!req.header('Authorization')) {
      res.status(401).send('Unathorized!');
    }

    let listItemsDB = server.db.getState().listItems;
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', listItemsDB)

    if (req.query['textFragment'] === 'error' && failedRequestsCount <= 3) {
      failedRequestsCount++;
      res.status('500').send('Something went wrong');
    }

    // let listItems = req.query['textFragment'] ? listItemsDB.filter((listItem) => {
    //   return listItem.name.toUpperCase().indexOf(req.query['textFragment'].toUpperCase()) >= 0;
    // }) : listItemsDB;

    // listItems = listItems.slice(0, req.query['count']);

    // res.json(listItems);
    res.json(listItemsDB);
  });

  return router;
};
