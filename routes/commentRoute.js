const express=require("express")
const router=express.Router()
const {updateComment,createComment,getComment,deleteComment,getAllcomments}=require("../controller/commentController")

router.post("/createComment",createComment)
router.put("/updateComment/:id",updateComment)
router.get("/getComment/:id",getComment)
router.delete("/deleteComment/:id",deleteComment)
router.get("/getAllComments",getAllcomments)

module.exports=router
