import { useFormik } from "formik";
import Layout from "../../components/layout";
import { fetchPost } from "../../utils/fetch";

export default function NewTank() {
  const formik = useFormik({
    //These values need to be set with formik even if not used
    initialValues: {
      size: "0.25",
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
        alert(res);
      });
      //  alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Layout>
      <form onSubmit={formik.handleSubmit} class="m-10">
        <h3 class="text-2xl underline">Add new tank</h3>
        <div class="divider"></div>
        <label class="label">Tank name</label>
        <input
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          type="text"
          placeholder="Nick's tank"
          autoComplete="off"
          class="input input-bordered w-full max-w-xs"
          required
        />
        <br />
        <br />
        <label class="label">Tank Size (gallons): {formik.values.size}</label>
        <input
          name="size"
          type="range"
          min="0.25"
          max="500"
          step="0.25"
          value={formik.values.size}
          onChange={formik.handleChange}
          value={formik.values.size}
          class="range w-1/6"
          required
        ></input>
        <br />
        <br />
        <label class="label">Type</label>
        <select
          class="select select-bordered w-full max-w-xs"
          onChange={formik.handleChange}
          value={formik.values.type}
          name="type"
          required
        >
          <option disabled selected>
            Select a type
          </option>
          <option>Brackish</option>
          <option>Freshwater - (Non planted) </option>
          <option>Freshwater - Planted (C02) </option>
          <option>Freshwater - Planted (Low tech) </option>
          <option>Saltwater - FO</option>
          <option>Saltwater - FOWLR</option>
          <option>Saltwater - Reef</option>
        </select>
        <br />
        <br />
        <label class="label">Location</label>
        <input
          name="location"
          type="text"
          placeholder="Basement, office, etc..."
          class="input input-bordered w-full max-w-xs"
          onChange={formik.handleChange}
          value={formik.values.location}
          autoComplete="off"
          required
        />
        <br />
        <br />
        <input type="submit" value="Submit" class="btn btn-wide" />
      </form>
    </Layout>
  );
}
