import express from "express";
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/api",(req, res)=>res.send({"connection": "ok"}))

app.listen(5000, ()=>console.log('Servidor escuchando en el puerto 5000'))