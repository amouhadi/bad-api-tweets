var express = require('express');
var Client = require('node-rest-client').Client;

var router = express.Router();
var client = new Client();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
router.get('/:startDate/:endDate', function(req, res, next) {
    const startDate = req.params.startDate
    const endDate = req.params.endDate
    const URL = `https://badapi.iqvia.io/api/v1/Tweets?startDate=${startDate}&endDate=${endDate}`
    client.get(URL, function (data, response) {
        return res.send(data)
    });

})

module.exports = router;
