(function(controllers) {

    var viewController = require("./viewController");

    controllers.init = function(app) {

        viewController.init(app);
        
    }

})(module.exports)