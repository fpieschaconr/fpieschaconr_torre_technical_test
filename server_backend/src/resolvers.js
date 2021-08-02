import { updateStats } from "./ScheduledTasks.js";

// Provide resolver functions for your schema fields
export const resolvers = {
  Query: {
    hello() {
      return "Hello world!";
    },
    async test() {
      try {
        await updateStats();
        return "success!";
      } catch (e) {
        console.error(e.message);
      }
    },
  },
};
