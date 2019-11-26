const express = require('express');
const routes = express.Router();

/*
let db;

const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://cruddbmongouser:alfabravo@ds161913.mlab.com:61913/crudmongodb';
MongoClient.connect(url, function (err, client) {
  if (err) throw err

  db = client.db('crudmongodb')
})*/


routes.get('/', async (req, res,) => {

  
/*
  await db.collection('notes').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
    const title = result[0].title;
    const body = result[0].text;
    res.render('index', { title: title, body: body });
  })
*/
});

// Product routes
routes.get('/p/:hash', (req, res) => {});

routes.get('/c/:id', (req, res) => {});

// Catalog routes
routes.get('/c/:hash', (req, res) => {});

// Pages routes
routes.get('/:path', (req, res, next) => {

   /* const path = { 'path': req.params.path };
        //console.log(details);
        db.collection('pages').findOne(path, (err, result) => {


            if (err) { res.send({ 'error': 'An error has eccurred' }); }
            
            if (result) {
              console.log(result);
              res.render('index', { title: result.page_name, body: result.content });
            } else {
                res.render('error', { title: 'An error has eccurred', body: 'An error has eccurred' });
                next();
            }

        });
*/

});




module.exports = routes;
