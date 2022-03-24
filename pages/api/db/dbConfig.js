const pgp = require("pg-promise")({
  noWarnings: true,
});

const config = {
  max: 30,
  connectionString:
    process.env.DB_URI || "postgres://localhost:5432/aqml",
  ssl: process.env.DB_URI ? true : false,
};

const db = pgp(config);

module.exports = {
  db,
};
