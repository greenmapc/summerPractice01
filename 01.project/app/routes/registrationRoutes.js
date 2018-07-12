module.exports = function(app, fs) {
    app.get('/registration', (req, res) => {
        var url = require('url');
        var url_parts = url.parse(req.url, true);
        var query = url_parts.query;
        fs.appendFile('data/registrationData.txt', query['handle'] + ' ' + query['password'] + ' ' + query['card'] + ' '
            + query['email'] + '\n',
            function (err) {
                if (err) throw err;
                console.log('Saved!');
                res.send();
            });
    });
};