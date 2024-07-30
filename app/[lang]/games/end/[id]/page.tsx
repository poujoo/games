import type { ScoreType } from "@/app/db/queries";
import { bestScoresByGame } from "@/app/db/queries";
import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import PageContent from "./pageContent";

export default async function Page({
  params: { lang, id },
}: {
  params: { lang: Locale; id: string };
}): Promise<JSX.Element> {
  const dictionary = await getDictionary(lang);
  const user = await currentUser();
  const name = user?.username;
  const gameId = Number(id);
  const userId = user?.id;
  // const searchParams = useSearchParams()
  // const gameId = searchParams.get("id")
  // const scores = await scoresByGame(gameId)
  if (name != undefined && userId != undefined) {
    // const scores = await scoresByGame(gameId,userId)
    const scores = await bestScoresByGame(gameId);
    let scoresWithNames;
    if (scores != undefined) {
      scoresWithNames = await Promise.all(
        scores.map(async (score): Promise<ScoreType> => {
          const name = (await clerkClient.users.getUser(score.user_id))
            .username;
          if (name != null) {
            return { ...score, user_id: name };
          } else {
            return { ...score, user_id: "no name" };
          }
        }),
      );
      // scoresWithNames.sort((a:ScoreType,b:ScoreType)=>{
      //   if(a.createdAt != undefined && b.createdAt != undefined){
      //     return (a.createdAt.getTime() - b.createdAt.getTime());
      //   }else{
      //     return a
      //   }
      // })
    }

    return (
      <PageContent
        username={name}
        dictionary={dictionary.game}
        scores={scoresWithNames}
      ></PageContent>
    );
  }
  return <></>;
}
