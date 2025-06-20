import { db } from "~/db/index";
import { letterForm } from "~/db/schema";

export default defineEventHandler(async (event) => {
  try {




    const data = await db.select().from(letterForm)


    return { statusCode: 200, data: data, status: "good" };
  } catch (error) {
    return { statusCode: 500, data: {}, status: error };
  }
});
