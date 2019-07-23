var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'gymbuddy_db',
  port: 8889
});
 
connection.connect(function(err){
    if (err) throw err; 
    console.log("Connected to mysql");
});
module.exports = connection;