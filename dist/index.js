var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import { users } from "./drizzle/schema";
import { eq } from "drizzle-orm";
// Below code are for
const client = new Client({
    connectionString: "postgres://postgres:postgrespassword@localhost:5432/postgres",
});
client.connect();
const db = drizzle(client);
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield db.select().from(users).where(eq(users.name, "John"));
        console.log(result);
        process.exit(0);
    });
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
//# sourceMappingURL=index.js.map