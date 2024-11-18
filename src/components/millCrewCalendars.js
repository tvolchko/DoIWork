import React from "react";
import { useState } from "react";

const MillCrewCalendar = () => {
    const [cal, setCal] = useState(null)
    const [year, setYear] = useState(null)
    const calButton = (e) => {
        setCal(e.target.id)
    }
    const setYearButton = (e) => {
        setYear(e.target.id)
    }

    const calSelector = () => {
        switch (year) {
            case "2024" : {
                switch (cal) {
                    case "A" : {
                        return (<><img src={require('../calendarImages/MillACrew-1.png')}/><img src={require('../calendarImages/MillACrew-2.png')}/></>)
                    }
                    case "B" : {
                        return (<><img src={require('../calendarImages/MillBCrew-1.png')}/><img src={require('../calendarImages/MillBCrew-2.png')}/></>)
                    }
                    case "C" : {
                        return (<><img src={require('../calendarImages/MillCCrew-1.png')}/><img src={require('../calendarImages/MillCCrew-2.png')}/></>)
                    }
                    case "D" : {
                        return (<><img src={require('../calendarImages/MillDCrew-1.png')}/><img src={require('../calendarImages/MillDCrew-2.png')}/></>)
                    }
                    case "E" : {
                        return (<><img src={require('../calendarImages/MillECrew-1.png')}/><img src={require('../calendarImages/MillECrew-2.png')}/></>)
                    }
                    default: {
                    }
                }
            }
            case "2025" : {
                switch (cal) {
                    case "A" : {
                        return (<><img src={require('../calendarImages/2025/milla-1.png')}/><img src={require('../calendarImages/2025/milla-2.png')}/></>)
                    }
                    case "B" : {
                        return (<><img src={require('../calendarImages/2025/millb-1.png')}/><img src={require('../calendarImages/2025/millb-2.png')}/></>)
                    }
                    case "C" : {
                        return (<><img src={require('../calendarImages/2025/millc-1.png')}/><img src={require('../calendarImages/2025/millc-2.png')}/></>)
                    }
                    case "D" : {
                        return (<><img src={require('../calendarImages/2025/milld-1.png')}/><img src={require('../calendarImages/2025/milld-2.png')}/></>)
                    }
                    case "E" : {
                        return (<><img src={require('../calendarImages/2025/mille-1.png')}/><img src={require('../calendarImages/2025/mille-2.png')}/></>)
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
        <button style={(year === null) ? null : {display:'none'} }id="2024" onClick={setYearButton}>2024 Crew Calendar</button>
        <button style={(year === null) ? null : {display:'none'} }id="2025" onClick={setYearButton}>2025 Crew Calendar</button>
        <div style={(cal === null && year != null) ? null : {display:'none'} }>
            <h2>{year} Shifts</h2>
            <button id="A" onClick={calButton}>A</button>
            <button id="B" onClick={calButton}>B</button>
            <button id="C" onClick={calButton}>C</button>
            <button id="D" onClick={calButton}>D</button>
            <button id="E" onClick={calButton}>E</button>
        </div>
        {cal ? calSelector() : null}
        </>
    )
}

export default MillCrewCalendar
