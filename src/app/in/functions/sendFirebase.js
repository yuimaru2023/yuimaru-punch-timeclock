import db from "@/app/fireOrigin"
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import CheckPosition from "./checkPosition";

export default async function SendFireBase(workPlace,userName,check) {


    if (workPlace==="" || userName === "") {
        // const checkPosition = true
        console.log([{workPlace:workPlace},{userName:userName},{checkPosition:check}])
        return
    }
    console.log([{workPlace:workPlace},{userName:userName},{checkPosition:check}])

    
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let hour = d.getHours()
    let minute = d.getMinutes()
    let seconds = d.getSeconds()
    const time = year+":"+month+":"+day+"_"+hour+":"+minute+":"+seconds


    const docRef = doc(db,`${workPlace}`,`${year}` ,`${month}` ,`${day}`)
    const docSnap = await getDoc(docRef)
    const timeData = {}
    const key = userName

    if(docSnap.exists()) {
        console.log("あるよ、アップデートだよ")
        const value = arrayUnion(time)
        timeData[key]= value;       
        await updateDoc(docRef,timeData)
    } else {         
        console.log("ないよ、追加だよ")
        const value = [time]
        timeData[key] = value
        await setDoc(docRef,timeData)
    }

    // await updateDoc(doc(db,workPlace,"employee"),{userName:arrayUnion(userName)})

    console.log(timeData)
}

//Firestore エラー: TypeError - 'u.indexOf は関数ではありません'
//解決方法：https://copyprogramming.com/howto/typeerror-u-indexof-is-not-a-function-firestore
//firebaseのdoc関数の第2引数以降は、定数や変数ではなくて文字列に変換していれないといけない
//だからテンプレートリテラルを使って文字列に変換