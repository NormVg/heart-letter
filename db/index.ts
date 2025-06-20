import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import * as dbSchema from "~/db/schema"

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});


const db = drizzle({ client: pool,schema:{...dbSchema} });

export {db}
