
const Team = (props) => {
    return(
        <div className ='display'>
        {props.basketball.map((nba) =>(
            <ul key={nba.teamId}>
                <img src={nba.logo} alt="" height='400' width='400'/>
                <h2>{nba.teamName}</h2>
                <h3>{nba.abbreviation}</h3>   
            </ul>    
        ))}
        </div>
    )

}

export default Team