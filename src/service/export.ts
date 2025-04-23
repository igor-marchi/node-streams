import { pipeline } from "node:stream/promises";
import { SQL } from "../db/client";
import { Transform } from "node:stream";
import { createWriteStream } from "node:fs";
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

  await pipeline(
    cursor,
    stream,
    stringify({
      delimiter: ",",
      header: true,
      columns: ["id", "name"],
    }),
    createWriteStream("./products.csv", "utf8")
  );
};

export { execute };
