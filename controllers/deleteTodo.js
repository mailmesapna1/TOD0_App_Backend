// import the model

const Todo = require("../models/Todo");

// define router handeler

exports.deleteTodo = async(req,res) =>{
    try{
        const {id} = req.params;

        await Todo.findByIdAndDelete(id);

        res.json({
            success: true,
            message:"Todo DELETD",
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