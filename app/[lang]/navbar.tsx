import { DarkThemeToggle, Navbar, NavbarBrand } from "flowbite-react";
import Image from "next/image";
import type { FC } from "react";
import ClerkButton from "./clerkButton";
import { PiMathOperationsDuotone } from "react-icons/pi";

export const DashboardNavbar: FC<Record<string, never>> = function () {

  return (
    <header>
      <Navbar
        fluid
        className="fixed top-0 z-30 w-full border-b border-gray-200 bg-white p-0 dark:border-gray-700 dark:bg-gray-800 sm:p-0"
      >
        <div className="w-full p-3 pr-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <NavbarBrand href="/">
              <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-green-500 dark:bg-green-800 dark:text-green-200">
                <PiMathOperationsDuotone className="h-10 w-10"/>
              </div>
                {/* <Image
                  alt="Flowbite logo"
                  height="24"
                  src="/squares.png"
                  width="24"
                /> */}
                <span className="self-center whitespace-nowrap px-3 text-xl font-semibold dark:text-white">
                  Opa's games
                </span>
              </NavbarBrand>
            </div>
            <div className="flex justify-end">
              <ClerkButton />
              <DarkThemeToggle />
            </div>
          </div>
        </div>
      </Navbar>
    </header>
  );
};
