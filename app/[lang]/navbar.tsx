
import { DarkThemeToggle, Navbar, NavbarBrand } from "flowbite-react";
import Image from "next/image";
import type { FC } from "react";
import ClerkButton from "./clerkButton";




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
                <Image
                  alt="Flowbite logo"
                  height="24"
                  src="/favicon.ico"
                  width="24"
                />
                <span className="self-center whitespace-nowrap px-3 text-xl font-semibold dark:text-white">
                  Flowbite
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