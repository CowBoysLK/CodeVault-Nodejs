const express = require('express');

// const http = require('http');


var cors = require('cors');

const port = 3000;

const  app = express();
app.use(cors({credentials: true}));   

// let io = require('socket.io')(app);
// let io = require('socket.io').listen(server);


// io.on('connection' , socket => {
//   console.log('new connection' );

//   socket.on('join' , (data )=> { 
//     socket.join(data.room);
//     console.log(data.room ); 
//   })


// });

 
app.use(express.json());
 


app.get('/', function (req, res) {
  
  res.send('Hello World!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});