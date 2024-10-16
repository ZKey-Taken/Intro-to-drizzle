import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import { users } from "./drizzle/schema";
import { eq } from "drizzle-orm";
import { gql, GraphQLClient } from "graphql-request";

// Below code are for
const client = new Client({
  connectionString:
    "postgres://postgres:postgrespassword@localhost:5432/postgres",
});

client.connect();
const db = drizzle(client);

async function main() {
  const result = await db.select().from(users).where(eq(users.name, "John"));
  console.log(result);
  process.exit(0);
}

main();

/*
// Below code are for fetching data on graphQL with hasura API
const document = gql`
query MyQuery {
    todos {
      id
      task
      is_completed
      user {
        name
        id
      }
    }
  }
`

async function main(){
    const endpoint = 'http://localhost:8080/v1/graphql';
    const client = new GraphQLClient(endpoint);
    const result = await client.request(document);
    console.log(result);
    process.exit(0);
}

main();
*/
