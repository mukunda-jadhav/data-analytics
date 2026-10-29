require('dotenv').config()
const app = require('./src/app.js')

app.get('/',(req,res)=>{
    res.send("hello")
})

app.listen(process.env.PORT , ()=>{
    console.log(`http://localhost:${process.env.PORT}`)
})