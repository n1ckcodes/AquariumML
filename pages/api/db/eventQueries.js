import { db } from "./dbConfig";

const addEvent = (
  tankID,
  type,
  waterChgAmt,
  fertilizerAmt,
  eventDate,
  comments
) => {
  return db.query(
    `INSERT INTO "Event"("TankID", "Type", "WaterChgAmt", "FertilizerAmt", "EventDate", "Comments") VALUES($1, $2, $3, $4, $5, $6)`,
    [tankID, type, waterChgAmt, fertilizerAmt, eventDate, comments]
  );
};

module.exports = {
  addEvent,
};
