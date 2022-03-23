import { useFormik } from "formik";
import * as yup from "yup";
import Layout from "../../components/layout";
import { useState } from "react";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

export default function NewTank() {
  const [gallons, setGallons] = useState(0);

  const formik = useFormik({
    initialValues: {
      email: "foobar@example.com",
      password: "foobar",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Layout>
      <form onSubmit={formik.handleSubmit} class="m-10">
        <label class="label">Tank name</label>
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full max-w-xs"
        />
        <br />
        <br />
        <label class="label">Tank Size (gallons): {gallons}</label>
        <input
          type="range"
          min="0.5"
          max="500"
          step="0.25"
          value={gallons}
          onChange={(e) => setGallons(e.target.value)}
          class="range w-1/2"
        ></input>
        <br />
        <br />
        <label class="label">Type</label>
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full max-w-xs"
        />
        <br />
        <br />
        <label class="label">Location</label>
        <input
          type="text"
          placeholder="Basement, office, etc..."
          class="input input-bordered w-full max-w-xs"
        />
      </form>
    </Layout>
  );
}
