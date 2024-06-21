import { Card, Toast } from "flowbite-react";
import { NextPage } from "next"
import { GrScorecard } from "react-icons/gr";

export const GamePageContent: NextPage = function () {
    return (
        <div className="flex flex-col p-10">
            <div className="flex flex-row p-3 lg:p-10 justify-center">
                <header>
                <h1 className="text-md md:text-xl lg:text-5xl font-extrabold dark:text-white">
                    Fast Squares
                </h1>
                </header>
            </div>

            <hr className="my-0 lg:my:10 lg:mx-10 mx-3 h-0.5 border-t-0 bg-neutral-200 dark:bg-white/10" />

            <div className="flex flex-wrap lg:flex-row-reverse justify-center p-3 lg:p-10 gap-10">
                <div className="flex-auto">
                <Card>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                </Card>
                </div>
                <div className="max-w-sm">
                <Toast className="mb-4">
                    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                        <GrScorecard className="h-5 w-5" />
                    </div>
                    <div className="ml-3 text-sm font-normal mr-10">10+3=11</div>
                    <div className="ml-auto flex items-center space-x-2">
                        <div className="rounded-lg p-1.5 text-sm font-medium text-cyan-600 hover:bg-cyan-100 dark:text-cyan-500 dark:hover:bg-gray-700">
                            25 seconds
                        </div>
                    </div>
                </Toast>
                <Toast className="mb-4">
                    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                        <GrScorecard className="h-5 w-5" />
                    </div>
                    <div className="ml-3 text-sm font-normal mr-10">8+3+4+6=11</div>
                    <div className="ml-auto flex items-center space-x-2">
                        <div className="rounded-lg p-1.5 text-sm font-medium text-cyan-600 hover:bg-cyan-100 dark:text-cyan-500 dark:hover:bg-gray-700">
                            11 seconds
                        </div>
                    </div>
                </Toast>
                </div>
                
            </div>
        </div>
    )}