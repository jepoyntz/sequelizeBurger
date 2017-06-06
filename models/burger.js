// require an orm of some kind
// you COULD make this yourself
// or you could just use sequelize** <-- do this


// this represents an object that could be injected into a SQL table
// table: burger_id, burger_description, burger_doneness
// burger = { id: 0, description: '', doneness: 'well' }

// module.exports = burgerModel;

var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        //select all data
        orm.all("burgers", function(res){
            cb(res);
        });
    },

    create: function(cols,vals, cb){
        //insert a new burger
        var values = vals.toString();
        orm.create("burgers", cols, vals, function(res){
            cb(res);
        });
    },

    update: function(objColVals, condition, cb){
        //update existing burger
        orm.update("burgers", objColVals, condition, function(res){
            cb(res);
        });
    }
};


module.exports = burger;