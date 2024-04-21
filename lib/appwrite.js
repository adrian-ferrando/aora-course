import { Account, Client, ID } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.pimpa.aora",
  projectId: "662511234c253a74a8d4",
  databaseId: "66256487d2cddbac921f",
  userCollectionId: "662564cc7ddc6e9dc3b8",
  videoCollectionId: "6625651e998ed3785627",
  storageId: "6625666d8055a4833285",
};

// Init your react-native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);

export const createUser = () => {
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
