	function ConnectDatabase (){
    var mysql = require('mysql');
 
    this.connection = mysql.createConnection({
        host     : 'localhost',
  		user     : 'root',
  		password : 'root',
  		database : 'userlogin'
    });
};
module.exports = ConnectDatabase;