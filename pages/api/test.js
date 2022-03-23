import nc from "next-connect";
import { getData } from "./db/testQueries";

const handler = nc({
  attachParams: true,
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    console.log(req);
    res.status(404).end("Page is not found");
  },
});

//GET article by ID
handler.get("/api/test", (req, res) => {
  return getData().then((response) => {
    console.log(response);
    return res.json(response);
  });
});

//TODO: set up default route handling
handler.get((req, res, next) => {
  console.log(req.url);
  const { method } = req;

  res.end("This matches whatever route");
});

export default handler;
