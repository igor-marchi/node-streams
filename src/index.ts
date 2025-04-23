import { SQL } from "./db/client";
import { setup } from "./db/setup";
import { execute } from "./service/export";

const main = async () => {
  await setup();
  await execute();
  await SQL.end();
};

main();
