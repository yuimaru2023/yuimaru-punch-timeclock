"use client";

import DigitalDateTime from "@/app/in/component/digitalDateTime";
import s from "./page.module.css"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SendFireBase from "./functions/sendFirebase";
import Report from "./component/report";


export default function Page() {
    const [alart,setAlart] = useState("")
    const [posi, setPosi] = useState("")
    const router = useRouter()

    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let dayofweek = d.getDay();
    const weekday = ['日', '月', '火', '水', '木', '金', '土'];



    useEffect(()=>{

        if (localStorage.getItem("workPlace") === "" || localStorage.getItem("userName") === "") {
            router.push("/sign_in")
        }

        const workPlace = localStorage.getItem("workPlace")
        const userName = localStorage.getItem("userName")

        navigator.geolocation.getCurrentPosition(success)
        function success(position) {
            console.log(position)
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            const latiRange = [39.0263993,39.0265243]
            const longRange = [141.62617,141.6264092]
            setPosi([latitude,longitude])
            if (latitude>latiRange[0] && latitude<latiRange[1] && longitude>longRange[0] && longitude<longRange[1]) {
                SendFireBase(workPlace,userName,true)
            } else {
                setAlart("敷地内に入ってNFCタグにかざして下さい")
            }
        }

    },[])    



    
    return (
        <>
            <div className={s.inPage}>
                <div className={s.timeDisplay}>
                    <p>{year}年{month}月{day}日[{weekday[dayofweek]}]</p>
                    <h2><DigitalDateTime></DigitalDateTime></h2>
                    <p>{posi}</p>
                </div>
                <Report alart={alart}></Report>
            </div>
        </>
    )
}