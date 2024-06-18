import express from "express";
import cors from "cors"
import multer from "multer"
import fs from "node:fs"
import swaggerUi from "swagger-ui-express"
import swaggerSpecification from "./swagger";

const app = express()
const simplePost: Object[] = []

const upload = multer({dest: "images/"})

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

/**
 * @openapi
 * /api/solicitud-post.simple:
 *  post:
 *    tags:
 *      - Json
 *    summary: Agrega un nuevo usuario
 *    description: Agrega un nuevo usuario
 *    operationId: addUser
 *    requestBody:
 *      required: true
 *      description: Datos necesarios para crear un nuevo usuario
 *      content:
 *        'application/json':
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              favoriteNumber:
 *                type: integer
 *    responses:
 *      201:
 *        description: "{ simplePost: [{name: '', favoriteNumber: 0}] }"
 *      500:
 *        description: Error interno del servidor
 */
app.post("/api/solicitud-post.simple",(req, res)=>{
  const data: Object= req.body
  console.log(data)
  simplePost.push(data)

  res.send({simplePost})
})

app.post("/api/solicitud-post-file", upload.single("image"), (req,res) => {
  console.log('body: ', req.body)
  console.log('file: ', req.file)

  if(req.file){
    fs.renameSync(req.file.path, `./images/${req.file.originalname}`)
  }

  res.send({"solicitud-post-file": "ok"})
  res.status(201)
})

app.listen(5000, ()=>console.log('Servidor escuchando en el puerto 5000'))