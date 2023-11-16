const TeamColors = (props) =>{
    let Tcolor
    let Acolor

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
        case 'GSW':
        case 'IND':
        case 'LAC':
        case 'MEM':
        case 'MIN':
        case 'NOP':
        case 'OKC':
        case 'PHI':
            Tcolor='darkblue'
            break
        case 'DAL':
        case 'ORL':
            Tcolor='royalblue'
            break
        case 'CLE':
            Tcolor='brown'
            break
        case 'DEN':
        case 'LAL':
        case 'UTA':
            Tcolor='gold'
            break
        case 'MIL':
            Tcolor='darkgreen'
            break
        case 'NYK':
        case 'PHX':
            Tcolor='orange'
            break
        case 'SAC':
            Tcolor='purple'
            break
    }

    switch(props.fullname){

        case 'Atlanta Hawks':
        case 'Cleveland Cavaliers':
        case 'Golden State Warriors':
        case 'Indiana Pacers':
        case 'New Orleans Pelicans':
            Acolor='gold'
            break
        case 'Brooklyn Nets':
            Acolor='white'
            break
        case 'Charlotte Hornets':
            Acolor='skyblue'
            break
        case 'Denver Nuggets':
        case 'Washington Wizards':
            Acolor='midnightblue'
            break
        case 'Detroit Pistons':
        case 'New York Knicks':
            Acolor='blue'
            break
        case 'Los Angeles Clippers':
        case 'Philadelphia 76ers':
            Acolor='red'
            break
        case 'Los Angeles Lakers':
        case 'Phoenix Suns':           
            Acolor='purple'
            break
        case 'Oklahoma City Thunder':
            Acolor='orange'
            break


        

    }

    return(
        <div className="">
                <h2 style={{color:Acolor}}>{props.fullname}</h2>  
               <h2 className = 'styles' style={{color:Tcolor}}>{props.abbrev}</h2>
        </div>
    )
}

export default TeamColors