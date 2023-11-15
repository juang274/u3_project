const TeamColors = (props) =>{
    let color

    switch (props) {
        case 'Atlanta Hawks':
            color= 'red'
            break;
    
        default:
            break;
    }

    return(
        <div>
            <p className = 'styles' style={{ backgroundColor: color}}>{props.name}</p>
        </div>
    )
}

export default TeamColors