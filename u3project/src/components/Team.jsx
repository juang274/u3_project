import TeamColors from "./TeamColors"






const Team = (props) => {


    return(

        
        <div className ='display'>
        {props.basketball.map((nba) =>(
            <ul key={nba.teamId}>
                <img src={nba.logo} alt="" height='300' width='300'/>
                <h2>{nba.teamName}</h2>
                <TeamColors abbrev={nba.abbreviation}/>
            </ul>

        ))}

        </div>
    )

}

export default Team