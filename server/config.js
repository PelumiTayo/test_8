require("dotenv").config();
require("colors")

const PORT = process.env.DATABASE_PORT ? Number(process.env.DATABASE_PORT) : 3001;
const SECRET_KEY = process.env.SECRET_KEY || "secret_dev";

function getDatabaseUri() {
  const dbUser = process.env.DATABASE_USER || "postgres";
  const dbPass = process.env.DATABASE_PASS
    ? encodeURI(process.env.DATABASE_PASS)
    : "postgres";
  const dbHost = process.env.DATABASE_HOST || "localhost";
  const dbPort = process.env.DATABASE_PORT || 5432;
  const dbName = process.env.DATABASE_NAME || "cashflow";
  const dbTest = process.env.DATABASE_TEST_NAME || "cashflow_test";
  return (
    process.env.DATABASE_URL ||
    `postgresql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`
  );
}

const BCRYPT_WORK_FACTOR = 13;

console.log("App Config".bgBlue);
console.log("PORT:".blue, PORT);
console.log("SECRET_KEY:".red, SECRET_KEY);
console.log("Database URI:".green, getDatabaseUri());
console.log("---");

module.exports = {
  PORT,
  SECRET_KEY,
  BCRYPT_WORK_FACTOR,
  getDatabaseUri,
};
