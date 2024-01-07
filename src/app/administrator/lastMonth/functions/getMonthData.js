import db from "@/app/fireOrigin";
import { collection, getDocs } from "firebase/firestore";


export default async function GetMonthData(p) {
    let d = new Date()
    let year = d.getFullYear()
    let month = d.getMonth() + 1;

    const workPlace = "rikutaka"
    const docRef = collection(db,`${workPlace}`,`${year}`,`${month}`)
    const firebaseData = await getDocs(docRef)


    return firebaseData
}