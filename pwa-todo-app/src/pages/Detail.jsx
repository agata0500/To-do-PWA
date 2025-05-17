import { useParams } from 'react-router-dom'

export default function Detail() {
  const { id } = useParams()
  return <h1>Todo Detail Page - ID: {id}</h1>
}
