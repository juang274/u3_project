import './App.css'
import NBA from './NBAteams.json'
import Team from './components/Team.jsx'

const App = () => {

  return (
    <div>
      <h1>NBA Teams</h1>
      <Team basketball={NBA}/>
  </div>

  )
}



export default App