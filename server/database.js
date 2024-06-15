const { Pool } = require("pg");

const pool = new Pool({
  user: "abhishek",
  password: "Pb6OVXXaG1ggL3whs6fyXWKssJOq5Wt6",
  host: "dpg-cpmkb488fa8c73ajlpr0-a.oregon-postgres.render.com",
  port: 5432,
  database: "abhidb_krgw",
  ssl: true,
});

module.exports = pool;
