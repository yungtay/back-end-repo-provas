import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import * as professorController from "./controllers/professorController"
import * as disciplineController from "./controllers/disciplineController"
import * as testController from "./controllers/testController"
import * as categoryController from "./controllers/categoryController"

const app = express();
app.use(cors());
app.use(express.json());


app.get("/professors", professorController.getProfessors);
app.get("/disciplines", disciplineController.getDisciplines);
app.get("/tests", testController.getTests);
app.get("/tests/professor/:id", testController.getProfessorTests);
app.get("/categories", categoryController.getCategories);

export async function init () {
  await connectDatabase();
}

export default app;
