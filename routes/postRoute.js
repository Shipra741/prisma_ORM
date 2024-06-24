const express=require("express")
const router=express.Router()
const {updatePost,createPost,getPost,deletePost,getAllPosts}=require("../controller/postController")

router.post("/createPost",createPost)
router.put("/updatePost/:id",updatePost)
router.get("/getPost/:id",getPost)
router.delete("/deletePost/:id",deletePost)
router.get("/getAllPosts",getAllPosts)

module.exports=router