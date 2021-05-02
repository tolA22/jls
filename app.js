require('dotenv').config()

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet')
// Set up the express app
const app = express();

const whiteList = ['http://localhost:3080','http://localhost:3000','https://jlstola.herokuapp.com/'];

const corsOptions = {
  origin: function(origin, callback){
    console.log("origin of request"+origin)
    if(whiteList.indexOf(origin) !== -1 || !origin){
      console.log("Origin acceptable");
      callback(null,true)
    }else{
      console.log("origin rejected");
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(helmet());

app.use(cors(corsOptions))


// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Require our routes into the application.
require('./routes')(app);

// Serve REACT APP
if (process.env.NODE_ENV !== "development") {
  app.use(express.static(path.join(__dirname,"frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

// app.get('*', (req, res) => res.status(200).send({
//   message: 'Welcome to the beginning of nothingness.',
// }));

module.exports = app;