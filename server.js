require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


// const __dirname1 = path.resolve();
// if(process.env.NODE_ENV==='production'){
//     console.log('In production')
//     app.use(express.static(path.join(__dirname1,'admin/build')));
//     app.get('*',(req,res)=>{
//         res.sendFile(path.resolve(__dirname1,"admin","build","index.html"))
//     })
// }
// else{
//     app.get('/',(req,res)=>{
//         console.log('In development')
//         res.send('api running')
//     })
// }

app.get('/', (req, res) => {
    console.log('In development')
    res.send('api running')
})

app.use('/api', require('./route/authRouter'))
app.use('/api', require('./route/productRouter'))


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (err) throw err;
    console.log('Connected to mongodb :]')
})
 
var server_port = process.env.YOUR_PORT || process.env.PORT || 8000;

app.listen(server_port, (req, res) => {
    console.log("Server is running :]")
})