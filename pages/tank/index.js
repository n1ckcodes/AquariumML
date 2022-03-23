import Layout from "../../components/layout";
import TankThumbnail from "../../components/tanks/thumbnail";
import ToolBar from "../../components/tanks/toolbar";

export async function getServerSideProps(context) {
  await fetch("http://localhost:3000/api/test").then((res) => {
    console.log(res.json);
  });
  return {
    props: {
      data: [],
    },
  };
}

export default function Tanks({ data }) {
  return (
    <Layout>
      <ToolBar />
      <div>
        {data == undefined ? (
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
