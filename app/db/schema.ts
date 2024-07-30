import { relations } from "drizzle-orm";
import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

// // Use this object to send drizzle queries to your DB
// export const db = drizzle(sql);

// Create a pgTable that maps to a table in your DB
export const GameTable = pgTable(
  "games",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    image: text("image").notNull(),
    description: text("description").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (games) => {
    return {
      uniqueIdx: uniqueIndex("unique_name").on(games.name),
    };
  },
);

export const gamesRelations = relations(GameTable, ({ many }) => ({
  scores: many(ScoreTable),
}));

export const ScoreTable = pgTable("scores", {
  id: serial("id").primaryKey(),
  game_id: integer("game_id")
    .notNull()
    .references(() => GameTable.id),
  user_id: text("user_id").notNull(),
  score: serial("score").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const scoresRelations = relations(ScoreTable, ({ one }) => ({
  game: one(GameTable, {
    fields: [ScoreTable.game_id],
    references: [GameTable.id],
  }),
}));
