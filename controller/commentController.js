const prisma=require("../DB/db.config")

const createComment=async(req,res)=>{
    const {user_id,comment,post_id}=req.body
    const newComment=await prisma.comment.create({
        data:{
            user_id:Number(user_id),
            comment,
            post_id:Number(post_id)
        }
    })
    return res.status(200).json({message:"comment created",data:{newComment}})
}


const updateComment=async(req,res)=>{
    const commentId=req.params.id
    const {comment}=req.body
    await prisma.comment.update({
        where:{
            id:commentId
        },
        data:{
            comment
        }
    })
    return res.status(200).json({message:"comment updated successfully"})
}

const getComment=async(req,res)=>{
    const commentId=req.params.id
    const comment=await prisma.comment.findFirst({
        where:{
            id:commentId
        }
    })
    if(!comment){
        return res.status(400).json({message:"comment not found"})
    }
    return res.status(200).json({message:"comment found",data:{comment}})
}

const deleteComment=async(req,res)=>{
    const commentId=req.params.id
    const comment=await prisma.comment.delete({
        where:{
            id:commentId
        }
    })
    if(!comment){
        return res.status(400).json({message:"error occured"})
    }
    return res.status(200).json({message:"comment deleted successfully"})
}

const getAllcomments=async(req,res)=>{
    const comments=await prisma.comment.findMany({})
    if(!comments){
        return res.status(400).json({message:"comment not found"})
    }
    return res.status(200).json({data:{comments}})
}

module.exports={createComment,updateComment,getComment,deleteComment,getAllcomments}