(function(controllers) {

    var viewController = require("./viewController");
    var workOrderApiController = require("./workOrderApiController");

    controllers.init = function(app) {

        viewController.init(workOrderApiController.init(app));
        
    }

})(module.exports)