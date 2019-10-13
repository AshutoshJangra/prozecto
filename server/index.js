const express = require('express') ;
const bodyParser = require('body-parser');
const projectsRoutes = require('./routes/projects'),
      usersRoutes = require('./routes/users'),
      blogsRoutes = require('./routes/blogs');


const mongoose = require('mongoose') ;


const app = express() ;
app.use(bodyParser.json());

mongoose.connect('mongodb://ashutosh:Deception1@ds111765.mlab.com:11765/boatel' ,{ useNewUrlParser: true } )

app.use('/api/v1/projects' , projectsRoutes);
app.use('/api/v1/user' , usersRoutes);
app.use('/api/v1/blogs', blogsRoutes);

const PORT = process.env.PORT || '3001' ;


app.listen(PORT , () => {
    console.log(`app is running on ${PORT}`);
})