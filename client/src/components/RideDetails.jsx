import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const RideDetails = (props) => {

  const [ride, setRide] = useState('')

  let {id} = useParams()

  useEffect(() => {
    let selectedRide = props.rides.find((ride) => ride.id === parseInt(id))
    setRide(selectedRide)
  }, [props.rides, id])

  return ride ? (
    <div className="detail">
      <div className="detail-header">
        <img src={ride.image} alt={ride.title} />
          <h1>{ride.title}</h1>
      </div>
        <p>{ride.description}</p>
        <Link to="/rides">Back to Rides</Link>
    </div>
  ) : null;
}

export default RideDetails