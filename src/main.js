const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors');

// Routes
const routes = require('./routes/index');
const dashboardRouter = require('./routes/dashboard');
const apiRoutes = require('./routes/api/index');

// Express configs
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use('/static', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

console.log(__dirname);

// Call routes
app.use('/dashboard', dashboardRouter);
//app.use(routes);

// Api Router
//app.use('/api/', apiRoutes);

// app.use('*', (req, res) => {
//   res.status(404).send({ error: '404: Page not found' });
// });

module.exports = app;
