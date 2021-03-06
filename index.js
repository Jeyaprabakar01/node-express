const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyparser = require('body-parser');


const dishRouter = require('./routes/dishrouter');
const leadRouter = require('./routes/leadrouter');
const promoRouter = require('./routes/promorouter');




const hostname = 'localhost';
const port = 3000;


const app = express();
app.use(morgan('dev'));
app.use(bodyparser.json());

app.use('/dishes', dishRouter);
app.use('/leaders', leadRouter);
app.use('/promotions', promoRouter);




app.use(express.static(__dirname + '/public'));



app.use((req,res, next) => {
        
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});



const server = http.createServer(app);


server.listen(port, hostname, ()=>{

    console.log(`Server running at http://${hostname}:${port}`);

});