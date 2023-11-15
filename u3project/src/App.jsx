import './App.css'
import NBA from './NBAteams.json'
import Team from './components/Team.jsx'
import Title from './components/Title.jsx'
import TeamColors from './components/TeamColors.jsx'

const App = () => {


  return (
    <div>
      <Title/>
      <div>
        <Team basketball={NBA}/>
      </div>
 

  </div>

  )
}



export default App