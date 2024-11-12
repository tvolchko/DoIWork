import React from "react";
import { useState } from "react";

const ECACrewCalendar = () => {
    const [cal, setCal] = useState(null)
    const [year, setYear] = useState(null)
    const calButton = (e) => {
        setCal(e.target.id)
    }
    const setYearButton = (e) => {
        setYear(e.target.id)
        console.log(year)
    }

    const calSelector = () => {
        switch (year) {
            case "2024" : {
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
            case "2025" : {
                switch (cal) {
                    case "A" : {
                        return (<><img src={require('../calendarImages/2025/ecaa-1.png')}/><img src={require('../calendarImages/2025/ecaa-1.png')}/></>)
                    }
                    case "B" : {
                        return (<><img src={require('../calendarImages/2025/ecab-1.png')}/><img src={require('../calendarImages/2025/ecab-2.png')}/></>)
                    }
                    case "C" : {
                        return (<><img src={require('../calendarImages/2025/ecac-1.png')}/><img src={require('../calendarImages/2025/ecac-2.png')}/></>)
                    }
                    case "D" : {
                        return (<><img src={require('../calendarImages/2025/ecad-1.png')}/><img src={require('../calendarImages/2025/ecad-2.png')}/></>)
                    }
                    default: {
                    }
                }
            }

            default: {
            }
        }
    }
    return (
        <>
        <button style={(year === null) ? null : {display:'none'} } id="2024" onClick={setYearButton}>2024 Crew Calendar</button>
        <button style={(year === null) ? null : {display:'none'} } id="2025" onClick={setYearButton}>2025 Crew Calendar</button>
        <div style={(cal === null && year != null) ? null : {display:'none'} }>
            <h2>{year} Shifts</h2>
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

