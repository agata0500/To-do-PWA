import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Create({ setTodos }) {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [time, setTime] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTodo = {
      id: Date.now(), // simple unique id
      title,
      text,
      time,
      done: false
    }
    setTodos(prev => [...prev, newTodo])
    navigate('/') // redirect to overview
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Create New Todo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label><br />
          <input value={title} onChange={e => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label><br />
          <textarea value={text} onChange={e => setText(e.target.value)} required />
        </div>
        <div>
          <label>Due Time:</label><br />
          <input type="datetime-local" value={time} onChange={e => setTime(e.target.value)} required />
        </div>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}
