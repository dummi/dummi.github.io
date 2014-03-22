var connect = require('connect');
connect.createServer(
    connect.static("../fullPage.js")
).listen(8080);