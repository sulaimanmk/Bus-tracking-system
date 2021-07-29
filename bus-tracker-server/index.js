const express= require('express');
const cors= require('cors');
const approuter= require('./routes/app-router')
const dbConnection= require('./config/db')
const app= express();
app.use(cors());
app.options('*',cors());
app.use(express.json());
dbConnection();
app.get('/',(req,res)=>{

    res.send('Hello World from brian')
});
app.use('/api/',approuter);
app.listen(8080,()=>{
    console.log('Running!');
}) 
