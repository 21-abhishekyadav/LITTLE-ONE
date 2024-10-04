const connectToMongo=require('./db');
const express = require('express');
const Url = require("./data");
var cors = require('cors')
const shortid = require('shortid')


connectToMongo();

const app = express();
const port = 4000
app.use(cors());
app.use(express.json());;

app.post("/",(req,res)=>{
   
    async function saveurl() {

// generate a short id (hash for url)
const hash = shortid.generate()

// save the url and hash in db in given format
        const url = new Url({
            name : req.body.name,
            hash : hash,
            
        });
        try {
            const Url = await url.save();
            const out = "/littleone/"+url.hash;
            const data = ({ url: out});
            res.json({ data });
        }
        catch (err) {
            res.status(500).json({error: "Internal server error occured"});
        }
    }
    saveurl();


});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })