"use client"

import { useEffect, useState } from "react"


export default function Page(params) {
    const [uName,setUName] = useState("")

    useEffect(()=>{
        const userName = localStorage.getItem("userName")
        setUName(userName)
    },[])
    return (<>
    
    <p>{uName}さんの出勤簿ページ</p>
    </>)
}