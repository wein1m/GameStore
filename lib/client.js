import { Client, Databases } from "appwrite";

export const appwriteConfig = {
  projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
  endpointUrl: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
  databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
  games: process.env.NEXT_PUBLIC_APPWRITE_GAMES
}


export const client = new Client()
  .setEndpoint(appwriteConfig.endpointUrl)
  .setProject(appwriteConfig.projectId)

export const database = new Databases(client)
