import './LocationInfo.css'

function LocationInfo ({location }) {
  const length = location.residents.length
  
  return (
    <div className="locationInfo">
      <div className='locationInfo_container'>
        <h2 className='locationInfo_name'>{(location.name)}</h2>
        <ul className='locationInfo_info'>
          <li className='locationInfo_item'><span className='locationInfo_spam'>Type</span> {location.type}</li>
          <li className='locationInfo_item'><span className='locationInfo_spam'>Dimension</span> {location.dimension}</li>
          <li className='locationInfo_item'><span className='locationInfo_spam'>Population</span> {length}{' '} {length === 1 ? 'Resident' : 'Residents'}</li>
        </ul>
      </div>
    </div>
  )
}

export default LocationInfo