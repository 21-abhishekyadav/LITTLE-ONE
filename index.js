const connectToMongo=require('./db');
const express = require('express');
const Url = require("./data");
var cors = require('cors')


connectToMongo();

const app = express();
const port = 4000
app.use(cors());
app.use(express.json());;

app.post("/",(req,res)=>{
   
    async function saveurl() {

        //to create ans save hash of a pswd instead of plain text
        // const salt = await bcrypt.genSalt(10);
        // const secPass = await bcrypt.hash(req.body.password, salt);


        const url = new Url({
            name : req.body.name,
            
        });
        try {
            const Url = await url.save();
            const data = ({ url: { urlname: url.name } });
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