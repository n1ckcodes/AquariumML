import Layout from "../components/layout";
import TankThumbnail from "../components/tanks/thumbnail";

import ToolBar from "../components/tanks/toolbar";
import { fetchGet } from "../utils/fetch";

export async function getServerSideProps(context) {
  const tanks = await fetchGet(`${process.env.APP_URL}/api/tank/all`);
  const eventData = await fetchGet(`${process.env.APP_URL}/api/event/all`);

  //TODO: move this function elsewhere or better structure it
  const combobulateData = (tanks, eventData) => {
    let data = [];
    for (const tank of tanks) {
      let temp = { ...tank, events: [] };

      const events = eventData.filter((e) => e.TankID == temp.TankID);
      temp.events.push(...events);
      data.push(temp);
    }
    return data;
  };
  return {
    props: {
      tankData: combobulateData(tanks, eventData),
    },
  };
}

export default function Home({ tankData }) {
  return (
    <Layout>
      <ToolBar />
      <div>
        {tankData == undefined ? (
          <div>
            <p>Looks like you havn't added any tanks yet.</p> <br />
          </div>
        ) : (
          <div class="grid mr-10">
            {tankData.map((t) => (
              <TankThumbnail key={t.id} {...t} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
