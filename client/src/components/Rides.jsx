import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from "react"

const BASE_URL = 'http://localhost:3001'

const Rides = () => {
  let navigate = useNavigate()

  const [ride, setRide] = useState('')

  const showRideDetails = (ride) => {
    navigate(`${ride._id}`)
  }
  
  useEffect(() => {
    const getAttractions = async() => {
      console.log('get attractions')
      let res = await axios.get(`${BASE_URL}/rides`)
        console.log(res.data)
        setRide(res.data)
      }
    getAttractions()
}, [])

  return (
    <div className="rides-grid">
      { ride ? 
        ride.map((rollercoaster) => (
          <div className="ride-card" onClick={() => showRideDetails(rollercoaster)} key={rollercoaster._id}>
            <img src={rollercoaster.image} alt={rollercoaster.title}/>
            <h1>{rollercoaster.title}</h1>
          </div>
        ))
       : '' }
    </div>
  )
}

export default Rides