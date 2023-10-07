// import the module
const Todo = require("../models/Todo");

// define router handeler

exports.getTodo = async(req,res) =>{
    try{
        // fetch all todo item from database
        const todos = await Todo.find({});

        // response
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire Todo Data is Fetched",
        });
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error: err.message,
            message:'server Error',
        })

    }
}

exports.getTodoById = async(req,res)=>{
    try{
        // extract Todo Item basis on id
        const id = req.params.id;
        const todo = await Todo.findById({_id:id})

        // data for given id not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No Data Found eith given id"
            })
        }
        // data for given id Found
        res.status(200).json({
            success:false,
            data:todo,
            message:`Todo ${id} data successfully fetched`,
        })
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error: err.message,
            message:'server Error',
        })
    }
}