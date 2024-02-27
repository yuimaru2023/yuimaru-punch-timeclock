import GetEmployee from "./getEmproyee";


//勤務時間を足していく箱（　{a:0, b:0, c:0}　）を作る
export default async function MakeSumBox (employee) {
    let box = {}
    employee.forEach( el =>{    box[`${el}`] = 0    })

    return box
}
