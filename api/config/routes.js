var express = require('express');
var router = express.Router();

const userRouter = require('../user/user.router');
//import employeeRouter

module.exports = (app) => {
    app.use("/user", userRouter);
    //add employeeRouter

    app.get("/", function(req, res) {
        res.set('content-type', 'text/html');
        res.send('Great! Welcome to our');
    })
};