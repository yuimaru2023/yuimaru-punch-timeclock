import Link from "next/link";

export default function Page () {
    let d = new Date()
    let year = d.getFullYear()
    return(<>
    <h1>lastMonth</h1>
    <table>
    <tbody>
        <tr>
            <th>項目</th>
            <td>内容1</td>
        </tr>
        <tr>
            <th>項目</th>
            <td>内容2</td>
        </tr>
        <tr>
            <th>項目</th>
            <td>内容</td>
        </tr>
        <tr>
            <th>333項目</th>
            <td>{year}</td>
        </tr>
    </tbody>
    </table>
    </>)
}