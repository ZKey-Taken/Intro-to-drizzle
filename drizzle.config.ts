import { defineConfig } from "drizzle-kit"

export default defineConfig({
    schema: "./schema.ts",
    dialect: "postgresql",
    dbCredentials: {
        url: "postgres://postgres:postgrespassword@localhost:5432/postgres"
    }
});