const prisma=require("../DB/db.config")

const createPost=async(req,res)=>{
    const {user_id,title,description}=req.body
    const newPost=await prisma.post.create({
        data:{
            user_id:Number(user_id),
            title,
            description
        }
    })
    return res.status(200).json({message:"post created",data:{newPost}})
}


const updatePost=async(req,res)=>{
    const postId=req.params.id
    const {title ,description}=req.body
    await prisma.post.update({
        where:{
            id:Number(postId)
        },
        data:{
            title,
            description
        }
    })
    return res.status(200).json({message:"post updated successfully"})
}

const getPost=async(req,res)=>{
    const postId=req.params.id
    const post=await prisma.post.findFirst({
        where:{
            id:Number(postId)
        }
    })
    if(!post){
        return res.status(400).json({message:"post not found"})
    }
    return res.status(200).json({message:"post found",data:{post}})
}

const deletePost=async(req,res)=>{
    const postId=req.params.id
    const post=await prisma.post.delete({
        where:{
            id:Number(postId)
        }
    })
    if(!post){
        return res.status(400).json({message:"error occured"})
    }
    return res.status(200).json({message:"post deleted successfully"})
}

const getAllPosts=async(req,res)=>{
    const posts=await prisma.post.findMany({})
    if(!posts){
        return res.status(400).json({message:"post not found"})
    }
    return res.status(200).json({data:{posts}})
}

module.exports={createPost,updatePost,getPost,deletePost,getAllPosts}