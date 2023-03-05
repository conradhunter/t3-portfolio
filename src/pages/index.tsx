import { type NextPage } from "next";
import Head from "next/head";
import LandingIntroduction from "~/components/LandingIntroduction";
import Nav from "~/components/Nav";
import Projects from "~/components/Projects";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Conrad Hunter | Frontend Dev</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="flex min-h-screen flex-col items-center 
        bg-gradient-to-b from-slate-700 to-slate-900
      "
      >
        <section className="min-h-screen">
          <Nav />
          <LandingIntroduction />
        </section>
        <section className="">
          <Projects />
        </section>
      </main>
    </>
  );
};

export default Home;
