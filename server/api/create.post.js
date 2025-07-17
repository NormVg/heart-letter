import { db } from "~/db/index";
import { letterForm } from "~/db/schema";

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event);

    const { from, yours, letter, current_data } = data;



    const value = {
      id: `uid_${crypto.randomUUID()}_${current_data}`,
      from: from,
      yours: yours,
      letter: letter,
      date: current_data
    };

    await db.insert(letterForm).values(value)


    return { statusCode: 200, data: data, status: "good" };
  } catch (error) {
    return { statusCode: 500, data: {}, status: error };
  }
});
