const express = require('express');
const routes = express.Router();

// Dashboard
routes.get('/', async (req, res) => {
  
  await db.collection('configs').find().toArray(function (err, result) {
    if (err) throw err;
    let body;
    db.collection('notes').find().toArray(async (err, boom) => {
      //console.log(result);
       body = await boom;

       res.render('dashboard/index', {title: 'Dashboard ' + result[0].store_name, body: body});
    });


    
  });

  
});
routes.get('/dashboard/products', (req, res) => {});
routes.get('/dashboard/product:id', (req, res) => {});
routes.get('/dashboard/categories', (req, res) => {});
routes.get('/dashboard/category/:id', (req, res) => {});
routes.get('/dashboard/configuration', (req, res) => {});
routes.get('/dashboard/pages', (req, res) => {});
routes.get('/dashboard/page/:id', (req, res) => {});

routes.get('/login', (req, res) => {
  res.render('dashboard/login', {title: 'Login'});
});
routes.get('/dashboard/register', (req, res) => {});
routes.get('/dashboard/forgot-password', (req, res) => {});

module.exports = routes;
