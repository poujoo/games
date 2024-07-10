import { ClerkProvider } from "@clerk/nextjs";
import { Flowbite, ThemeModeScript } from "flowbite-react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { i18n, type Locale } from "../../i18n-config";
import "../globals.css";
import { flowbiteTheme } from "../theme";
import { DashboardNavbar } from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Opa's games",
  description: "fantastic games to feed the mind",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale: Locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <ClerkProvider>
      <html lang={params.lang}>
        <head>
          <ThemeModeScript />
        </head>
        <body
          className={twMerge("bg-gray-50 dark:bg-gray-900", inter.className)}
        >
          <Flowbite theme={{ theme: flowbiteTheme }}>
            <DashboardNavbar />
            <div className="mt-16 flex items-start">
              <div
                id="main-content"
                className="relative h-full w-full overflow-y-auto bg-gray-50 dark:bg-gray-900"
              >
                {children}
              </div>
            </div>
          </Flowbite>
        </body>
      </html>
    </ClerkProvider>
  );
}
