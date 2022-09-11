import express from 'express'
import cors from 'cors'
const app = express()

app.use(cors());

app.use(express.json());
app.use(express.Router())

app.get('/',(req,res)=>{
	res.send("hello on index");
})

app.listen(5000,()=>{console.log("server runing on port 5000")});
