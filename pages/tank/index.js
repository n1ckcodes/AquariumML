import Layout from "../../components/layout";
import TankThumbnail from "../../components/tanks/thumbnail";

export async function getServerSideProps(context) {
  const fs = require("fs");
  let data = fs.readFileSync("./data/tanks.json", 'utf-8');


  return {
    props: {
      data: JSON.parse(data),
    }
  };
}

export default function Tanks({ data }) {
  console.log(data)
  return (
    <Layout>
      <div>
        {data == undefined ? (
          <div>
          <p>Looks like you havn't added any tanks yet. </p> <br /><p>Add now?</p>
          </div>
        ) : (
          data.map((t) => <TankThumbnail {...t} />)
        )}
      </div>
    </Layout>
  );
}
