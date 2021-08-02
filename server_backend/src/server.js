import express from "express";
import cors from "cors";
import cron from "node-cron";
import { ApolloServer, gql } from "apollo-server-express";
import { typeDefs } from "./typeDefs.js";
import { resolvers } from "./resolvers.js";
import { updateStats } from "./ScheduledTasks.js";

const server = new ApolloServer({ typeDefs, resolvers });
await server.start();

const app = express();

server.applyMiddleware({ app });

cron.schedule("0 0 * * *", function () {
  console.log("Daily update of Torre stats for local DB");
  updateStats();
});

app.use(cors());
app.use(express.json());

app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

export default app;
