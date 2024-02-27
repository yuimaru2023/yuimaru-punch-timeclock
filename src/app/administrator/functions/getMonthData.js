import db from "@/app/fireOrigin";
import { collection, getDocs } from "firebase/firestore";


export default async function GetMonthData(theYear,theMonth,theWorkPlace) {
    theMonth = theMonth.toString().padStart(2, '0');
    
    const docRef = collection(db,`${theWorkPlace}`,`${theYear}`,`${theMonth}`)
    const firebaseData = await getDocs(docRef)


    return firebaseData
}