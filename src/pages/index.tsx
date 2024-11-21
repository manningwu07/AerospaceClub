import Head from "next/head";
import LandingPage from "./LandingPage";


export default function Home() {
  return (
    <>
      <Head>
        <title>Dublin High School Aerospace Club</title>
        <meta
          name="description"
          content="This is the Dublin High School Aerospace Club website"
        />
        <meta name="author" content="Dublin High School Aerospace Club, Manning Wu" />
        <meta name="keywords" content="Dublin High School, DHS, Aerospace Club, High School Club, Student Events, Aerospace Activities, Aerospace" />

        <meta name="google-site-verification" content="A6YrIHHiVDJIA8O5_fVIFMNVm8W7lxnVZd6TYIy5w4Q" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <LandingPage />
    </>
  );
}
