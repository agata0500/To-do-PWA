import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Overview from './pages/Overview'
import Create from './pages/Create'
import Detail from './pages/Detail'

export default function App() {
  const [todos, setTodos] = useState([])

  return (
    <div>
      <nav style={{ padding: 20 }}>
        <Link to="/">Overview</Link> | <Link to="/create">Create</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Overview todos={todos} />} />
        <Route path="/create" element={<Create setTodos={setTodos} />} />
        <Route path="/todo/:id" element={<Detail todos={todos} />} />
      </Routes>
    </div>
  )
}

