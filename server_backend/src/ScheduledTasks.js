import JobStatsDAO from "./dao/JobStatsDAO.js";
import UserStatsDAO from "./dao/UserStatsDAO.js";
import { getUsers, getJobs } from "./torreapi/TorreEnpoints.js";

export async function updateStats() {
  console.log("updating userStats");
  getUsers(null, "0", null, "true")
    .then(async (res) => {
      Object.entries(res.aggregators).forEach(async ([key, value]) => {
        await UserStatsDAO.addOrUpdateUserStat(key, value);
      });
    })
    .catch((err) => console.error(err));

  console.log("updating jobStats");
  getJobs(null, "0", null, "true")
    .then(async (res) => {
      Object.entries(res.aggregators).forEach(async ([key, value]) => {
        await JobStatsDAO.addOrUpdateJobStat(key, value);
      });
    })
    .catch((err) => console.error(err));
}
