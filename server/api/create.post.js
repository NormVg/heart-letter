import { db } from "~/db/index";
import { letterForm } from "~/db/schema";

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event);

    const { from, yours, letter, date } = data;

    // Format date to dd-mm-yyyy
    const formatDate = () => {
      const d = new Date();
      const day = String(d.getDate()).padStart(2, '0');
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const year = d.getFullYear();
      return `${day}-${month}-${year}`;
    };

    const current_data = formatDate()

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
