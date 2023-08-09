import Head from "next/head";
import Documentation from "./components/Documentation";
import SiteWrapper from "./components/SiteWrapper";

export default function Docs() {
  return (
    <>
      <Head>
        <title>pnger docs</title>
        <meta name="description" content="Transform pdf to png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SiteWrapper>
        <Documentation />
      </SiteWrapper>
    </>
  );
}
