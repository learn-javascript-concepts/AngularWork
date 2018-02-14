(function(apiController) {

    apiController.init = function(app) {

        var bodyParser = require('body-parser');  
        var express = require("express");

        var workOrderData = require("../appData/workOrderData");

        var router = express.Router();
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());

        router.get('/getworkorder/:workordernumber', function(req, res) {

            res.json(workOrderData.dataService.getWorkOrderByNumber(req.params.workordernumber));

        });

        router.get('/getdetailedworkorder/:workordernumber', function(req, res) {

            res.json(workOrderData.dataService.getDetailedWorkOrder(req.params.workordernumber));

        });

        router.get('/getallworkorders', function(req, res) {

            res.json(workOrderData.dataService.getAllWorkOrders());

        });

        app.use('/api', router);

        return app;
    }

})(module.exports);