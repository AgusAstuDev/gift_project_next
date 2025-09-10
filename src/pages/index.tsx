import Head from "next/head";
import HeroSection from "@/components/HeroSection/HeroSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gift for Sofia Mitacek</title>
        <meta
          name="description"
          content="Página creada a modo de regalo para mi bebé por su cumpleaños"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon/corazon-de-pixel-32.ico" />
      </Head>
      <HeroSection />
    </>
  );
}
