import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import JobStatsDAO from "./dao/JobStatsDAO.js";
import UserStatsDAO from "./dao/UserStatsDAO.js";

dotenv.config();
const client = await new mongodb.MongoClient(process.env.TORRETEST_DB_URI);

const port = process.env.PORT || 8000;

client
  .connect()
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    await JobStatsDAO.injectDB(client);
    await UserStatsDAO.injectDB(client);
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  });
