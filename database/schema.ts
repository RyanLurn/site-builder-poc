import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

const usersTable = sqliteTable("users_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  gender: text().notNull(),
  age: int().notNull(),
  email: text().notNull().unique()
});

const pagesTable = sqliteTable("pages_table", {
  id: int().primaryKey({ autoIncrement: true }),
  path: text().notNull().unique(),
  title: text().notNull(),
  description: text().notNull()
});

export { pagesTable, usersTable };
