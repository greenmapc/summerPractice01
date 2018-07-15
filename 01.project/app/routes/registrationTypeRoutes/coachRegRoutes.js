bodyParser = require('body-parser').json();

module.exports = function (app, fs) {
    app.post('/coachRegistration', bodyParser, function (request, response) {
        var body = request.body;

        if(!fullCheck(body)) {
            return response.send("All fields must be full");
        }

        fs.appendFile('data/coachData.txt',   body.name + ' ' +
                                                body.surname + ' ' +
                                                body.age + ' ' + '\n',
            function (err) {
                if (err) throw err;
                console.log('Saved concrete data!');
                response.redirect("/registration/OKRegistration.html");
            });
        fs.appendFile('data/data.txt',   body.name + ' ' +
            body.surname + ' ' +
            body.age + '\n',
            function (err) {
                if (err) throw err;
                console.log('Saved concrete data!');
            });
    });
    app.get('/coachRegistration', function (request, response) {
        fs.readFile('data/coachData.txt', 'utf-8', function(err, data) {
            var lines = data.split('\n');

            var result = [];
            for (var i = 0; i < lines.length; i++) {
                result.push({'handle' : lines[i].split(' ')[0],
                    'contacts': lines[i].split(' ')[1], 'name': lines[i].split(' ')[2],
                    'surname': lines[i].split(' ')[3], 'age': lines[i].split(' ')[4]});

            }
            response.setHeader('Content-Type', 'application/json');
            response.send(JSON.stringify(result));
        });
    });

    function fullCheck(body) {
        if(body.name == "" || body.surname == "" || body.age == "") {
            return false;
        } else {
            return true;
        }
    };
};