import express from "express";
import cors from "cors"
import swaggerUi from "swagger-ui-express"
import swaggerSpecification from "./swagger";

const app = express()
const simplePost: Object[] = []

app.use(cors())
app.use(express.json())
app.use("/api-docs",swaggerUi.serve, swaggerUi.setup(swaggerSpecification))

/**
 * @openapi
 * /api:
 *  get:
 *    summary: Informa el estado de la comunicación
 *    tags:
 *      - Estado
 *    responses:
 *      200:
 *        description: Ok
 *      500:
 *        description: Error interno del servidor
 */
app.get("/api",(req, res)=>res.send({"connection": "ok"}))

app.post("/api/solicitud-post.simple",(req, res)=>{
  const data: Object= req.body
  console.log(data)
  simplePost.push(data)

  res.send({"solicitud-post.simple": "ok", simplePost})
})

app.listen(5000, ()=>console.log('Servidor escuchando en el puerto 5000'))