"use server";
import { createAdminClient, createSessionClient } from "../appwrite";
import { ID } from "node-appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";


export const signIn = async ({email, password}: SignInProps) => {
  try {
    const { account } = await createAdminClient();
    console.log('signin account', account)
    const response = await account.createEmailPasswordSession(email, password);
     console.log('Session created login:', response);
    //store the session cookie
    (await cookies()).set("appwrite-session", response.secret,{
      path:"/",
      httpOnly:true,
      sameSite:"strict",
      secure:true
    })
    return parseStringify(response)
  } catch (error) {
    console.error("Error", error);
  }
};

export const signUp = async (userData: SignUpParams) => {
  const { email, password, firstName, lastName } = userData;
  try {
    const { account } = await createAdminClient();
    const newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );

    const session = await account.createEmailPasswordSession(email, password);
    (await cookies()).set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(newUserAccount);
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
};


export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error) {
    console.error("Error", error);
    return null;
  }
}

export const logoutAccount = async() => {
    console.log('logout account')
    try {
        const {account} = await createSessionClient();
        await account.deleteSession('current');
        (await cookies()).delete('appwrite-session');

    } catch(error) {
        console.error('Error', error);
        (await cookies()).delete('appwrite-session');
        return null
    }
}
