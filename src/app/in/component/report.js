import { useState } from "react";
import Link from "next/link";
import s from "../page.module.css"

export default function Report(p) {

    const [cheer,setCheer] =useState("")
    
    let d = new Date();
    let hour = d.getHours()
    let minute = d.getMinutes()
    
    console.log(p.userName)

    
    if(p.result) {
        // if(hour>=5 && hour<=12) {
        //     setCheer(+"さんの1日が良い一日になりますように")
        // } else {
        //     setCheer(+"さん、今日一日、本当にお疲れさまでした。")
        // }
        return (<>    
            <div className={s.report}>
                <p>【{hour}時{minute}分】で記録しました。<br/>{cheer}</p>
                <Link className={s.link} href="/myPage">出勤簿を確認</Link>
            </div>
        </>)
    } else {
        return (<>
            <div className={s.report}>
                <p>敷地内ではないので<br/>データは保存されていません</p>
                <Link className={s.link} href="/myPage">
                <div className={s.linkBox} >    <p className={s.linkText}>出勤簿を確認</p>    </div>
                </Link>
            </div>
        </>)
    }
}