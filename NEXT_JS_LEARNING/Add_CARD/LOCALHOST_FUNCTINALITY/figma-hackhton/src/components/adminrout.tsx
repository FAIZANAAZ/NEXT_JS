"use client"
import React, { useEffect } from 'react'
import {useUser} from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
const AdminRoute = () => {
    const {isLoaded,user}=useUser()
    const router = useRouter()
    useEffect(() => {
    if(isLoaded ){
        // isloaded ka matlb ye he ke user ke data load ho chuka he yani phly load hony do phir agy brho
      const role =(user?.publicMetadata as {role?:string})?.role
     
      if(role!=="admin" ||!user){
        // user hi he yani esa user jisny signin hi nhi kiya or admint ke rout pr jara he url ke zariye or admint bhi nhi he wo to  home pr redirect ho jaye admint pr na jay
        router.push("/")
      }
    }
    }, [isLoaded,user,router])
    
    // isloded matlb abhi wolod kra he or cheq kra he wha ke kon kon he or kon kon admint he
    // isSignedIn matlb user sign in he ya nhi
    // user matlb user ke data ko get kra he
    console.log(user,"😫");
    
  return (
    <div>
admin route
    </div>
  )
}

export default AdminRoute