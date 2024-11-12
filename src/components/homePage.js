import React from "react";
import { useState } from "react";
import CrewCalendar from "./crewCalendars";
import SiteCalendar from "./siteCalendar";
import ECACrewCalendar from "./ecaCrewCalendar";
import ECASiteCalendar from "./ecaCalendar";
import MillCrewCalendar from "./millCrewCalendars";
import MillSite from "./millSite";

const HomePage = () => {
    const [selected, setSelected] = useState()
    // const [hasNextYear, setHasNextYear] = useState()

    const buttonClick = (e) => {
        setSelected(e.target.id)
    }
    const pageSelect = (def) => {
                switch (def) {
            case "Crew" : {
                return <CrewCalendar/>
            }
            case "Site" : {
                return <SiteCalendar/>
            }
            case "ECA" : {
                return <ECACrewCalendar/>
            }
            case "ECASite" : {
                return <ECASiteCalendar/>
            }
            case "Mill" : {
                return <MillCrewCalendar/>
            }
            case "MillSite" : {
                return <MillSite/>
            }
            default: {
                
            }
        }
    }



    const reset = () => {
        setSelected(null)
    }

        return (
            <>
                <h2>Cargill Eddyville</h2>
                <div  id="calendarBox" style={(selected) ? {display:'none'} : {flexWrap:'wrap'}}>
                    
                    <div id="calendarLeft">
                        <button id="Site" onClick={buttonClick}   >Site Calendar</button>
                        <br/>
                        <button id="Crew" onClick={buttonClick}   >Crew Calendars</button>
                    </div>

                    <div id="calendarMiddle">
                        <button id="ECASite" onClick={buttonClick}>ECA Calendar</button>
                        <br/>
                        <button id="ECA" onClick={buttonClick}    >ECA Crew Calendars</button>
                    </div>

                    <div id="calendarRight">
                        <button id="MillSite" onClick={buttonClick}>Mill Calendar</button>
                        <br/>
                        <button id="Mill" onClick={buttonClick}    >Mill Crew Calendars</button> 
                    </div>
                    
                </div>
                {selected ? <button onClick={reset}>Home</button> : null}
                {/* {selected ? <button onClick={reset}>2025 Calendars</button> : null} */}
                {selected ? pageSelect(selected) : null}
                
            </>
        )

}

export default HomePage
