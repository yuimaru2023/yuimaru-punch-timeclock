import db from "@/app/fireOrigin";
import { doc, getDoc } from "firebase/firestore";

//雇用者一覧
export default async function GetEmployee () {
    const workPlace = "rikutaka"
    const employee = await getDoc(doc(db, `${workPlace}`, "employee"))

    //あいうえお順に並べ替える
    let names = employee.data()["userName"]
    names.sort((a, b) => {
        return a.localeCompare(b, 'ja');
    });
   
    return names
}