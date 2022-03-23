import { db } from "./dbConfig";

const getData = (articleId) => {
  return db.any(`SELECT * FROM "Tank"`, []);
};

module.exports = {
  getData,
};
