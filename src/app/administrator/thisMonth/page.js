import db from "@/app/fireOrigin"
import { doc, onSnapshot } from "firebase/firestore"
// import GetData from "./component/getData"

export default function Page(p) {
    // const [testy,setTesty] = useState([])

    let d = new Date()
    let year = d.getFullYear()
    // let month = d.getMonth() + 1;
    // // let day = d.getDate();
    // let day = 17;

    
    // const list = []
    // const workPlace = "rikutaka"
    // const docRef = doc(db,`${workPlace}`,`${year}`,`${month}`,`${day}`)
    // onSnapshot(docRef, (doc) => {
    //     console.log("Current data: ", doc.data());
    //     const keys = Object.keys(doc.data())
    //     keys.forEach(el =>{
    //         let num = 1
    //         const key = el
    //         list.push(<tr key={key}>名前 : {key}<td>うぇい</td></tr>)
    //         num ++
    //     })
    //     // setTesty(list)
    // });
    // //tbodyのIDを取得(この中で処理します)
    // async function nande (){
    //     const domo = await GetData()
    //     console.log(domo)
    // }

    // nande()


    return (<>
    <h1>thisMonth</h1>
    <table>
    <tbody id="tbodyID"> 
        <tr>
            <th>aaaa</th>
            {/* <td>項目1</td> */}
            {/* <td>項目2</td> */}
            {/* <td>項目3</td> */}
            <td>{year}</td>
            {/* <td><GetData></GetData></td> */}
        </tr>
    </tbody>
    </table>
    </>)
}