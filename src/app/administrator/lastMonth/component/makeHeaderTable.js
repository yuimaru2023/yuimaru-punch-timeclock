import css from "../page.module.css"
import GetEmployee from "../functions/getEmproyee";

//表の見出し
export default async function MakeHeaderTable () {
    let nameTable = []
    const employee = await GetEmployee()
    employee.forEach( el => {nameTable.push(<th key={el} className={css.th}>{el}</th>)} )

    return [<th className={css.th}></th>,...nameTable]
}