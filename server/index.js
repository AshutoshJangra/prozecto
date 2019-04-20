const express = require('express') ;
const bodyParser = require('body-parser');
const problemsRoutes = require('./routes/problems'),
      usersRoutes = require('./routes/users') ;


const mongoose = require('mongoose') ;


const app = express() ;
app.use(bodyParser.json());

mongoose.connect('mongodb://ashutosh:Deception1@ds111765.mlab.com:11765/boatel' ,{ useNewUrlParser: true } )

app.use('/api/v1/' , problemsRoutes);
app.use('/api/v1/user' , usersRoutes);

app.listen('3001' , () => {
    console.log("app is running on 3001")
})