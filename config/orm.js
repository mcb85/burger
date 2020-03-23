var connection = require('./config/connection.js');


var orm = {
selectAll: function() {
    var query = "SELECT * FROM";
    connection.query(query, function(err, result) {
        if (err) throw err;
        console.log(result);
    })
}

insertOne: function() {}

updateOne: function() {}



}


module.exports = orm;