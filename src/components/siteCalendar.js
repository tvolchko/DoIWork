import React from "react";
import { useState } from "react";

const SiteCalendar = () => {
    const [year, setYear] = useState(null)
    const setYearButton = (e) => {
        setYear(e.target.id)
    }
    return (
        <>
            <div style={(year === null) ? null : {display:'none'} }>
            <button id="2024" onClick={setYearButton}>2024 Calendar</button>
            <button id="2025" onClick={setYearButton}>2025 Calendar</button>
            </div>
            {year === "2024" ? <img src={require('../calendarImages/siteCal2024.png')}/> : null}
            {year === "2025" ? <img src={require('../calendarImages/2025/SiteAll.png')}/> : null}
        </>
    )
}

export default SiteCalendar