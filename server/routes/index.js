var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/todo', function (req, res, next) {
    let results = "List all Todos";
    res.send(results)
});

router.get('/todo/:id', function (req, res, next) {
    let results = "GET Todos";
    res.send(results);
});

router.delete('/todo/:id', function (req, res, next) {
    let results = "Delete Todos";
    res.send(results);
});

router.post('/todo', function (req, res, next) {
    let results = "Create Todos";
    res.send(results);
});

router.put('/todo/:id', function (req, res, next) {
    let results = "Update Todos";
    res.send(results);
});

module.exports = router;