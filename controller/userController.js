const prisma=require("../DB/db.config")

const createUser=async(req,res)=>{
    const {name,email,password}=req.body
    const isexist=await prisma.user.findUnique({
        where:{
            email:email
        }
    })
    if(isexist){
        return res.status(400).json({message:"user already exists"})
    }
    const newUser=await prisma.user.create({
        data:{
            name,
            email,
            password
        }
    })
    return res.status(200).json({message:"user created",data:{newUser}})
}


const updateUser=async(req,res)=>{
    const userId=req.params.id
    const {name ,email,password}=req.body
    await prisma.user.update({
        where:{
            id:Number(userId)
        },
        data:{
            name,
            email,
            password
        }
    })
    return res.status(200).json({message:"user updated successfully"})
}

const getUser=async(req,res)=>{
    const userId=req.params.id
    const user=await prisma.user.findFirst({
        where:{
            id:Number(userId)
        }
    })
    if(!user){
        return res.status(400).json({message:"user not found"})
    }
    return res.status(200).json({message:"user found",data:{user}})
}

const deleteUser=async(req,res)=>{
    const userId=req.params.id
    const user=await prisma.user.delete({
        where:{
            id:Number(userId)
        }
    })
    if(!user){
        return res.status(400).json({message:"error occured"})
    }
    return res.status(200).json({message:"user deleted successfully"})
}

const getAllUsers=async(req,res)=>{
    const users=await prisma.user.findMany({
        // include:{
        //     post:true
        // }

        // include:{
        //     post:{
        //         select:{
        //             title:true,
        //             description:true
        //         }
        //     }
        // }
        
        // select:{
        //     _count:{
        //         select:{
        //             post:true
        //         }
        //     }
        // }---->returns the count of post
    })
    if(!users){
        return res.status(400).json({message:"user not found"})
    }
    return res.status(200).json({data:{users}})
}

module.exports={createUser,updateUser,getUser,deleteUser,getAllUsers}