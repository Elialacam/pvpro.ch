import type { Metadata } from "next";
import RootDocument from "@/app/RootDocument";
import { baseMetadata } from "@/app/baseMetadata";
import { LocaleProvider } from "@/lib/LocaleContext";

export const metadata: Metadata = baseMetadata;

export default function AnfrageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RootDocument lang="de-CH">
      <LocaleProvider locale="de">
        <main className="min-h-[100dvh]">{children}</main>
      </LocaleProvider>
    </RootDocument>
  );
}