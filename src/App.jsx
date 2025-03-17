import { useEffect, useState } from 'react';
import { useFetchApi } from './hooks/useFetchApi';
import { getRandomNumber } from './utils';
import Hero from './components/Hero';
import Search from './components/Search';
import LocationInfo from './components/LocationInfo';
import ResidentsList from './components/ResidentsList';

const baseUrl = 'https://rickandmortyapi.com/api/location/';

function App() {
	const { data: location, request, loading } = useFetchApi();
	const [locationId, setLocationId] = useState(getRandomNumber);

	useEffect(() => {
		request(`${baseUrl}/${locationId}`);
	}, [locationId]);

	return (
		<div>
			{/* Hero */}
			<Hero/>

			{/* Search */}
			<Search setLocationId={setLocationId}/>

			{/* LocationInfo */}
      {loading ? <p className='cargando'>Cargando...</p> : (location && <LocationInfo location={location}/>
			)}

			{/* ResidentsList */}
			{location && <ResidentsList residents={location?.residents} />}
			
		</div>
	);
}

export default App;
