
//  This class selects all students.

class SelectStudents {

    constructor(dbconn){
        
        this.db = dbconn;

    }

    //  Returns all students.
    GetAllStudents(){

        //  Student list
        var studentList = [];
        
        let sqlquery = "SELECT * FROM tblStudent";

        //  Open the connection;
        this.db.connect();

        //  Perform the query
        this.db.query(sqlquery, (err, rows, fields) => {
            
            studentList.rows[0];

        });

        //  CLose the connection
        this.db.end();

        //  Return the student lists.
        return studentList;

    }

}

module.exports = SelectStudents;