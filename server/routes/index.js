var express = require('express');
var router = express.Router();
const Todos = require('../models/ToDoSchema.js');

router.get('/', function (req, res, next) {
    let results = "Todo Home Page";
    res.send(results)
});

router.get('/todo', function (req, res, next) {
    // let results = "List all Todos";
    Todos.find({}, function (err,result) {
        if (err)
            res.send(err);
        else
            res.send(result);
    })
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

router.get('/todo/seeddata', function (req, res, next) {
    const starterTodos = [
        {
            todo_responsible: 'bob',
            todo_description: 'Get new Students with better manners',
            todo_is_done: false

        },
        {
            todo_responsible: 'Kim',
            todo_description: 'Teach class',
            todo_is_done: true

        }
    ];

    Todos.create(starterTodos, function (err, results) {

        res.send(results);
    })

});

router.get('/todo/:id', function (req, res, next) {
    let results = "GET Todos";
    res.send(results);
});
module.exports = router;