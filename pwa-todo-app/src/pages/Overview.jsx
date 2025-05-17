import { Link } from 'react-router-dom'

export default function Overview({ todos }) {
  const now = new Date()

  return (
    <div style={{ padding: 20 }}>
      <h2>All Todos</h2>

      {todos.length === 0 && <p>No todos yet. Add one!</p>}

      <ul>
        {todos.map(todo => {
          const isPast = new Date(todo.time) < now

          return (
            <li key={todo.id} style={{ marginBottom: 15 }}>
              <strong>{todo.title}</strong> — {todo.done ? '✅ Done' : 'Open'}<br />
              <span>{isPast ? '⏰ Past due' : '🕒 On time'}</span><br />
              <Link to={`/todo/${todo.id}`}>View Details</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
