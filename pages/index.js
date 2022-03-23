import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";
import { fetchGet } from "../utils/fetch";

export async function getServerSideProps(context) {
  const tanks = await fetchGet(`${process.env.APP_URL}/api/tank/all`);

  let totalGallons = 0;
  tanks.map((t) => {
    totalGallons += Number(t.Size);
  });
  return {
    props: {
      numTanks: tanks.length,
      totalGallons: totalGallons,
    },
  };
}
export default function Home({ numTanks, totalGallons }) {
  return (
    <div class="h-full">
      <Head>
        <title>AquariumML</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h3 class="text-2xl font-bold">Tanks</h3>
        <div class="stats stats-vertical lg:stats-horizontal shadow">
          <Link href="/tank">
            <a>
              <div class="stat hover:bg-slate-300 hover:cursor-pointer">
                <div class="stat-title"># Tanks</div>
                <div class="stat-value">{numTanks}</div>
              </div>
            </a>
          </Link>

          <div class="stat">
            <div class="stat-title"># Gallons</div>
            <div class="stat-value">{totalGallons}</div>
          </div>

          <div class="stat">
            <div class="stat-title"># Gallons water changed</div>
            <div class="stat-value">1,200</div>
          </div>
        </div>
        <br />
        <div class="divider"></div>
        <h3 class="text-2xl font-bold">Fish</h3>
        <div class="stats stats-vertical lg:stats-horizontal shadow">
          <Link href="/tank">
            <a>
              <div class="stat hover:bg-slate-300 hover:cursor-pointer">
                <div class="stat-title"># Tanks</div>
                <div class="stat-value">{numTanks}</div>
              </div>
            </a>
          </Link>

          <div class="stat">
            <div class="stat-title"># Gallons</div>
            <div class="stat-value">{totalGallons}</div>
          </div>

          <div class="stat">
            <div class="stat-title"># Gallons water changed</div>
            <div class="stat-value">1,200</div>
          </div>
        </div>
      </Layout>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
