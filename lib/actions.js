import { appwriteConfig, database, client } from "@/lib/client";
import { Query } from "appwrite";

export const getTrending = async () => {
  try {
    const { documents, total } = await database.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.trending,
      [Query.equal('title', ['ELDEN RING'])],

    );
    return total > 0 ? documents[0] : null;
  }
  catch (err) {
    console.log("error fetching", err)
    return null
  }
}
