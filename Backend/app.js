const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: 'Backend/config/config.env' });
}

// Using Middlewares
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());

// Importing Routes
const post = require('./routes/post');
const user = require('./routes/user');

// Using Routes
app.use('/api/v1', post);
app.use('/api/v1', user);

app.use(express.static(path.join(__dirname, '../Frontend/public')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../Frontend/public/index.html'));
});

module.exports = app;
