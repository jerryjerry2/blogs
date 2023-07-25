const express = require('express');
const upload = require('express-fileupload');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
require('dotenv').config()


const app = express();

//register view engine
app.set('view engine', 'ejs');

//register static
app.use(express.static('public')); //use for static file (css, js, img)
app.use(express.urlencoded({extended: true})); //convert input from frontend to object in backend
app.use(upload()); // for upload file

//User
app.use(userRoutes);

//Admin
app.use(adminRoutes);


console.log(process.env.PORT)


app.listen(process.env.PORT, () => {
    console.log(`Server Running on port ${process.env.PORT}`);
});
