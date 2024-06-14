import React from "react";
import { useState } from "react";

const ECACrewCalendar = () => {
    const [cal, setCal] = useState()
    const calButton = (e) => {
        setCal(e.target.id)
    }

    const calSelector = () => {
          switch (cal) {
                case "A" : {
                    return (<><img src={require('../calendarImages/ECAcal2024A1.png')}/><img src={require('../calendarImages/ECAcal2024A2.png')}/></>)
                }
                case "B" : {
                    return (<><img src={require('../calendarImages/ECAcal2024B1.png')}/><img src={require('../calendarImages/ECAcal2024B2.png')}/></>)
                }
                case "C" : {
                    return (<><img src={require('../calendarImages/ECAcal2024C1.png')}/><img src={require('../calendarImages/ECAcal2024C2.png')}/></>)
                }
                case "D" : {
                    return (<><img src={require('../calendarImages/ECAcal2024D1.png')}/><img src={require('../calendarImages/ECAcal2024D2.png')}/></>)
                }
                default: {
                }
            }
    }
    return (
        <>
        <div style={(cal) ? {display:'none'} : null}>
            <h2>2024 Shifts</h2>
            <button id="A" onClick={calButton}>A</button>
            <button id="B" onClick={calButton}>B</button>
            <button id="C" onClick={calButton}>C</button>
            <button id="D" onClick={calButton}>D</button>
        </div>
        {cal ? calSelector() : null}
        </>
    )
}

export default ECACrewCalendar

