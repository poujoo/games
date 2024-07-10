import { Card } from "flowbite-react";
// import { NextPage } from "next";
import { getDictionary } from "@/get-dictionary";
import { currentUser } from "@clerk/nextjs/server";
import type { Locale } from "../../i18n-config";

export default async function HomePage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  const user = await currentUser();
  const name = user?.username;
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
        <div className="max-w-sm">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="/squares.png"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
        <div className="max-w-sm">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="/squares.png"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
        <div className="max-w-sm">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="/squares.png"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
        <div className="max-w-sm">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="/squares.png"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
        <div className="max-w-sm">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="/squares.png"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
