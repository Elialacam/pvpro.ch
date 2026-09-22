import { Suspense } from "react";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CallbackWidget from "@/components/CallbackWidget";
import NavigationProgress from "@/components/NavigationProgress";
import TrackingScripts from "@/components/TrackingScripts";
import UtmTracker from "@/components/UtmTracker";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootDocument({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: "de-CH" | "it-CH" | "fr-CH" | "en-CH";
}) {
  return (
    <html
      lang={lang}
      className={`scroll-smooth ${inter.variable}`}
      suppressHydrationWarning
    >
      <head />
      <body className={inter.className}>
        <Suspense fallback={null}>
          <TrackingScripts />
        </Suspense>
        <UtmTracker />
        <NavigationProgress />
        {children}
        <CallbackWidget />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}