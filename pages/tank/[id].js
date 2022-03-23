import Link from "next/link";
import Layout from "../../components/layout";

export async function getServerSideProps(context) {
  const { id } = context.query;

  return {
    props: {
      tankData: tankData,
      maintenanceData: maintenanceData,
    },
  };
}

export default function Tank({ tankData, maintenanceData }) {
  console.log(maintenanceData);

  return (
    <Layout>
      <Link href="/tank">
        <a>
          <div class="w-24 border border-1 border-black mb-10">Go Back</div>
        </a>
      </Link>
      <div>
        <table>
          <tr>
            <td class="font-bold">ID:</td>
            <td>{tankData.id}</td>
          </tr>
          <tr>
            <td class="font-bold">Size:</td>
            <td>{tankData.size}</td>
          </tr>
          <tr>
            <td class="font-bold">Type</td>
            <td>{tankData.type}</td>
          </tr>
          <tr>
            <td class="font-bold">Size:</td>
            <td>{tankData.size}</td>
          </tr>
        </table>
        <br />
        <hr />
        <br />
        <h4>Events</h4>
        {maintenanceData.events.map((md) => (
          <div>
            {md.date} - {md.type}
          </div>
        ))}
      </div>
    </Layout>
  );
}
