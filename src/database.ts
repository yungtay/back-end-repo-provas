import { getConnectionManager } from "typeorm";

export default async function connect () {
  const connectionManager = await getConnectionManager();
  const connection = connectionManager.create({
    name: "default",
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities: ["src/entities/*.ts"],
    ssl: {
      rejectUnauthorized: false
  }
  });
  await connection.connect();
  return connection;
}
