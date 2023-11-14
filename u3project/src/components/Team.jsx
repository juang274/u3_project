
const Team = (props) => {
    return(
        <div className ='display'>
        {props.basketball.map((nba) =>(
            <ul key={nba.teamId}>
                <img src={nba.logo} alt="" height='300' width='300'/>
                <h2>{nba.teamName}</h2>
                <h3>{nba.abbreviation}</h3>   
            </ul>    
        ))}
        </div>
    )

}

export default Team