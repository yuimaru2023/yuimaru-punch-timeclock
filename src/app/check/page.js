"use client"

import Link from "next/link"
import { doc, getDoc, onSnapshot } from "firebase/firestore"
import db from "../fireOrigin";
import { useState, useEffect } from "react";

export default function Page() {
    const [userName,setUserName] = useState("")
    const [punchTimeList,setPunchTimeList] =useState([])
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    

    useEffect( ()=>{
        const workPlace = localStorage.getItem("workPlace")
        const docRef = doc(db,`${workPlace}`,`${year}`,`${month}`,`${day}`)
        onSnapshot(docRef, (doc) => {
            const list = []
            console.log("Current data: ", doc.data());
            const keys = Object.keys(doc.data())
            keys.forEach(el =>{
                const key = el
                list.push(<h3>名前 : {key}</h3>)
                doc.data()[key].forEach(el => {
                    list.push(<p>{el}</p>)
                });

            })
            setPunchTimeList(list)
        });
    },[])





    return (<>
        <Link href="/">Home</Link>
        <h1>確認ページ</h1>
        <div>
            <div>{punchTimeList}</div>
        </div>
    </>)
}