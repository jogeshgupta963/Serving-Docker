import express from 'express'
import cors from 'cors'
import 'dotenv/config'
const app = express()

app.use(cors());

app.use(express.json());
app.use(express.Router())

app.get('/',(req,res)=>{
	res.send(`${process.env.name} hello on index`);
})

app.listen(5000,()=>{console.log("server runing on port 5000")});
