import css from "../page.module.css"
import GetEmployee from "../functions/getEmproyee";

//表の見出し
export default async function MakeHeaderTable (employee) {
    let nameTable = []
    employee.forEach( el => {nameTable.push(<th key={el} className={css.th}>{el}</th>)} )

    return <tr>{  [<th className={css.th} key="aaaaa"></th>,...nameTable]  }</tr>
}