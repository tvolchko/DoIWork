import React from "react";
import { useState } from "react";

const MillCrewCalendar = () => {
    const [cal, setCal] = useState()
    const calButton = (e) => {
        setCal(e.target.id)
    }

    const calSelector = () => {
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
    return (
        <>
        <div style={(cal) ? {display:'none'} : null}>
            <h2>2024 Shifts</h2>
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
