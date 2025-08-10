import { appwriteConfig, database, client } from "@/lib/client";
import { Query } from "appwrite";

// just done getting all the assets for trending, and done fetching (haven't figured out how to fetch all at once though).

export const getTrending = async () => {
  try {
    const { documents, total } = await database.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.trending,
      [Query.orderDesc('title')],

    );
    return total > 0 ? documents : null;
  }
  catch (err) {
    console.log("error fetching", err)
    return null
  }
}
