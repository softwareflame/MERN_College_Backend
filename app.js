const express=require('express');
const cors=require('cors');
require('./msconn1.js');
const student=require('./sSchema.js');
const app = express();
app.use(cors());

app.use(express.json());

app.post("/insert",async (req,resp)=>{
    let data=new student(req.body);
    const result=await data.save();
    resp.send(result);
});

app.get("/view",async (req,resp)=>{
    let data=await student.find();
    resp.send(data);
});

app.put("/update/:_id",async (req,resp)=>{
    let data=await student.updateOne(
        req.params, { $set: req.body});
    resp.send(data);
});


app.delete("/delete/:_id",async (req,resp)=>{
    let data=await student.deleteOne(req.params);
    resp.send(data);
});

app.listen(5000)