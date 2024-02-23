// https://github.com/porsager/postgres?tab=readme-ov-file
import postgres from "postgres";

const sql = postgres(
  "postgres://user:admin123@localhost:8080/securityonweb",
  {}
); // will use psql environment variables

export default sql;
