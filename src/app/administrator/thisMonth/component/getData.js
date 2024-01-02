// import db from "@/app/fireOrigin";
// import { doc, getDoc } from "firebase/firestore";

// export default async function GetData(params) {
//     let d = new Date()
//     let year = d.getFullYear()
//     let month = d.getMonth() + 1;
//     // let day = d.getDate();
//     let day = 17;

//     const workPlace = "rikutaka"
//     const docRef = doc(db,`${workPlace}`,`${year}`,`${month}`,`${day}`)
//     const firebaseData = await getDoc(docRef)
//     console.log(firebaseData.data())
//     const thisData = Object.keys(firebaseData.data())
//     return <p>{thisData}</p>
// }