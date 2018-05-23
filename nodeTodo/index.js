const express = require('express');
const apiRoute = require('./routes/api/index.js');
const bodyParser = require('body-parser');
const path = require('path'); 
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use('/api', apiRoute);

if(process.env.NODE_ENV ==='production'){
    app.use(express.static('react_todo/build'));

    const path = require('path');
    app.get('*', function(req, res){
        res.sendFile(path.resolve(__dirname, 'react_todo', 'build', 'index.html'))
    })  
}

const PORT = process.env.PORT || 4000;
app.listen(PORT);