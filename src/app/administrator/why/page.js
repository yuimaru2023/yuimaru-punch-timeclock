"use client"

import { useState } from "react";

const DisplayDate = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
  
    const showPreviousMonth = () => {
      const previousMonth = new Date(currentDate);
      previousMonth.setMonth(currentDate.getMonth() - 1);
      setCurrentDate(previousMonth);
    };
  
    return (
      <div>
        <button onClick={showPreviousMonth}>前の月</button>
        <h1>{currentDate.toLocaleDateString()}</h1>
      </div>
    );
  };
  
  export default DisplayDate;
// export default function why () {

//     let num = 0
//     const [why, setWhy] = useState(0)


//     function Uoo() {
//         num++
//         setWhy(num)
//     }

//     return (<>
//         <button onClick={Uoo}>aaaaaaaaaaa</button>
//         <h1>{why}</h1>
//     </>)
// }