const express=require("express")
const app=express();
require("dotenv").config()
const port=process.env.PORT|| 3000;
app.use(express.json())
const userRouter=require("./routes/userRoute")
const postRouter=require("./routes/postRoute")
const commentRouter=require("./routes/commentRoute")

app.use("/user",userRouter)
app.use("/post",postRouter)
app.use("/comment",commentRouter)

app.listen(port,()=>{
    console.log("server is running")
})