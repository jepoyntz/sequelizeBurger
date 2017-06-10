
var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'riley272',
        database: 'burgers_db'
    });
};

connection.connect(function (error) {
    if (error) {
        console.error('error connecting: ' + error.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;

/*
var source = {
    localhost: {
        port: 3000,
        host: 'localhost',
        user: 'root',
        password: 'riley272',
        database: 'burgers_db'
    },
    jawsDB: {
        port: 3000,
        host: 'l3855uft9zao23e2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'tdhmrn6me2l5230w',
        password: 'wryeypxggzz336q5',
        database: 'aemqtep6vfn04h7l'
    }
}

var selectedSource = source.jawsDB;

var sequelize = new Sequelize(selectedSource.database, selectedSource.user, selectedSource.password, {
    host: selectedSource.host,
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

module.exports = sequelize;  */