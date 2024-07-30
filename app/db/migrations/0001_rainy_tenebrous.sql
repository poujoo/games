ALTER TABLE "scores" ADD PRIMARY KEY ("id");--> statement-breakpoint
ALTER TABLE "games" ADD COLUMN "description" text NOT NULL;--> statement-breakpoint
ALTER TABLE "scores" ADD COLUMN "score" serial NOT NULL;--> statement-breakpoint
ALTER TABLE "games" DROP COLUMN IF EXISTS "email";