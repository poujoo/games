import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";
import { currentUser } from "@clerk/nextjs/server";
import PageContent from "./pageContent";
// import { drizzle } from "drizzle-orm/vercel-postgres";
// import * as schema from '../../../../db/schema';
// import {scoresByGameAndUser, gameIdByName} from '../../../../db/queries';
// import { useSearchParams } from "next/navigation";

export default async function Page({
  params: { lang, id },
}: {
  params: { lang: Locale; id: string };
}): Promise<JSX.Element> {
  const dictionary = await getDictionary(lang);
  const user = await currentUser();
  // const name = user?.username;
  // const userId = user?.id;

  const userId = user?.id;
  // const searchParams = useSearchParams()
  // const gameId = Number(searchParams.get("id"))

  const gameId = Number(id);
  // const db = drizzle(sql, {schema})
  // const result = await db.query.GameTable.findFirst({with:{scores:true}});
  // const scores = await db.query.ScoreTable.findMany();
  // let result = scoresByGameAndUser(gameId,userID)
  // console.log(result)
  // console.log(rows[0].id)

  if (userId != undefined) {
    return (
      <PageContent
        dictionary={dictionary.game}
        userId={userId}
        gameId={gameId}
      ></PageContent>
    );
  } else {
    return <>Loading...</>;
  }
}
