//importing
const express = require("express");
const morgan = require("morgan");

//initializing
const app = new express();
app.use(morgan('dev'));

app.use(express.json());
//in memory storage for task
let tasks=[];
// route to get all tasks
app.get('/',(req,res)=>{
    res.json(tasks);
})
//route to create a new task
app.post('/tasks',(req,res)=>{
    const task=req.body 
    tasks.push(task);
    res.send({message:"Task added",tasks})
})
//to get a task by id
app.get('/tasks/:id',(req,res)=>{
    const id=req.params.id;
    const task = tasks.find(task=>task.id===id)
    if(!task){
        res.send("Task not found");
    }else{
        res.json(task)
    }
});


//routes

app.listen(3005,(req,res)=>{
    console.log("port is up")
})
//update
app.put('/tasks/:id',(req,res)=>{
    const id =req.params.id;
    const updatedTask=req.body;
    const index = tasks.findIndex((task)=>task.id===id);
    if(index===-1){
        res.send("Task not found")
    }else{
        tasks.splice(index,1,updatedTask);
        //tasks[index]=updatedTask
        res.json(tasks)
    }
    res.send({message:"update",tasks});
})

//delete
app.delete('/tasks/:id',(req,res)=>{
    const id =req.params.id;
    
    const index = tasks.findIndex((task)=>task.id===id);
    if(index===-1){
        res.send("Task not found")
    }else{
        tasks.splice(index,1,);
        //tasks[index]=updatedTask
        res.json(tasks)
    }
   
})
