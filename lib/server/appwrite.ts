
"use server";

import { Client, Account, Databases, Users } from "node-appwrite";
import { cookies } from "next/headers";
import { sessionNameLoggedInUser } from "@/constants";

const appwriteProject = process.env.NEXT_PUBLIC_APPWRITE_PROJECT as string;
const appwriteEndpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string;
const appwriteApiKey = process.env.NEXT_PUBLIC_APPWRITE_SECRET as string;

export async function createSessionClient() {
  const client = new Client()
    .setEndpoint(appwriteEndpoint)
    .setProject(appwriteProject);

  const session = cookies().get(sessionNameLoggedInUser);
  if (!session || !session.value) {
    throw new Error("No session");
  }

  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
  };
}

export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(appwriteEndpoint)
    .setProject(appwriteProject)
    .setKey(appwriteApiKey);

  return {
    get account() {
      return new Account(client);
    },
    get database() {
        return new Databases(client);
    },
    get user() {
        return new Users(client);
    }
  };
}
