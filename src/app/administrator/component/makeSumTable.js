import MakeSumBox from "../functions/makeSumBox"
import css from "../page.module.css"

export default async function MakeSumTable (monthData,employee) {
    let sumBox = await MakeSumBox(employee)

    monthData.forEach((e)=>{
        const fData = e.data()
        
        //箱に合計時間を足していく
        for ( let key in fData ) {
            const come = new Date( fData[key][0] )
            const out =  new Date( fData[key][1] )
            
            // diff：当日の勤務時間
            const diff = (out.getTime() - come.getTime())/(60*60*1000)
            sumBox[`${key}`] = sumBox[`${key}`] + diff
        }

    })
    
    //その月の合計勤務時間を描画する
    let box = []
    for (const key in sumBox) {
        box.push(<td className={css.td} key={key}>{parseFloat(sumBox[key].toFixed(2))}時間</td>)
    }

    return <tr><td className={css.td}>合計</td>{box}</tr>
}