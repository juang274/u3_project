const TeamColors = (props) =>{
    let Tcolor

    switch (props.abbrev) {
        case 'ATL':
        case 'CHI':
        case 'DET':
        case 'HOU':
        case 'MIA':
        case 'POR':
        case 'TOR':
        case 'WAS':
            Tcolor='red'
            break
        case 'BOS':
            Tcolor='green'
            break
        case 'CHA':
        case 'DAL':
        case 'GSW':
        case 'IND':
        case 'LAC':
        case 'MEM':
        case 'MIN':
        case 'NOP':
        case 'OKC':
        case 'ORL':
        case 'PHI':
            Tcolor='darkblue'
            break
        case 'CLE':
            Tcolor='brown'
        case 'DEN':
        case 'LAL':
        case 'UTA':
            Tcolor='gold'
            break
        case 'MIL':
            Tcolor='darkgreen'
            break
        case 'NYK':
        case 'Golden State Warriors':
            Tcolor='orange'
            break
        case 'SAC':
            Tcolor='purple'
            break
    }

    return(
        <div className="">
                <h2 style={{color:Tcolor}}>{props.fullname}</h2>  
               <h2 className = 'styles' style={{color: Tcolor}}>{props.abbrev}</h2>
        </div>
    )
}

export default TeamColors