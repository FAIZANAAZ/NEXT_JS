"use server"

import { client } from "@/sanity/lib/client";
import {auth, currentUser} from "@clerk/nextjs/server"

const getUserFromClerk = async () => {
 
   const {userId} =await auth()
   const user= await currentUser();
const userName = `user_${user?.firstName} ${user?.lastName}`
const userEmail = user?.externalAccounts[0].emailAddress
const userImage = user?.imageUrl

// console.log(user, "😎");
// console.log("😎",userName,userEmail,userImage,userId);

return {userName, userEmail, userImage , userId}

   
}

export default getUserFromClerk

export async function sanityPostUserData() {
     const user = await getUserFromClerk();

   const useObject ={
      _type:"user",
      name:user.userName,
      _id:`user-${user.userId}`,
      email:user.userEmail,
      id:user.userId,
      image:user.userImage
     
   }

  const res = client.createOrReplace(useObject)
//   return res   
}