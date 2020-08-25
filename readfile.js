const express = require('express');
const fs = require("fs");
//const readable = getReadableStreamSomehow();
//const bodyParser = require('body-parser')
const app = express();
//const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use('/', express.static('dist'));


app.post('/todo.json', (req, res) => {
    req.pipe(fs.createWriteStream('dist/todo.json'))
        .once('finish', () => {
            res.writeHead(200);
            res.end();
        });
});


/*app.post('', urlencodedParser, (req, res) => {
    console.log(req.body)
    console.log(json)
    //fs.writeFile('./todo.json', '"id":1', (err)=>{
    //    if(err)console.log('err 1',err)
    //})
    
});*/

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listen on port ${port}...`));