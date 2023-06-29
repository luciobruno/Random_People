import express, { Request, Response, json } from "express"
import peopleRouter from "./routers/people-routes";

const app = express();
app.use(json())

app.get("/health", (req: Request, res: Response)=>{
    res.sendStatus(200)
})

app.use(peopleRouter)

const port: number = parseInt(process.env.PORT) || 5000

app.listen(port, () => console.log(`Server rodando na porta ${port}`))