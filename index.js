const userID = process.env.INPUT_USER_ID
const title = process.env.INPUT_TITLE
const content = process.env.INPUT_CONTENT
const long = process.env.INPUT_LONG
const endpoint = process.env.INPUT_API_ENDPOINT

if (endpoint.startsWith("http://")) {
    throw new Error("Currently only secure server is allowed.")
}

var https = require('follow-redirects').https;
var fs = require('fs');

var qs = require('querystring');

var options = {
    'method': 'POST',
    'hostname': endpoint,
    'path': `/${userID}/send`,
    'headers': {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    'maxRedirects': 20
};

var req = https.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });

    res.on("error", function (error) {
        console.error(error);
    });
});

var postData = qs.stringify({
    'title': title,
    'content': content,
    'long': long
});

req.write(postData);

req.end();
