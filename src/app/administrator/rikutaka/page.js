"use client"

import css from "../page.module.css"
import { useEffect, useState } from "react";
import GetEmployee from "../functions/getEmproyee";
import GetMonthData from "../functions/getMonthData";
import MakeHeaderTable from "../component/makeHeaderTable";
import MakeComeOutTable from "../component/makeComeOutTable";
import MakeSumTable from "../component/makeSumTable";
import Link from "next/link";

export default function LastMonth() {
    const workPlace = "rikutaka"
    const [currentDate, setCurrentDate] = useState(new Date());

    //雇用者
    const [headerTable, setHeaderTable] = useState([])
    //勤務時間
    const [sumTable, setSumTable] = useState([])
    //出退勤時刻
    const [comeOutTable, setComeOutTable] = useState([])

    async function dfunc(theYear,theMonth,theWorkPlace){
        const employee = await GetEmployee(theWorkPlace)
        const monthData = await GetMonthData(theYear,theMonth,theWorkPlace)

        //日にちと時間を表示する
        const makeHeaderTable = await MakeHeaderTable(employee)
        const makecomeOutTable = await MakeComeOutTable(monthData,employee)
        const makeSumTable = await MakeSumTable(monthData,employee)
        setHeaderTable(makeHeaderTable)
        setComeOutTable(makecomeOutTable)
        setSumTable(makeSumTable)
        
        
    }
    
    function ChangeMonth (param) { 
        const previousDate = new Date(currentDate);
        
        if (param === 0) {
            if(new Date("2024/1/1").getTime() >= currentDate.getTime()) { return }
            previousDate.setMonth(currentDate.getMonth() - 1);   
        }
        if (param === 1) {
            //もし同じ年、同じ月だったらそれ以上前に進めない
            if (new Date().getMonth() === currentDate.getMonth() && new Date().getFullYear() === currentDate.getFullYear()) { return }
            previousDate.setMonth(currentDate.getMonth() + 1);
        }
        console.log(previousDate,"prev")
        setCurrentDate(previousDate);
        dfunc(previousDate.getFullYear(),previousDate.getMonth()+1,workPlace)
    }
    
    
    //https://vucavucalife.com/table-wo-clipboard-ni-copy-surudakeno-bookmarklet/
    //表のコピー
    
    
    useEffect( ()=>{
        dfunc(currentDate.getFullYear(),currentDate.getMonth() + 1,workPlace)
    },[])
    useEffect(()=>{
        const hoge = document.getElementById("table")
        navigator.clipboard.writeText(hoge.innerText);
    },[sumTable])
    
    
    return(<>
        <div className={css.month}>
            <button className={css.left} onClick={()=>{ChangeMonth(0)}}>　　＜　　</button>
            <span>{currentDate.getFullYear()}年/{currentDate.getMonth() + 1}月</span>
            <button className={css.right} onClick={()=>{ChangeMonth(1)}}>　　＞　　</button>
        </div>
        <div className={css.btnBox}>
            <Link className={css.btn} href="/administrator/itinoseki">一関市</Link>
            <Link className={css.btn} href="/administrator/ousyu">奥州市</Link>
            <Link className={css.selected} href="/administrator/rikutaka">陸前高田市</Link>
        </div>
        <table className={css.table} id="table">
            <tbody>
                {headerTable}
                {sumTable}
                {comeOutTable}
            </tbody>
        </table>
        <Link href="/">Home</Link>
    </>)
}