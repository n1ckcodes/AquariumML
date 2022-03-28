import Link from "next/link";
import { useFormik } from "formik";
import Layout from "../../components/layout";
import { fetchGet } from "../../utils/fetch";
import MaintenanceModal from "../../components/tanks/maintenanceModal";

export async function getServerSideProps(context) {
  const { id } = context.query;
  const tankData = await fetchGet(`${process.env.APP_URL}/api/tank/${id}`);
  return {
    props: {
      tankData: tankData,
      maintenanceData: { events: [{ type: 1, date: "12/12/12" }] },
    },
  };
}

export default function Tank({ tankData, maintenanceData }) {
  const formik = useFormik({
    //These values need to be set with formik even if not used
    initialValues: {
      size: "0.25",
      dateStarted: "",
      name: "",
      type: "",
      location: "",
    },
    onSubmit: (values) => {
      console.log("here");
      fetchPost(
        "http://localhost:3000/api/tank/new",
        JSON.stringify(values)
      ).then((res) => {
        alert("tank has been added");
      });
      //  alert(JSON.stringify(values, null, 2));
    },
  });

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
        <MaintenanceModal />
        <h4>Events</h4>
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th>Date</th>
                <th>Desc</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>
              <tr class="hover">
                <th>1/1/2022</th>
                <td>25% water change</td>
                <td>fish looked happy</td>
              </tr>
              <tr class="hover">
                <th>12/31/2021</th>
                <td>Added 5 pumps fertiziler</td>
                <td>Plants not looking great</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
