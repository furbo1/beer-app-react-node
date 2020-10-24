var express = require('express');
var router = express.Router();

const userRouter = require('../user/user.router');
//import beerRouter

module.exports = (app) => {
    app.use("/user", userRouter);

    //add beerRoute

    app.get("/", function(req, res) {
        res.set('content-type', 'text/html');
        res.send('Great! Welcome to our');
    })
};