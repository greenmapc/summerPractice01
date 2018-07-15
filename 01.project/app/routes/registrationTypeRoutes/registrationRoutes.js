bodyParser = require('body-parser').json();

module.exports = function (app, fs) {
    app.post('/registration', bodyParser, function (request, response) {
        var body = request.body;

        if(!duplicateCheck(body)) {
            return response.send("A user with this handle is already registered");
        }
        if(!fullCheck(body)) {
            return response.send("All fields must be full");
        }

        fs.appendFile('data/loginData.txt', body.handle + ' ' + body.password + '\n',
            function (err) {
                if (err) throw err;
                console.log('Saved!');
                if(body.type == "athlete") {
                    response.redirect("/registration/AthleteRegistration.html");
                } else {
                    response.redirect("/registration/CoachRegistration.html");
                }
            });

        var data;
        if(body.type == "athlete") {
            data = 'data/athleteData.txt';
        } else {
            data = 'data/coachData.txt';
        }
        fs.appendFile(data, body.handle + ' ' + body.email + ' ', function (err) {
                if (err) throw err;
                console.log('Saved reg handle data!');
            });

        fs.appendFile('data/data.txt', body.handle + ' ' + body.email + ' ' + body.card + ' ', function (err) {
            if (err) throw err;
            console.log('Saved reg handle data!');
        });

    });

    function fullCheck(body) {
        if(body.handle == "" || body.email == "" || body.card == "" || body.password == "" || body.type == "") {
            return false;
        } else {
            return true;
        }
    };

    function duplicateCheck(body) {
        var currentHandle = body.handle;
        var lines = fs.readFileSync('data/loginData.txt', 'utf-8').split("\n");
        for(var i = 0; i < lines.length; i ++) {
            if(currentHandle == lines[i].split(' ')[0]) {
                return false;
            }
        }
        return true;
    };
};


