import { useRouter } from "next/router";
import Layout from "../../components/layout";

export default function Tank() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <div>{id}</div>
    </Layout>
  );
}
