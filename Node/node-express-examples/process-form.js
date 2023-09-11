const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));  // Docs say use but example OK wout it
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

app.post('/process_post', urlencodedParser, function (req, res) {

   // Prepare output in JSON format
   response = {
      first_name:req.body.first_name,
      last_name:req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

const server = app.listen(8081, function () {
    const host = server.address().address
    const port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)

})

