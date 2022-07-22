import { useNavigate } from "react-router-dom"

const Rides = (props) => {
  let navigate = useNavigate()

  const renderRides = (ride) => {
    navigate(`${ride.id}`)
  }

  return (
    <div className="rides-grid">
      {
        props.rides.map((ride) => (
          <div className="ride-card" onClick={() => renderRides(ride)} key={ride.id}>
            <img src={ride.img} alt={ride.title}/>
            <h1>{ride.title}</h1>
            <p>{ride.description}</p>
          </div>
        ))
      }
    </div>
  )

}

export default Rides