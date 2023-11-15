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
        case 'LAC':
        case 'MEM':
        case 'MIN':
        case 'NOP':
        case 'OKC':
        case 'ORL':
        case 'PHI':
            Tcolor='darkblue'
            break
    }

    return(
        <div className="">  
               <h2 className = 'styles' style={{color: Tcolor}}>{props.abbrev}</h2>
        </div>
    )
}

export default TeamColors