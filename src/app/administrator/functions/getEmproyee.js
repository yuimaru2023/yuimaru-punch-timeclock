import db from "@/app/fireOrigin";
import { doc, getDoc } from "firebase/firestore";

//雇用者一覧
export default async function GetEmployee (theWorkPlace) {
    
    const employee = await getDoc(doc(db, `${theWorkPlace}`, "employee"))
    
    //あいうえお順に並べ替える
    let names = employee.data()["userName"]
    console.log(names)
    names.sort((a, b) => {
        return a.localeCompare(b, 'ja');
    });
    
    return names
}

//ワンタイムパスワード
//masterを持っていない人が特定のURLでサイトを開くと
//