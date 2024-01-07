"use client"

import css from "./page.module.css"
import { useEffect, useState } from "react";
import GetMonthData from "./functions/getMonthData";
import MakeHeaderTable from "./component/makeHeaderTable";
import MakeComeOutTable from "./component/makeComeOutTable";
import MakeSumBox from "./functions/makeSumBox";

export default function LastMonth() {

    const [sumTable, setSumTable] = useState([])
    const [headerTable, setHeaderTable] = useState([])
    const [tableData, setTableData] = useState([])

    async function dfunc(param){

        let sumBox = await MakeSumBox()
        const monthData = await GetMonthData(param)
        const makeHeaderTable = await MakeHeaderTable()
        const comeOutTable = await MakeComeOutTable(monthData)
        setHeaderTable(makeHeaderTable)
        setTableData(comeOutTable)


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
            box.push(<td className={css.td}>{sumBox[key]}時間</td>)
        }
        setSumTable(<tr><td>合計</td>{box}</tr>)
    }





    useEffect( ()=>{
        dfunc()
    },[])

    return(<>
        <h1 onClick={()=>{dfunc("itinoseki")}}>Last</h1>
        <div>
            <button className={css.btn}>一関市</button>
            <button className={css.btn}>奥州市</button>
            <button className={css.btn}>陸前高田市</button>
        </div>
        <table className={css.table}>
            <tbody>
                <tr>{headerTable}</tr>
                {sumTable}
                {tableData}
            </tbody>
        </table>
    </>)
}