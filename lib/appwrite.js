import {
  Client,
  Account,
  ID,
  Avatars,
  Databases,
  Storage,
  Query,
} from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.stoic.aora",
  projectId: "66ee679b000a2047af17",
  databaseId: "66ee67e70027296073ab",
  usersCollectionId: "66ee680c0009175ca4c1",
  videosCollectionId: "66ee682700309ba00203",
  storageId: "66ee6a0b003989129627",
};

const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);
const storage = new Storage(client);

export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );

    return newUser;
  } catch (error) {
    console.log(error);

    throw new Error(error);
  }
};

export const signIn = async (email, password) => {
  try {
    await account.deleteSessions(email, password);
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    throw new Error(error);
  }
};
