import express from "express";
import cors from "cors";
import cron from "node-cron";
import { ApolloServer, gql } from "apollo-server-express";
import { typeDefs } from "./typeDefs.js";
import { resolvers } from "./resolvers.js";

const server = new ApolloServer({ typeDefs, resolvers });
await server.start();

const app = express();

server.applyMiddleware({ app });

cron.schedule("* * * * *", function () {
  console.log("running a task every minute");
});

app.use(cors());
app.use(express.json());

app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

export default app;
