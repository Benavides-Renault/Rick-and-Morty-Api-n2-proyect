import React from 'react';
import ResidentsCard from './ResidentsCard';
import './ResidentsList.css'

function ResidentsList({ residents }) {
	return (
		<>
			{residents.length === 0 && <h2 style={{textAlign: 'center', color: '#70a925'}}> No hay Residentes</h2>}
			<div className="residents">
				{residents.map((resident) => (
					<ResidentsCard key={resident} url={resident} />
				))}
			</div>
		</>
	);
}

export default ResidentsList;
