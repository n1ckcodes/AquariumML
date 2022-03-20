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
          <div class="w-24 border border-1 border-black mb-10">Go Back</div>
        </a>
      </Link>
      <div>
        <table>
            <tr><td class='font-bold'>ID</td><td>{data.id}</td></tr>
            <tr><td class='font-bold'>Size</td><td>{data.size}</td></tr>
            <tr><td class='font-bold'>Type</td><td>{data.type}</td></tr>
            <tr><td class='font-bold'>Size</td><td>{data.size}</td></tr>
        </table>
      </div>
    </Layout>
  );
}
