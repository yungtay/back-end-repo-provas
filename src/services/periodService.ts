import { getRepository } from "typeorm";
import Period from "../entities/Periods";

export async function getPeriods() {
    try {
        const categories = await getRepository(Period).find();
        return categories;

    } catch (e) {
        console.log(e)
    }

}