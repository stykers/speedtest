const express = require('express');
const Server = express();
const randomBytes = require('random-bytes');
const path = require('path');
const request = require('request');
const utils = require("./utils");

let cache = {
    size: 0,
    random: null
};

Server.get('/empty', function (req, res) {
    res.sendStatus(200);
});

Server.post('/empty', function (req, res) {
    res.set("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0");
    res.set("Cache-Control", "post-check=0, pre-check=0");
    res.set("Pragma", "no-cache");
    res.sendStatus(200);
});

Server.get('/garbage', function (req, res) {
    res.set("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0");
    res.set("Cache-Control", "post-check=0, pre-check=0");
    res.set("Pragma", "no-cache");
    res.sendStatus(200);
});