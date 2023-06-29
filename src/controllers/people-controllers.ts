import { Request, Response } from "express";
import { countPeopleDB } from "repositories/people-repository";

export async function randomPeople(req: Request, res: Response) {
    try{

        const count = await countPeopleDB()

        res.send(count)

    }catch(err){
        res.status(500).send(err.message)
    }
}