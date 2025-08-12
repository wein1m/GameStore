import { appwriteConfig, database, client } from "@/lib/client";
import { Query } from "appwrite";

// just done getting all the assets for trending, and done fetching (haven't figured out how to fetch all at once though).

export const getTrending = async () => {
  try {
    const { documents, total } = await database.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.games,
      [Query.orderDesc('title')],
    );
    return total > 0 ? documents : null;
  }
  catch (err) {
    console.error("error fetching. ", err)
    return null
  }
}

export const getById = async (id) => {
  try {
    const { documents, total } = await database.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.games,
      [Query.equal('$id', id)]
    )
    return total > 0 ? documents[0] : null;
  } catch (err) {
    console.error("Error get game by ID. ", err)
    return null
  }
}
