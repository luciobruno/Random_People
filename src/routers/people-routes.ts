import { randomPeople } from "controllers/people-controllers";
import { Router } from "express";

const peopleRouter = Router();

peopleRouter.get("/person", randomPeople);

export default peopleRouter;