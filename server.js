//  OpenShift sample Node application
var express = require('express'),
    http = require('http'),
    fs = require('fs');

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    var html = fs.readFileSync('./views/index.html', 'utf8');
    var message = 'Hello world...';
    html = html.replace('{Message}', message);
    res.end(html);

}).listen(port, ip);
