bodyParser = require('body-parser').json();

module.exports = function (app, fs) {
    app.post('/athleteRegistration', bodyParser, function (request, response) {
        var body = request.body;

        if(!fullCheck(body)) {
            return response.send("All fields must be full");
        }

        fs.appendFile('data/athleteData.txt',   body.name + ' ' +
                                                body.surname + ' ' +
                                                body.age + ' ' +
                                                body.group + ' ' +
                                                body.coach + ' ' +
                                                body.category + '\n',
            function (err) {
                if (err) throw err;
                console.log('Saved concrete data!');
                response.redirect("/registration/OKRegistration.html");
            });
        fs.appendFile('data/data.txt',   body.name + ' ' +
            body.surname + ' ' +
            body.age + ' ' +
            body.group + ' ' +
            body.coach + ' ' +
            body.category +'\n',
            function (err) {
                if (err) throw err;
                console.log('Saved concrete data!');
        });
    });
    app.get('/athleteRegistration', function (request, response) {
        fs.readFile('data/athleteData.txt', 'utf-8', function(err, data) {
            var lines = data.split('\n');

            var result = [];
            for (var i = 0; i < lines.length; i++) {
                result.push({'handle' : lines[i].split(' ')[0],
                    'name': lines[i].split(' ')[2], 'surname': lines[i].split(' ')[3],
                    'age': lines[i].split(' ')[4], 'group': lines[i].split(' ')[5],
                    'coach': lines[i].split(' ')[6], 'category': lines[i].split(' ')[7]});
            }
            response.setHeader('Content-Type', 'application/json');
            response.send(JSON.stringify(result));
        });
    });

    function fullCheck(body) {
        if(body.name == "" || body.surname == "" || body.age == "" || body.group == "" || body.coach == "" || category.coach == "") {
            return false;
        } else {
            return true;
        }
    };
};