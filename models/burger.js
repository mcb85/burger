var orm = require("../config/orm.js");

var burger = {
selectAll: function() {
    orm.selectAll("burgers", function(res){
        console.log(res);
    })
}
}




module.exports = burger;