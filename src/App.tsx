import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoCreate from './Components/TodoCreate'
import TodoList from './Components/TodoList'

function App() {

  return (
    <div>
      <TodoCreate />
      <TodoList />
    </div>
  )
}

export default App
