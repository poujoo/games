DROP INDEX IF EXISTS "unique_game_id";--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "unique_user_id" ON "scores" USING btree ("user_id");