
//  Creates an instance of the database connection

//  further reading
//  for authentication error
// https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server

class DBConn {

    MakeConnectionInstance(){

        const mysql = require('mysql');

        var con = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'letmein',
            database: 'dbHogwarts'
        });

        return con;

    }

}


/*
connection.connect()

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()
*/

module.exports = DBConn;