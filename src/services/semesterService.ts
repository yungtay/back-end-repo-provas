import { getRepository } from "typeorm";
import Semester from "../entities/Semesters";

export async function getSemesters() {
    try {
        const semesters = await getRepository(Semester).find();
        return semesters
    } catch (e) {
        console.log(e)
    }
}