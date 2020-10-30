
const mysql = require('mysql');
const colors = require('colors');

const db_config = {
  host: 'dn host ',
  user: 'username',
  password: 'pw',
  database: 'db',
  connectTimeout: 0
};




let connection ;

function handleDisconnect() {
 // console.log('handing disconnect' );
  connection = mysql.createConnection(db_config); 
                                                  

  connection.connect(function(err) {              
    if(err) {                                    
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); 
    } 
    else {
      console.log('********* Connection succesfully made  **************'.green);
    }                                  
  });                                     
                                          
  connection.on('error', function(err) { 
   // console.log('db error', err);
    if(err.code == 'PROTOCOL_CONNECTION_LOST') { 
      console.debug(('ERROR ' + err.code).yellow);
      setTimeout(handleDisconnect, 2000);
      console.log('reconnecting..' );                        
    } else {                                      
      //throw err;            
      console.error(err);                       
    }
  });
}

const getConnection = function getConnection() {
    return connection;
}


handleDisconnect();

module.exports = {getConnection};