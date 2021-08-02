import mongodb from "mongodb";
const ObjectId = mongodb.ObjectID;
let jobStats;

export default class JobStatsDAO {
  static async injectDB(conn) {
    if (jobStats) {
      return;
    }
    try {
      jobStats = await conn.db(process.env.TORRETEST_NS).collection("jobStats");
      console.log("success connecting to jobStats collection");
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in JobStatsDAO: ${e}`
      );
    }
  }

  static async addOrUpdateJobStat(key, value) {
    try {
      let total = 0;
      Object.entries(value).forEach(([key, val]) => {
        total += val.total;
      });

      const id = await jobStats.findOne({ category: key });
      if (id) {
        const filter = { category: key };
        const updateDoc = {
          $set: {
            total: total,
            subcategories: value,
          },
        };
        return await jobStats.updateOne(filter, updateDoc);
      } else {
        const jobStatDoc = {
          category: key,
          total: total,
          subcategories: value,
        };
        return await jobStats.insertOne(jobStatDoc);
      }
    } catch (e) {
      console.error(`Unable to post jobStat: ${e}`);
      return { error: e };
    }
  }

  static async getJobStats(filters = null) {
    let query;
    if (filters) {
      let obj = filters.find((o) => o.key === "category");
      if (obj) {
        query = { category: { $eq: obj.value } };
      }
    }

    let cursor;

    try {
      cursor = await jobStats.find(query);
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return [];
    }

    try {
      const jobStatsList = await cursor.toArray();
      return jobStatsList;
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`
      );
      return [];
    }
  }
}
