import { getDictionary } from "@/get-dictionary";
import { currentUser } from "@clerk/nextjs/server";
import { Card } from "flowbite-react";
import type { Locale } from "../../i18n-config";
import type { GameType } from "../db/queries";
import { allGames } from "../db/queries";

export default async function HomePage({
  params: { lang },
}: {
  params: { lang: Locale };
}): Promise<JSX.Element> {
  const dictionary = await getDictionary(lang);
  const user = await currentUser();
  const name = user?.username;
  const games: GameType[] = await allGames();
  // const { rows } = await sql`SELECT * from GAMES`;
  // const db = drizzle(sql)
  // const result = await db.select().from('GAMES');

  return (
    <div className="flex flex-col p-10">
      <div className="flex flex-row justify-center p-3 lg:p-10">
        <header>
          <h1 className="text-md font-extrabold text-green-800 dark:text-green-100 md:text-xl lg:text-5xl">
            {dictionary.landingPage.welcome} {name}
          </h1>
          <h2 className="md:text-l mt-5 text-sm font-extrabold text-green-800 dark:text-green-100 lg:text-3xl">
            Ready to challenge yourself?
          </h2>
        </header>
      </div>

      <hr className="lg:my:10 mx-3 my-0 h-0.5 border-t-0 bg-neutral-200 dark:bg-white/10 lg:mx-10" />

      <div className="flex flex-wrap justify-center gap-10 p-3 lg:p-10">
        {games.map((game) => (
          <>
            <div className="max-w-sm" key={`${game.id}`}>
              <Card
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={`${game.image}`}
                // href={`games/${game.name.replace(/\s+/g, "")}/rules?id=${game.id}`}
                // href={`games/rules/${game.id}`}
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {game.name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {game.description}
                </p>
                <div className="mt-4 flex space-x-3 lg:mt-6">
                  <a
                    href={"/games/game/1"}
                    className="inline-flex items-center rounded-lg  bg-green-500 px-4 py-2 text-center text-sm font-medium text-green-200"
                  >
                    Play
                  </a>
                  <a
                    href={"/games/rules/1"}
                    className="inline-flex items-center rounded-lg  bg-green-500 px-4 py-2 text-center text-sm font-medium text-green-200"
                  >
                    Rules
                  </a>
                  <a
                    href={"/games/end/1"}
                    className="inline-flex items-center rounded-lg  bg-green-500 px-4 py-2 text-center text-sm font-medium text-green-200"
                  >
                    Scores
                  </a>
                </div>
              </Card>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
