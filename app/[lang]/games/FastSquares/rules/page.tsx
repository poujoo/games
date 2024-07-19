"use client";
import { Button, Card, Toast } from "flowbite-react";
import { usePathname } from "next/navigation";
import {
  PiNumberSquareFiveDuotone,
  PiNumberSquareFourDuotone,
  PiNumberSquareOneDuotone,
  PiNumberSquareThreeDuotone,
  PiNumberSquareTwoDuotone,
} from "react-icons/pi";
export default function RulesPage() {
  const pathname = usePathname().split("/");
  const relPathname = pathname.slice(2, 4);
  const gamePathname = "/" + relPathname.join("/") + "/game";

  return (
    <div className="flex flex-col lg:p-10">
      <div className="flex flex-row justify-center p-3 lg:p-10">
        <header>
          <h1 className="text-md font-extrabold text-green-800 dark:text-green-100 md:text-xl lg:text-5xl">
            Fast Squares
          </h1>
        </header>
      </div>

      <hr className="lg:my:10 mx-3 my-0 h-0.5 border-t-0 bg-neutral-200 dark:bg-white/10 lg:mx-10" />

      <div className="flex flex-wrap justify-center gap-10 p-3 lg:flex-row-reverse lg:p-10">
        <Card className="max-w-sm">
          <h5 className="text-2xl font-bold tracking-tight text-green-800 dark:text-green-100">
            Rules of the game
          </h5>
          <Toast className="mb-4">
            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
              <PiNumberSquareOneDuotone className="h-8 w-8" />
            </div>
            <div className="ml-auto flex items-center space-x-2">
              <div className="justify-center rounded-lg p-1.5 text-sm font-medium text-green-500 dark:text-green-200">
                You will be presented with 3 different squares containing 4, 16
                and 36 numbers, respectively.
              </div>
            </div>
          </Toast>
          <Toast className="mb-4">
            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
              <PiNumberSquareTwoDuotone className="h-8 w-8" />
            </div>
            <div className="ml-auto flex items-center space-x-2">
              <div className="justify-center rounded-lg p-1.5 text-sm font-medium text-green-500 dark:text-green-200">
                The first square will have 4 numbers, find one subset of numbers
                that sums up to 10.
              </div>
            </div>
          </Toast>
          <Toast className="mb-4">
            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
              <PiNumberSquareThreeDuotone className="h-8 w-8" />
            </div>
            <div className="ml-auto flex items-center space-x-2">
              <div className="justify-center rounded-lg p-1.5 text-sm font-medium text-green-500 dark:text-green-200">
                The second square will have 16 numbers, find two subsets of
                numbers that sum up to 20.
              </div>
            </div>
          </Toast>
          <Toast className="mb-4">
            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
              <PiNumberSquareFourDuotone className="h-8 w-8" />
            </div>
            <div className="ml-auto flex items-center space-x-2">
              <div className="justify-center rounded-lg p-1.5 text-sm font-medium text-green-500 dark:text-green-200">
                The third and final square will have 36 numbers, find three
                subsets of numbers that sum up to 40.
              </div>
            </div>
          </Toast>
          <Toast className="mb-4">
            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
              <PiNumberSquareFiveDuotone className="h-8 w-8" />
            </div>
            <div className="ml-auto flex items-center space-x-2">
              <div className="justify-center rounded-lg p-1.5 text-sm font-medium text-green-500 dark:text-green-200">
                The fastest, in finding all correct subsets, wins!
              </div>
            </div>
          </Toast>
          <Button
            href={gamePathname}
            className="bg-green-500 text-green-200  dark:bg-green-500 dark:text-green-200"
          >
            Play
            <svg
              className="-mr-1 ml-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </Card>
      </div>
    </div>
  );
}
