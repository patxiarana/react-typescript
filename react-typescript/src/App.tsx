
import { useEffect, useState } from 'react'
import List from './components/List'
import './App.css'
import Form from './components/Form'

const INITIAL_STATE = [
  {
    nick: 'dapelu',
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?img=3",
    description: "hace aveces de moderador"
  },
  {
    nick: 'sergio_cerrano',
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?img=4",

  },
]



interface Sub {
  nick: string,
  avatar: string,
  subMonths: number,
  description?: string
}


interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}




function App() {
  const [subs, setSubs] = useState<AppState['subs']>([])
  const [newSubsNumber, setnewSubsNumber] = useState<AppState['newSubsNumber']>(0)

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])

  return (
    <div className="app">
      <h1>Patxi Subs</h1>
      <List subs={subs} />
      <Form />
    </div>
  )
}

export default App
