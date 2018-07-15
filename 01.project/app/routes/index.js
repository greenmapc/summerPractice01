const searchRoutes = require('./searchRoutes');
const registrationRoutes = require('./registrationTypeRoutes/registrationRoutes');
const athleteRegRoutes = require('./registrationTypeRoutes/athleteRegRoutes');
const coachRegRoutes = require('./registrationTypeRoutes/coachRegRoutes');


module.exports = function(app, fs) {
    searchRoutes(app, fs);
    registrationRoutes(app, fs);
    athleteRegRoutes(app, fs);
    coachRegRoutes(app, fs);
};