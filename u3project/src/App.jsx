import './App.css'
import NBA from './NBAteams.json'
import Team from './components/Team.jsx'
import Title from './components/Title.jsx'
import NBALogo from './components/NBALogo.jsx'

const App = () => {


  return (
    <div>
    <NBALogo/>  
      <Title/>
      <div>
        <Team basketball={NBA}/>
      </div>
 

  </div>

  )
}



export default App