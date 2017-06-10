
var path = require('path');
var model = require('../models/sequelize-burger.js');


module.exports = function(app) {

    app.post('/add', function(request, response) {

        if (request.body.burger_name) {
            model.create({ burger_name: request.body.burger_name })
                .then(function() {
                    response.redirect('/');
                });
        }
    });

    app.put('/eat', function(request, response) {
        model.update(

            {
                devoured: 1
            },

            {
                where: {
                    id: request.body.burgerId
                }
            }
        ).then(function() {
            response.redirect('/');
        })
    });
};



/*
var Sequelize = require('sequelize');
var model = require('../config/connection.js');

var sequelizeBurger = model.define('sequelizeBurger', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    burger_name: {
        type: Sequelize.STRING,
    },

    devoured: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
    },
    time: {
        type: Sequelize.DATE,
    },
});

sequelizeBurger.sync();

module.exports = sequelizeBurger; */