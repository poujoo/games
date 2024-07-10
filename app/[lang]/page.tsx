import { Card } from "flowbite-react";
import { sql } from "@vercel/postgres";
import { getDictionary } from "@/get-dictionary";
import { currentUser } from "@clerk/nextjs/server";
import type { Locale } from "../../i18n-config";

export default async function HomePage({
  params: { lang },
}: {
  params: { lang: Locale };
}): Promise<JSX.Element> {
  const dictionary = await getDictionary(lang);
  const user = await currentUser();
  const name = user?.username;
  const { rows } = await sql`SELECT * from GAMES`;

  return (
    <div className="flex flex-col p-10">
      <div className="flex flex-row justify-center p-3 lg:p-10">
        <header>
          <h1 className="text-md font-extrabold dark:text-white md:text-xl lg:text-5xl">
            {dictionary.landingPage.welcome} {name}
          </h1>
        </header>
      </div>

      <hr className="lg:my:10 mx-3 my-0 h-0.5 border-t-0 bg-neutral-200 dark:bg-white/10 lg:mx-10" />

      <div className="flex flex-wrap justify-center gap-10 p-3 lg:p-10">
        {rows.map((row) => (
          <>
            <div className="max-w-sm" id={`${row.game_id}`}>
              <Card
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="/squares.png"
                href={`games/${row.game_id}`}
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {row.name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {row.name}
                </p>
              </Card>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
