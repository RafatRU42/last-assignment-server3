const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');


require('dotenv').config()
const port = process.env.PORT || 5000
const app = express();

// MiddleWare => 
app.use(express.json())
app.use(cors())





const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.lfwjozb.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



async function run(){
    
    try{

        const productCollection = client.db('mobile-resale-market').collection('addProduct')
        const newProductCollection = client.db('mobile-resale-market').collection('addAProduct')



        app.post('/addProduct',async(req,res)=>{
            const product = req.body;
            const result = await newProductCollection.insertOne(product);
            res.send(result)
        })


        app.get('/myProducts',async(req,res)=>{
            const email = req.query.email;
            const query = {email:email};
            const result = await newProductCollection.find(query).toArray()
            res.send(result)
        })

        app.get('/Samsung',async(req,res) =>{
            const query = {category:"Samsung"}
            const result = await newProductCollection.find(query).toArray()
            res.send(result)
        })

        app.get('/VIVO',async(req,res) =>{
            const query = {category:"VIVO"}
            const result = await newProductCollection.find(query).toArray()
            res.send(result)
        })

        app.get('/iPhone',async(req,res) =>{
            const query = {category:"iPhone"}
            const result = await newProductCollection.find(query).toArray()
            res.send(result)
        })
     



    }
    finally{
        
    }
}
run().catch(err=>console.log(err))


app.get('/',async(req,res) =>{
    res.send('Last Assignment Portal is Running')

})

app.listen(port,() => console.log(`Last Assignment is running on the port ${port}`))

