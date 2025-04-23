import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is not set");

export const SQL = postgres(process.env.DATABASE_URL);
