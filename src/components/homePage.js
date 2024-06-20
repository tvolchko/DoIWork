import React from "react";
import { useState } from "react";
import CrewCalendar from "./crewCalendars";
import SiteCalendar from "./siteCalendar";
import ECACrewCalendar from "./ecaCrewCalendar";
import ECASiteCalendar from "./ecaCalendar";


const HomePage = () => {
    const [selected, setSelected] = useState()
    const buttonClick = (e) => {
        

        const destination = e.target.id
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
                <div id="calendarBox" style={(selected) ? {display:'none'} : {display:'flex'}}>
                    
                    <div id="calendarLeft">
                        <button id="Crew" onClick={buttonClick}   >Crew Calendars</button>
                        <br/>
                        <button id="Site" onClick={buttonClick}   >Site Calendar</button>
                    </div>
                    <div id="calendarRight">
                        <button id="ECA" onClick={buttonClick}    >ECA Crew Calendars</button>
                        <br/>
                        <button id="ECASite" onClick={buttonClick}>ECA Calendar</button>
                    </div>
                    
                </div>
                {selected ? <button onClick={reset}>Home</button> : null}
                {selected ? pageSelect(selected) : null}
                
            </>
        )
    // } else {
    //     return <div><h1>Duhhhh</h1>
    //             <button onClick={setSelected(null)}>Reset</button>
    //             </div>
    // }
}

export default HomePage


        // switch (e.target.id) {
        //     case "Crew" : {
        //         setSelected("Crew")
        //         console.log(selected)
        //     }
        //     case "Site" : {
        //         setSelected(true)
        //     }
        //     case "ECA" : {
        //         setSelected(true)
        //     }
        //     case "ECASite" : {
        //         setSelected(true)
        //     }
        //     default: {
                
        //     }
        // }