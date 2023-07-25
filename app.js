const express = require('express');
const upload = require('express-fileupload');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const dotenv = require('dotenv');


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

const PORT = process.env.NODE_PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server start in ${process.env.NODE_ENV} on port ${PORT}`);
});
