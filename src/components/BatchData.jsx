import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import data2024 from '../data/2024.json'
import data2025 from '../data/2025.json'

export default function BatchData({ batch }) {
  const navigate = useNavigate()
  
  useEffect(() => {
    navigate(`/batch/${batch}`)
  }, [batch, navigate])

  return null
} 