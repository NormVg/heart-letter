import { varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";


export const letterForm = pgTable("letter-form",{
  id:varchar("id").primaryKey().notNull(),
  from:varchar("from").notNull(),
  yours:varchar("yours").notNull(),
  letter:varchar("letter").notNull(),
  date:varchar('date').notNull()
})
