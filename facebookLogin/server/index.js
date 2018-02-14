const express = require('express');

const passport = require('passport');
const mongoose = require('mongoose');
const app = express();

const keys = require('./keys');
require('./models/User');
require('./services/passport');
require('./routes/authRoutes')(app);

mongoose.connect(keys.mongooseID);
// app.get('/',(req,res)=>{
//   res.send({hi:'facebook'});
// })

app.listen(5000);