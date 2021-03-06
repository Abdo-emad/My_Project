
const mysql = require('mysql');
const express = require('express');
const app = express();
app.use(express.json());
const bodyparser = require('body-parser');
// If any port is running will use that port else it will use port 3000.
const port = process.env.PORT || 3000;
const mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'test'    
});

mysqlConnection.connect((err)=>{
    if(!err){
        console.log('Database connected');
        app.get('/', (_req, res)  =>{
            
            res.send('DB is connected')
        })
    } else{
        console.log('Database connection failed. \n Error : ' + JSON.stringify(err, undefined, 2));
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
