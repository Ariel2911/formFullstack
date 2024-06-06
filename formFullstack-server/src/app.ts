import express from "express";
import cors from "cors"

const app = express()
const simplePost: Object[] = []

app.use(cors())
app.use(express.json())

app.get("/api",(req, res)=>res.send({"connection": "ok"}))

app.post("/api/solicitud-post.simple",(req, res)=>{
  const data: Object= req.body
  console.log(data)
  simplePost.push(data)

  res.send({"solicitud-post.simple": "ok", simplePost})
})

app.listen(5000, ()=>console.log('Servidor escuchando en el puerto 5000'))