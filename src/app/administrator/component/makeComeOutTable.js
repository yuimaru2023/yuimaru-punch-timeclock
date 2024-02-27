import GetEmployee from "../functions/getEmproyee";
import css from "../page.module.css"

//勤務時間の表を描画する
export default async function MakeComeOutTable (p,employee) {
    let comeOutTable = []
    
    p.forEach(e => {

        //新しい日のデータが入ってくるごとに　let oneDay = []　で空にする
        let oneDay = []
        const fData = e.data()
        
        
        //既にemployeeがあいうえお順にしてあるから、その順番でfDataから探してくればよい
        employee.forEach((el)=>{
            // console.log(fData[el][1] === undefined)
            if(Object.keys(fData).includes(el)){
                const come = fData[el][0].split(" ")[1]
                let out
                if (fData[el][1] === undefined) {
                    out = ""
                } else {
                    out =  fData[el][1].split(" ")[1]
                }
                oneDay.push(<td className={css.td} key={el}>{come}～{out}</td>)
            } else {
                oneDay.push(<td className={css.td} key={el}></td>)
            }

        })


        comeOutTable.push(<tr key={`day${e.id}`}>
            <td className={css.td} key={`head_day${e.id}`}>{e.id}日</td>{oneDay}
        </tr>)
    });


    return comeOutTable
}



// fData = {
//     a:[2024/01/05 09:00,2024/01/05 15:30], 
//     b:[2024/01/05 09:00,2024/01/05 15:30],
//     c:[2024/01/05 09:00,2024/01/05 15:30]
// }