import { db } from "./dbConfig";

const createTank = (name, size, type, location) => {
  return db.query(
    `INSERT INTO "Tank"("UserID", "Name", "Size", "Type", "Location") VALUES(1, $1, $2, $3, $4)`,
    [name, size, type, location]
  );
};

const getTanks = () => {
  return db.any(`SELECT * from "Tank"`, []);
};

module.exports = {
  createTank,
  getTanks,
};