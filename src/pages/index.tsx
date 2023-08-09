import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import Transformer from "./components/Transformer";

export default function Home() {
  return (
    <>
      <Head>
        <title>pnger</title>
        <meta name="description" content="Transform pdf to png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Transformer />
    </>
  );
}
