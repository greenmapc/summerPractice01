const loginRoutes = require('./loginRoutes');
module.exports = function(app, fs) {
    loginRoutes(app, fs);
};

const registrationRoutes = require('./registrationRoutes');
module.exports = function(app, fs) {
    registrationRoutes(app, fs);
};

