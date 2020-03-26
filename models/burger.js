var orm = require("../config/orm.js");

var burger = {
selectAll: function() {
    orm.selectAll("burger", function(res){
        console.log(res);
    });
},

insertOne: function (cols, vals, cb) {
    orm.insertOne("burger", cols, vals, function(res) {
        cb(res);
    });
 },
 
updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burger", objColVals, condition, function(res){
        cb(res);
    });
}
};


module.exports = burger;