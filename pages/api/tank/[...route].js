import nc from "next-connect";
import { createTank } from "../db/tankQueries";

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
handler.post("/api/tank/new", (req, res) => {
  const { name, size, type, location } = req.body;
  if (
    name == undefined ||
    size == undefined ||
    type == undefined ||
    location == undefined
  ) {
    return;
  }
  return createTank(name, size, type, location).then(() => {
    return res.sendStatus(201);
  });
});

//TODO: set up default route handling
handler.get((req, res, next) => {
  console.log(req.url);
  const { method } = req;

  res.end("This matches whatever route");
});

export default handler;
