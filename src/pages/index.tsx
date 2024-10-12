import Head from "next/head";
import LandingPage from "./LandingPage";


export default function Home() {
  return (
    <>
      <Head>
        <title>DHS Aerospace</title>
        <meta
          name="description"
          content="This is the Dublin High School Aerospace Club website"
        />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <LandingPage />
    </>
  );
}
