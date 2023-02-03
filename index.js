const express = require('express');
const cors = require('cors');

require('dotenv').config()
const port = process.env.PORT || 5000
const app = express()

// MiddleWare => 
app.use(express.json())
app.use(cors())

async function run(){
    try{



    }
    finally{
        
    }
}
run().catch(err=>console.log(err))


app.get('/',async(req,res) =>{
    res.send('Last Assignment Portal is Running')

})

app.listen(port,console.log(`Last Assignment is running on the port ${port}`))

