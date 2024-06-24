const express=require("express")
const router=express.Router()
const {updateUser,createUser,getUser,deleteUser,getAllUsers}=require("../controller/userController")

router.post("/createUser",createUser)
router.put("/updateUser/:id",updateUser)
router.get("/getUser/:id",getUser)
router.delete("/deleteUser/:id",deleteUser)
router.get("/getAllUsers",getAllUsers)

module.exports=router