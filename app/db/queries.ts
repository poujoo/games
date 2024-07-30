"use server";

import { sql } from "@vercel/postgres";
import { and, desc, eq, max } from "drizzle-orm";
import { drizzle } from "drizzle-orm/vercel-postgres";
import * as schema from "./schema";

const db = drizzle(sql, { schema });
// const user = await currentUser();
// const userId=user?.id;

export type ScoreType = typeof schema.ScoreTable.$inferInsert;
export type GameType = typeof schema.GameTable.$inferSelect;

export async function insertScore(
  time: number,
  userId: string,
  gameId: number,
) {
  await db
    .insert(schema.ScoreTable)
    .values({ game_id: gameId, user_id: userId, score: time });
}

export async function bestScoresByGameAndUser(gameid: number, userId: string) {
  const result = await db
    .select({ bestScore: max(schema.ScoreTable.score) })
    .from(schema.ScoreTable)
    .where(
      and(
        eq(schema.ScoreTable.game_id, gameid),
        eq(schema.ScoreTable.user_id, userId),
      ),
    );
  return result[0].bestScore;
}
export type bestScoresByGameType = {
  bestScore: number | null;
  date: Date;
  id: number;
};
export async function bestScoresByGame(gameid: number) {
  const maxScore = db
    .select({
      bestScore: max(schema.ScoreTable.score).as("bestScore"),
      userId: schema.ScoreTable.user_id,
    })
    .from(schema.ScoreTable)
    .groupBy(schema.ScoreTable.game_id, schema.ScoreTable.user_id)
    .as("maxScore");

  // const bestScore = maxScore[0].bestScore;

  if (maxScore != undefined) {
    // const result = await db.selectDistinctOn([schema.ScoreTable.user_id]).from(schema.ScoreTable).where(eq(schema.ScoreTable.score,bestScore))
    const result = await db
      .selectDistinctOn([schema.ScoreTable.user_id], {
        id: schema.ScoreTable.id,
        game_id: schema.ScoreTable.game_id,
        user_id: schema.ScoreTable.user_id,
        score: schema.ScoreTable.score,
        createdAt: schema.ScoreTable.createdAt,
      })
      .from(schema.ScoreTable)
      .innerJoin(
        maxScore,
        and(
          eq(maxScore.bestScore, schema.ScoreTable.score),
          eq(maxScore.userId, schema.ScoreTable.user_id),
        ),
      );
    console.log(result);
    return result;
  }
}

export async function scoresByGame(gameid: number, userId: string) {
  const result = await db
    .select()
    .from(schema.ScoreTable)
    .where(
      and(
        eq(schema.ScoreTable.game_id, gameid),
        eq(schema.ScoreTable.user_id, userId),
      ),
    )
    .orderBy(desc(schema.ScoreTable.createdAt));
  return result;
}

export async function gameIdByName(name: string): Promise<number> {
  const result = await db
    .select({ gameid: schema.GameTable.id })
    .from(schema.GameTable)
    .where(eq(schema.GameTable.name, name));
  return result[0].gameid;
}

export async function allGames(): Promise<GameType[]> {
  const result = await db.select().from(schema.GameTable);
  return result;
}
