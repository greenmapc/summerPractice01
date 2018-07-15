bodyParser = require('body-parser').json();
var handle;

module.exports = function(app, fs) {
    app.post('/info', bodyParser, (request, response) => {
        var body = request.body;

        handle = body.handle;
        fs.readFile('data/coachData.txt', 'utf-8', function(err, data) {
            var lines = data.split('\n');
            for (var i = 0; i < lines.length; i++) {
                if(lines[i].split(' ')[0] == handle) {
                    return response.redirect("/UserTemplate.html");
                }
            }
            return fs.readFile('data/athleteData.txt', 'utf-8', function(err, data) {
                var lines = data.split('\n');
                for (var i = 0; i < lines.length; i++) {
                    if(lines[i].split(' ')[0] == handle) {
                        return response.redirect("/UserTemplate.html");
                    }
                }
                response.send("The non-existent user");
            });
        });
    });

    app.get('/info', function (request, response) {
        fs.readFile('data/coachData.txt', 'utf-8', function(err, data) {
            var lines = data.split('\n');
            var result = [];

            for (var i = 0; i < lines.length; i++) {
                if(lines[i].split(' ')[0] == handle) {
                    result.push({'type': 'Coach', 'handle' : lines[i].split(' ')[0],
                        'email': lines[i].split(' ')[1], 'name': lines[i].split(' ')[2],
                        'surname': lines[i].split(' ')[3], 'age': lines[i].split(' ')[4]});
                    response.setHeader('Content-Type', 'application/json');
                    return response.send(JSON.stringify(result));
                }
            }
            return fs.readFile('data/athleteData.txt', 'utf-8', function(err, data) {
                    var lines = data.split('\n');
                    var result = [];

                    for (var i = 0; i < lines.length; i++) {
                        if(lines[i].split(' ')[0] == handle) {
                            result.push({'type': 'Athlete', 'handle' : lines[i].split(' ')[0],
                                'email': lines[i].split(' ')[1], 'name': lines[i].split(' ')[2],
                                'surname': lines[i].split(' ')[3], 'age': lines[i].split(' ')[4],
                                'group': lines[i].split(' ')[5], 'coach': lines[i].split(' ')[6],
                                'category': lines[i].split(' ')[7]});
                            response.setHeader('Content-Type', 'application/json');
                            return response.send(JSON.stringify(result));
                        }
                    }
                    return response.send("The non-existent user");
                });
        });
    });
};