"use client";

import s from "./page.module.css"
import { useState } from "react"
import { useRouter } from "next/navigation";
import Link from "next/link";
import db from "../fireOrigin";
import { updateDoc, doc, arrayUnion } from "firebase/firestore";


export default function Page() {
    const [userName,setUserName] = useState("")
    const [workPlace,setWorkPlace] = useState("")
    const [alert, setAlert] = useState("")
    const router = useRouter()
    
    async function setData() {
        localStorage.setItem("userName",userName)
        localStorage.setItem("workPlace",workPlace)
        if (userName === "" || workPlace === "") {
            console.log("userName",userName,"workPlace",workPlace)
            setAlert("お名前、または働く場所が入力されていません")
            //アカウントが被っていないかどうかもチェックする必要がある
        } else {
            await updateDoc(doc(db,workPlace,"employee"),{userName:arrayUnion(userName)})
            router.push("/navigate_nfc")
        }
    }



    return (
        <>
        <Link href="/">Home</Link>
        <div className={s.signin}>
            <h1 className={s.pageTitle}>メンバー登録</h1>


            <section className={s.section}>
                <p className={s.sectionTitle}>お名前</p>
                <div className={s.inputBox}>
                    <input
                        className={s.nameInput}
                        value={userName}
                        onChange={(event) => setUserName(event.target.value)}
                        placeholder=""
                    />
                </div>
            </section>

            <section className={s.section}>
                <p className={s.sectionTitle}>働く場所</p>
                <div className={s.labelBox}>
                    <label className={s.label}>    <input type="radio" name="workPlace" value="rikutaka" onChange={(e) => setWorkPlace(e.target.value)}/>  陸前高田市    </label>
                    <label className={s.label}>    <input type="radio" name="workPlace" value="itinoseki"onChange={(e) => setWorkPlace(e.target.value)}/>  一関市    </label>
                </div>
            </section>

            <button className={s.doneBtn} onClick={setData}>決定</button>
            <p className={s.alert}>{alert}</p>


        </div>
        </>
    )
}