import { useState, useEffect } from "react";
import dayjs from "dayjs";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import { fetchGet } from "../../utils/fetch";
import MaintenanceModal from "../../components/tanks/maintenanceModal";

export async function getServerSideProps(context) {
  const { id } = context.query;
  const tankData = await fetchGet(`${process.env.APP_URL}/api/tank/${id}`);
  const eventData = await fetchGet(
    `${process.env.APP_URL}/api/event/tank/${id}`
  );
  return {
    props: {
      tankData: tankData,
      eventData: eventData,
    },
  };
}

export default function Tank({ tankData, eventData }) {
  const router = useRouter();
  const [reload, setReload] = useState(false);

  const triggerRerender = () => {
    //This will allow us to refresh the server side props and do a true SSR rerender
    router.replace(router.asPath);
  };

  useEffect(() => {}, [reload]);
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
            <td>{tankData.TankID}</td>
          </tr>
          <tr>
            <td class="font-bold">Size:</td>
            <td>{tankData.Size}</td>
          </tr>
          <tr>
            <td class="font-bold">Type</td>
            <td>{tankData.Type}</td>
          </tr>
          <tr>
            <td class="font-bold">Size:</td>
            <td>{tankData.Size}</td>
          </tr>
        </table>
        <br />
        <hr />
        <br />
        <br />
        <MaintenanceModal tankID={tankData.TankID} callBack={triggerRerender} />
        <h4>Events</h4>
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th>Date</th>
                <th>Desc</th>
                <th>Amount</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>
              {eventData.map((t) => (
                <tr class="hover">
                  <th>{dayjs(t.EventDate).format("MM/DD/YYYY")}</th>
                  <td>{t.Type}</td>
                  <td>{t.WaterChgAmt}</td>
                  <td>{t.Comments}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
