import Layout from "../../components/layout";
import TankThumbnail from "../../components/tanks/thumbnail";

export async function getServerSideProps(context) {
    return {
      props: {
          tanks: ['tank1', 'tank2']
      }, // will be passed to the page component as props
    }
  }
  
export default function Tanks({ tanks }) {
  return (
    <Layout>
      <div>{!tanks ? <p>Looks like you havn't added any tanks yet.</p>: 
        tanks.map(t => <TankThumbnail tank={t} />)
      
      }</div>
    </Layout>
  );
}
