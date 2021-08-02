import mongodb from "mongodb";
const ObjectId = mongodb.ObjectID;
let userStats;

export default class UserStatsDAO {
  static async injectDB(conn) {
    if (userStats) {
      return;
    }
    try {
      userStats = await conn
        .db(process.env.TORRETEST_NS)
        .collection("userStats");
      console.log("success connecting to userStats collection");
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in UserStatsDAO: ${e}`
      );
    }
  }

  static async addOrUpdateUserStat(key, value) {
    try {
      let total = 0;
      Object.entries(value).forEach(([key, val]) => {
        total += val.total;
      });
      const id = await userStats.findOne({ category: key });
      if (id) {
        const filter = { category: key };
        const updateDoc = {
          $set: {
            total: total,
            subcategories: value,
          },
        };
        return await userStats.updateOne(filter, updateDoc);
      } else {
        const userStatDoc = {
          category: key,
          total: total,
          subcategories: value,
        };
        return await userStats.insertOne(userStatDoc);
      }
    } catch (e) {
      console.error(`Unable to post userStat: ${e}`);
      return { error: e };
    }
  }
}
