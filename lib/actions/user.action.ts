'use server';
import { createAdminClient, createSessionClient } from "../appwrite";
import {ID} from "node-appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async () => {
    try {

    } catch (error) {
        console.error('Error', error)
    }
}


export const signUp = async (userData:SignUpParams) => {
    console.log('userData signUp', userData)
    const {email, password, firstName, lastName} = userData;
    try {
      const {account} = await createAdminClient();
      console.log('account', account)
      const newUserAccount = await account.create(ID.unique(), email, password,`${firstName} ${lastName}`);
      console.log('newUserAccount', newUserAccount)
      const session = await account.createEmailPasswordSession(email, password);
      (await cookies()).set("appwrite-session", session.secret, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: true
      });
      console.log('newUserAccount', newUserAccount)
      return parseStringify(newUserAccount)

    } catch (error) {
        console.error('Error', error)
        throw error
    }
}


export async function getLoggedInUser() {
    try {
        const {account} = await createSessionClient();
        return await account.get();

    } catch (error) {
        console.error('Error', error);
        return null
    }
}