import Link from "next/link";
import Layout from "../../components/layout";

export async function getServerSideProps(context) {
  const fs = require("fs");
  const { id } = context.query;
  let data = fs.readFileSync("./data/tanks.json", "utf-8");
  data = JSON.parse(data);
  data = data.find((t) => t.id == id);
  return {
    props: {
      data: data,
    },
  };
}

export default function Tank({ data }) {
  return (
    <Layout>
      <Link href="/tank">
        <a>
          <div class="w-24 border border-1 border-black">Go Back</div>
        </a>
      </Link>
      <div>{JSON.stringify(data)}</div>
    </Layout>
  );
}
