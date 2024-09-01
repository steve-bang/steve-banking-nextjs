"use server";

import { sessionNameLoggedInUser } from "@/constants";
import { createAdminClient, createSessionClient } from "@/lib/server/appwrite";
import { cookies } from "next/headers";
import { ID } from "node-appwrite";

export const SignIn = async ( { email, password } : SignUpParams ) => {
    try {
        const { account } = await createAdminClient();

        const session = await account.createEmailPasswordSession(email, password);

        cookies().set(sessionNameLoggedInUser, session.secret, {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            secure: true,
        })

        return session;
    }
    catch (error) {
        console.error(error);
    }
}


export const SignUp = async ( userData : SignUpParams ) => {
    try {
        
        const { account } = await createAdminClient();

        const newUser = await account.create(
            ID.unique(), 
            userData.email, 
            userData.password,
            `${userData.firstName} ${userData.lastName}`
        );

        return newUser;
    }
    catch (error) {
        console.error(error);
    }
}

export const signOut = async () => {
    try {
        
        const { account } = await createSessionClient();

        cookies().delete(sessionNameLoggedInUser);

        return await account.deleteSession("current");
    }
    catch (error) {
        console.error(error);
    }
}

export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      return await account.get();
    } catch (error) {
      return null;
    }
  }
