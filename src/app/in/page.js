"use client";

import s from "./page.module.css"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SendFireBase from "./functions/sendFirebase";
import GEOdata from "./functions/GEO_data";
import DigitalDateTime from "@/app/in/component/digitalDateTime";
import Report from "./component/report";


export default function Page() {
    const [posi, setPosi] = useState("")
    const [report,setReport] = useState()
    const [uName, setUName] = useState("")
    const router = useRouter()
    
    let d = new Date();
    const weekday = ['日', '月', '火', '水', '木', '金', '土'];



    useEffect(()=>{
        console.log(localStorage)
        //職場または名前が入力されていなかったら入力フォームへ飛ばす
        if (localStorage.getItem("workPlace") === "" || localStorage.getItem("userName") === "") {
            router.push("/sign_in")
        }

        const workPlace = localStorage.getItem("workPlace")
        const userName = localStorage.getItem("userName")
        setUName(userName)

        navigator.geolocation.getCurrentPosition(success)
        async function success(position) {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            const geo = await GEOdata(workPlace)
            console.log(geo)
            const latiRange = geo["lati"]
            const longRange = geo["long"]


            //デバック用
            setPosi(`${latitude},${longitude}`)


            if (latitude>latiRange[0] && latitude<latiRange[1] && longitude>longRange[0] && longitude<longRange[1]) {
                SendFireBase(workPlace,userName)
                setReport(<Report result={true} userName={userName}></Report>)
            } else {
                setReport(<Report result={false} userName={userName}></Report>)
            }
        }

    },[])    



    
    return (
        <>
            <div className={s.inPage}>
                <div className={s.timeDisplay}>
                    <p>{posi}</p>
                    <p>{uName}さん</p>
                    <p>{d.getFullYear()}年{d.getMonth() + 1}月{d.getDate()}日[{weekday[d.getDay()]}]</p>
                    <h2><DigitalDateTime></DigitalDateTime></h2>
                </div>
                {report}
            </div>
        </>
    )
}