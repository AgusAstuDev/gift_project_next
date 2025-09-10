import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GiftProvider } from "@/context/GiftContext";
import { Dancing_Script, Delius_Swash_Caps } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing-script",
});

const deliusSwashCaps = Delius_Swash_Caps({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-delius-swash-caps",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${dancingScript.variable} ${deliusSwashCaps.variable}`}>
      <GiftProvider>
        <Component {...pageProps} />
      </GiftProvider>
    </main>
  );
}
