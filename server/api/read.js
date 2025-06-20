import { eq } from "drizzle-orm";
import { db } from "~/db";
import { letterForm } from "~/db/schema";

export default defineEventHandler(async (event) => {
  try {

    const body = getQuery(event)

    const {uid} = body

    const data = await db.select().from(letterForm).where(eq(letterForm.id,uid))


    return { statusCode: 200, data: data, status: "good" };
  } catch (error) {
    return { statusCode: 500, data: {}, status: error };
  }
});
