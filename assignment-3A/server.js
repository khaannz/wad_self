const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static("express"));
// default URL for website
app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/express/index.html'));
    //__dirname : It will resolve to your project folder.
  });
const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.debug('Server listening on port ' + port);


/* Or use this code
const express = require('express');
const app = express();
const port = 3000;

//to make pages .html .txt .jpeg .mp3 .mp4  static content 
app.use(express.static("express"));

app.listen(port, () => {
    console.log(`app started on port ${port}`);
})  */