import { SQL } from "./client";
import { faker, fakerPT_BR } from "@faker-js/faker";

const setup = async () => {
  await SQL`
    CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT,
      price_in_cents INT NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )
  `;

  await SQL`TRUNCATE TABLE products`;

  for (const _i of Array.from({ length: 20 })) {
    const productsToInsert = Array.from({ length: 10_000 }).map(() => {
      return {
        name: fakerPT_BR.commerce.productName(),
        description: fakerPT_BR.commerce.productDescription(),
        price_in_cents: faker.number.int({ min: 100, max: 100_000 }),
      };
    });

    await SQL`INSERT INTO products ${SQL(productsToInsert)}`;
  }
  console.log(`Products inserted ${200_000}`);
};

export { setup };
