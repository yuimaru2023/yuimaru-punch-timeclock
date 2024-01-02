import { useEffect, useState } from "react";
import s from "../page.module.css"

export default function Report(p) {

    const [cheer,setCheer] =useState("")
    const [userName,setUserName] = useState("")
    
    let d = new Date();
    let hour = d.getHours()
    let minute = d.getMinutes()
    
    useEffect(()=>{
        setUserName(localStorage.getItem("userName"))
    },[])
    
    useEffect(()=>{
        if(hour>=5 && hour<=12) {
            setCheer(userName+"さんの1日が良い一日になりますように")
        } else {
            setCheer(userName+"さん、今日一日、本当にお疲れさまでした。")
        }
    },[userName])
    
    
    if(p.alart!=="") {
        return (<>
        <p className={s.report}>データは保存されていません<br/>{p.alart}</p>
        </>)
    }

    return (<>
        <p className={s.report}>{hour}時{minute}分<br/>{cheer}</p>
    </>)
}