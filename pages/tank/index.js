import Layout from "../../components/layout";
import TankThumbnail from "../../components/tanks/thumbnail";
import ToolBar from "../../components/tanks/toolbar";
import { fetchGet } from "../../utils/fetch";

export async function getServerSideProps(context) {
  const tanks = await fetchGet("http://localhost:3000/api/tank/all");
  return {
    props: {
      data: [...tanks],
    },
  };
}

export default function Tanks({ tanks }) {
  console.log(tanks);
  return (
    <Layout>
      <ToolBar />
      <div>
        {tanks == undefined ? (
          <div>
            <p>Looks like you havn't added any tanks yet. </p> <br />
            <p>Add now?</p>
          </div>
        ) : (
          <div class="grid grid-cols-3 gap-0">
            {data.map((t) => (
              <TankThumbnail {...t} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
