import { pgTable, uuid, text, timestamp, foreignKey, boolean } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"



export const users = pgTable("users", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	name: text("name").notNull(),
	created_at: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	updated_at: timestamp("updated_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	deleted_at: timestamp("deleted_at", { withTimezone: true, mode: 'string' }),
});

export const todos = pgTable("todos", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	task: text("task").notNull(),
	user_id: uuid("user_id").notNull().references(() => users.id, { onDelete: "cascade", onUpdate: "cascade" } ),
	created_at: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	updated_at: timestamp("updated_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	is_completed: boolean("is_completed").default(false).notNull(),
});