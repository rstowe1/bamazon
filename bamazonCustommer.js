// Required dependencies
var mysql = require('mysql');
var prompt = require('prompt');

// Establish database connection
var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "Bamazon"
});

var quant = 0;

// query the database
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM products", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});


// start the prompt
prompt.start();

prompt.get(['what items are you buying homie?',''], function (err, result) {
  var quant = '';
  console.log('heard that, its on its way!');
  console.log('id', + result.id);
  console.log(quant, + result.);

});