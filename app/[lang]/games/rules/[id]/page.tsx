import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";

import PageContent from "../../rules/[id]/pageContent";

export default async function Page({
  params: { lang, id },
}: {
  params: { lang: Locale; id: string };
}): Promise<JSX.Element> {
  const dictionary = await getDictionary(lang);
  const gameId = Number(id);
  return <PageContent gameId={gameId}></PageContent>;
}
