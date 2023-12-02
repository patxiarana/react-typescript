
import { useEffect, useRef, useState } from 'react'
import List from './components/List'
import './App.css'
import Form from './components/Form'
import { Sub } from './types'


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

interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}




function App() {
  const [subs, setSubs] = useState<AppState['subs']>([])
  const [newSubsNumber, setnewSubsNumber] = useState<AppState['newSubsNumber']>(0)
const divRef =useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])

  const handlenewsub = (newSub : Sub) : void => {
    setSubs(subs => [...subs,newSub])
  }

  return (
    <div className="app" ref={divRef}>
      <h1>Patxi Subs</h1>
      <List subs={subs} />
      <Form onNewSub={handlenewsub} />
    </div>
  )
}

export default App
