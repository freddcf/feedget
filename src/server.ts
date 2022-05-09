import express from "express";
import cors from "cors";
import { routes } from "./routes";

const app = express()

const port = process.env.PORT || 3333

// GET = Buscar informações
// POST = Cadastrar informações
// GET = Buscar informações
// GET = Atualizar informações de uma entidade
// PATCH = Atualizar uma informação única de uma entidade
// DELETE = Deletar uma informação

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(port, () => {
  console.log("HTTP server running!");
})

// sqlite
// Prisma