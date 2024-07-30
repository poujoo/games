"use client";
import type { ScoreType } from "@/app/db/queries";
import { formatRelative } from "date-fns";
import { Table } from "flowbite-react";
import React from "react";

export default function PageContent(props: {
  username: string;
  dictionary: { title: string };
  scores: ScoreType[] | undefined;
}) {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (hasMounted) {
    return (
      <div className="flex flex-col p-5">
        <div className="flex flex-row justify-center p-3 lg:p-10">
          <header>
            <h1 className="text-md font-extrabold  text-green-800 dark:text-green-100 md:text-xl lg:text-5xl">
              {props.dictionary.title} standings
            </h1>
          </header>
        </div>

        <hr className="lg:my:10 mx-3 my-0 h-0.5 border-t-0 bg-neutral-200 dark:bg-white/10 lg:mx-10" />

        <div className="flex flex-row-reverse flex-wrap justify-center p-3 md:flex-row-reverse lg:flex-row-reverse lg:p-10">
          <div className="w-full">
            <div className="overflow-x-auto">
              <Table>
                <Table.Head>
                  <Table.HeadCell>Player</Table.HeadCell>
                  <Table.HeadCell>Date</Table.HeadCell>
                  <Table.HeadCell>Score</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {props.scores?.map((g: ScoreType) => {
                    return (
                      <Table.Row
                        key="g.id"
                        className="bg-white dark:border-gray-700 dark:bg-gray-800"
                      >
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          {g.user_id}
                        </Table.Cell>
                        <Table.Cell>
                          {g.createdAt != undefined
                            ? formatRelative(g.createdAt, new Date())
                            : ""}
                        </Table.Cell>
                        <Table.Cell>{g.score} sec</Table.Cell>
                      </Table.Row>
                    );
                  })}
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
