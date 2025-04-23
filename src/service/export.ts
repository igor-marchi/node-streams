import { pipeline } from "node:stream/promises";
import { SQL } from "../db/client";
import { Transform } from "node:stream";
import { createWriteStream, existsSync, mkdirSync } from "node:fs";
import { stringify } from "csv-stringify";

const execute = async () => {
  const query = SQL`
    SELECT id, name
    FROM products
  `;

  const cursor = query.cursor(500);

  const stream = new Transform({
    objectMode: true,
    transform(chunk, encoding, callback) {
      for (const item of chunk) {
        this.push(item);
      }

      callback();
    },
  });

  const path = makePath();

  await pipeline(
    cursor,
    stream,
    stringify({
      delimiter: ",",
      header: true,
      columns: ["id", "name"],
    }),
    createWriteStream(path, "utf8")
  );
};

const makePath = () => {
  const csvDir = "./csv";
  if (!existsSync(csvDir)) mkdirSync(csvDir);
  return `${csvDir}/products.csv`;
};

export { execute };
