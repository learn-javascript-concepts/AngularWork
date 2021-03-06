(function(loginApiController) {

    loginApiController.init = function(app) {

        var bodyParser = require('body-parser');  
        var express = require("express");

        var router = express.Router();
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());

        router.post('/authenticateuser', function(req, res) {

            var returnData = {
                isAuthenticated: true,
                userName: req.body.userName,
                authToken: "Data"
            }
            if(req.body.userName != "Mayank") {
                returnData.isAuthenticated = false;
            }
            res.send(returnData);

        });

        app.use('/api', router);

        return app;
    }

})(module.exports)