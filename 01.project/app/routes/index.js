const loginRoutes = require('./loginRoutes');
var login = module.exports = function(app, fs) {
    loginRoutes(app, fs);
};

// const registrationRoutes = require('./registrationRoutes');
// const registration = module.exports = function(app, fs) {
//     registrationRoutes(app, fs);
// };
//
// const infoRoutes = require('./infoRoutes');
// module.exports = function(app, fs) {
//     infoRoutes(app, fs);
// };

