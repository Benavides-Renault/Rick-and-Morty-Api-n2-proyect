import axios from 'axios';
import { useState } from 'react';

export function useFetchApi() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const request = async (url) => {
		setLoading(true);
		setError(null);
		try {
			const res = await axios.get(url);
			setData(res.data);
		} catch (error) {
			setError(error.response?.data?.message || error.message);
		} finally {
			setTimeout(()=>{
				setLoading(false)
			},500)
		}
	};

	return { data, request, loading, error };
}
