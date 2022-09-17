var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// ====================


//  Test selects students
router.get("/testSelectStudents", function(req, res){
  
  const DBConn = require("../SQL_Code/mysql_conn.js");
  const SelectStudents = require("../SQL_Code/SelectStudents");

  var dbcon = new DBConn();
  var selectStudents = new SelectStudents(dbcon.MakeConnectionInstance());

  var result = selectStudents.GetAllStudents();

  console.log(result);

});


//  =======================

module.exports = router;
