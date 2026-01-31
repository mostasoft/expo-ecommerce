import express from "express"

const app = express()


app.get("/api/health", (req, res)=>{
  res.status(200).send("server is healthy")
})

app.listen(3000, ()=>console.log("server is running on 3000"))