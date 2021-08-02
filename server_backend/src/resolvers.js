import { updateStats } from "./ScheduledTasks.js";
import JobStatsDAO from "./dao/JobStatsDAO.js";
import UserStatsDAO from "./dao/UserStatsDAO.js";

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
    getUserStats: async (_, {filters}) => {
      return await UserStatsDAO.getUserStats(filters);
    },
    getJobStats: async (_, {filters}) => {
      console.log(filters);
      return await JobStatsDAO.getJobStats(filters);
    },
  },
};
