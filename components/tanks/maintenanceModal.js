import { useFormik } from "formik";
import dayjs from "dayjs";
import { fetchPost } from "../../utils/fetch";

export default function MaintenanceModal(props) {
  const currentDate = dayjs(dayjs(), "MM/DD/YYYY");
  const formik = useFormik({
    //These values need to be set with formik even if not used
    initialValues: {
      tankID: props.tankID,
      date: dayjs().format("YYYY-MM-DD"),
      type: "Select a type",
      waterAmt: 0,
      fertilizerAmt: 0,
      comments: "",
    },
    onSubmit: (values) => {
      console.log("here");
      fetchPost(
        "http://localhost:3000/api/event/new",
        JSON.stringify(values)
      ).then((res) => {
        alert("tank has been added");
      });
      //  alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      {" "}
      <label for="addModal" class="btn btn-wide btn-outline">
        ADD
      </label>
      <br />
      <br />
      <input type="checkbox" id="addModal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="addModal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold">Add maintenance event:</h3>
          <div class="divider" />
          <form onSubmit={formik.handleSubmit}>
            <label class="label">Date</label>
            <input
              name="date"
              type="date"
              placeholder="ex: 1/24/22"
              class="input input-bordered w-full max-w-xs"
              onChange={formik.handleChange}
              value={formik.values.date}
              autoComplete="off"
              required
            />
            <input
              name="tankID"
              type="hidden"
              value={formik.values.tankID}
              autoComplete="off"
              required
            />
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
              <option disabled value="Select a type">
                Select a type
              </option>
              <option>Add fertilizer</option>
              <option>Cleaned glass</option>
              <option>Water change</option>
            </select>
            <br />
            <br />
            {formik.values.type == "Water change" ? (
              <>
                <label class="label">Amount (gallons)</label>
                <input
                  name="waterAmt"
                  type="number"
                  min={0}
                  class="input input-bordered w-full max-w-xs"
                  onChange={formik.handleChange}
                  value={formik.values.waterAmt}
                  autoComplete="off"
                  required
                />
                <br />
                <br />
              </>
            ) : null}
            {formik.values.type == "Add fertilizer" ? (
              <>
                <label class="label">Fertilizer amount added (pumps)</label>
                <input
                  name="fertilizerAmt"
                  type="number"
                  min={0}
                  class="input input-bordered w-full max-w-xs"
                  onChange={formik.handleChange}
                  value={formik.values.fertilizerAmt}
                  autoComplete="off"
                  required
                />
                <br />
                <br />
              </>
            ) : null}

            <label class="label">Comments</label>
            <textarea
              name="comments"
              onChange={formik.handleChange}
              value={formik.values.comments}
              class="textarea textarea-bordered h-24  w-full max-w-xs"
            ></textarea>
            <br />
            <br />
            <br />
            <input
              type="submit"
              value="Save"
              class="btn btn-outline float-right"
            />
          </form>
        </div>
      </div>
    </>
  );
}
