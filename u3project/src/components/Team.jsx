import { useState } from "react"
import TeamColors from "./TeamColors"


const Team = (props) => {

    return(

        <div className ='display'>
        {props.basketball.map((nba) =>(
            <ul key={nba.teamId}>
                <img className='normal' src={nba.logo} 
                onMouseEnter ={e => (e.currentTarget.src = nba.bestPlayer)}
                onMouseLeave={e=> (e.currentTarget.src = nba.logo)} 
                alt="" height='300' width='300'/>
                
                <TeamColors fullname={nba.teamName} abbrev={nba.abbreviation}/>
            </ul>

        ))}

        </div>
    )

}

export default Team