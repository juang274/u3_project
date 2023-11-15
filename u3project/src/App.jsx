import './App.css'
import NBA from './NBAteams.json'
import Team from './components/Team.jsx'
import Title from './components/Title.jsx'

const App = () => {

  return (
    <div>
      <Title/>
      <Team basketball={NBA}/>
  </div>

  )
}



export default App