var express = require('express');
var router = express.Router();
const Todos = require('../models/ToDoSchema.js');

// Default landing page
router.get('/', function (req, res, next) {
    let results = "Todo Home Page";
    res.send(results)
});

// This function returns all the todos currently in the database
router.get('/todo', function (req, res, next) {
    // let results = "List all Todos";
    Todos.find({}, function (err, result) {
        if (err)
            res.send(err);
        else
            res.json(result);
    })
});

// This function deletes the record specified by the id passed in
router.delete('/todo/:id', function (req, res, next) {
    Todos.findOneAndDelete(req.params.id, function (err) {
        if (err) {
            throw err; // If we get an error then bail
        }
        // Use Express to send a simple SUCCESS message
        res.json({result: 'OK'});
    })
});

// Create a newtodo item
router.post('/todo', function (req, res, next) {
    Todos.create(req.body, function (err, result) {
        if (err) {
            throw(err);
        } else {
            // res.json(result);
            res.json({result: 'OK'});
        }
    })
});

// This function updates the record specified by the id passed in
router.put('/todo/:id', function (req, res, next) {
    Todos.findOneAndUpdate({_id: req.params.id}, {
        todo_description: req.body.todo_description,
        todo_is_done: req.body.todo_is_done,
        todo_responsible: req.body.todo_responsible
    }, function (err, result) {
        if (err) {
             throw(err);
        } else {
            // res.json(result);
            res.json({result: 'OK'});
        }
    });

    // Todos.findById({_id: req.params.id}, function (err, result) {
    //     if (err) {
    //         throw(err);
    //     } else {
    //         console.log(result);
    //         res.json(result);
    //     }
    // });
});

// This function creates us some test data to work with
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

        res.json(results);
    })

});

// Retrieves a single item
router.get('/todo/:id', function (req, res, next) {
    let results = "GET Todos";
    Todos.findById({_id: req.params.id}, function (err, result) { //Use the findID method on the data model to search DB
        if (err) {
            throw(err);
        } else {
            console.log(result);
            res.json(result);
        }
    });
});
module.exports = router;