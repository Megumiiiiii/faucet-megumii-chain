import Head from "next/head";
import Faucet from "../components/Faucet";
import { EarthCanvas } from "../components/canvas";

export default function Home() {
  return (
    <>
      <Head>
        <title>Testnet Faucet</title>
        <meta name="description" content="Testnet Facuet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
       <EarthCanvas />
        <Faucet />
        
      </main>
    </>
  );
}
