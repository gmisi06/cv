import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/Profile'
import Content from './components/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen bg-slate-800 flex flex-row gap-14 p-32 overflow-hidden">
      <Profile />
      <Content />
    </div>
  )
}

export default App
