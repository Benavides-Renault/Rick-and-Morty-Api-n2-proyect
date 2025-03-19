// import { useRef, useState, useEffect } from "react"
// import { FaSearch } from "react-icons/fa"
// import './Search.css'

// function Search ({setLocationId}) {
//   const [error, setError] = useState('')
//   const inputRef = useRef()

//   const handleClick = () => {
//     const value = inputRef.current.value.trim()
    
//     if (!value) {
//       setError('Please enter a valid location ID')
//       return
//     }

//     if (value <= 1 || value >= 126) {
//       setError('Plase enter a valid Location  ID  between 1 and 126')
//       return
//     }

//     setLocationId(inputRef.current.value)
//     inputRef.current.value = ''
//     setError('')
//   }

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleClick()
//     }
//   }

//   /* ----> <---- */

//   const [query, setQuery] = useState('');
// 	const [suggestions, setSuggestions] = useState([]);
//   const searchRef = useRef(null)

//   const handleInputChange = async (e) => {
//     const value = e.target.value;
//     setQuery(value)

//     if (value.length > 0) {
//       try {
//         const reply = await fetch(`ttps://rickandmortyapi.com/api/location/?name=${value}`)

//         const data =  await reply.json()
//         if (data.results) {
//           setSuggestions (data.results)
//           setError('')
//         } else {
//           setSuggestions([])
//           setError('Not locations Found')
//         }
//       } catch (error) {
//         console.error('Error Fetching Locations:', error)
//         setSuggestions([])
//         setError('An error ocurred while fetching data')
//       }
//     } else {
//       setSuggestions ([])
//       setError ('Please enter a valid Name')
//     }
//   }

//   const handleSuggestionClick = (location) => {
// 		setLocationId(location.id);
// 		setQuery(location.name);
// 		setSuggestions([]);
// 		setError('');
//   }

//   useEffect(() => {
// 		const handleClickOutside = (e) => {
// 			if (searchRef.current && !searchRef.current.contains(e.target)) {
// 				setSuggestions([]);
// 			}
// 		};

// 		document.addEventListener('click', handleClickOutside);

// 		return () => {
// 			document.removeEventListener('click', handleClickOutside);
// 		};
// 	}, []);



//   return (
//     <div className="search" ref={searchRef}>
//       <div className="search_container">
//         <input className="search_input" type="text" ref={inputRef} onKeyDown={handleKeyPress} value={query} onChange={handleInputChange} placeholder= 'Search locanton by Name or Number...'
//         />
//         <button className="search_button" onClick={handleClick}>
//           <FaSearch/>Search
//         </button>
//       </div>
      
//       {error && <p className="search_error">{error}</p>}

//       {suggestions.length > 0 && (
// 				<ul className="suggestions_list">
// 					{suggestions.map((location) => (
// 						<li
// 							key={location.id}
// 							className="suggestion_item"
// 							onClick={() => handleSuggestionClick(location)}
// 						>
// 							{location.name}
// 						</li>
// 					))}
// 				</ul>
// 			)}
//     </div>
//   )
// }

// export default Search

import { useRef, useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "./Search.css";

function Search({ setLocationId }) {
  const [error, setError] = useState("");
  const inputRef = useRef();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const searchRef = useRef(null);

  const handleClick = () => {
    const value = inputRef.current.value.trim();

    if (!value) {
      setError("Please enter a valid location ID or name");
      return;
    }

    if (!isNaN(value)) {
      const id = parseInt(value, 10);
      if (id < 1 || id > 126) {
        setError("Please enter a valid Location ID between 1 and 126");
        return;
      }
      setLocationId(id);
      setQuery("");
      setSuggestions([]);
    } else {
      fetchLocations(value);
    }

    inputRef.current.value = "";
    setError("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const fetchLocations = async (value) => {
    try {
      let url = isNaN(value)
        ? `https://rickandmortyapi.com/api/location/?name=${value}`
        : `https://rickandmortyapi.com/api/location/${value}`;

      const reply = await fetch(url);
      const data = await reply.json();

      if (data.results) {
        setSuggestions(data.results);
        setError("");
      } else if (data.id) {
        setLocationId(data.id);
        setQuery(data.name);
        setSuggestions([]);
        setError("");
      } else {
        setSuggestions([]);
        setError("No locations found");
      }
    } catch (error) {
      console.error("Error fetching locations:", error);
      setSuggestions([]);
      setError("An error occurred while fetching data");
    }
  };

  const handleSuggestionClick = (location) => {
    setLocationId(location.id);
    setQuery(location.name);
    setSuggestions([]);
    setError("");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSuggestions([]);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="search" ref={searchRef}>
      <div className="search_container">
        <input
          className="search_input"
          type="text"
          ref={inputRef}
          onKeyDown={handleKeyPress}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search location by Name or Number..."
        />
        <button className="search_button" onClick={handleClick}>
          <FaSearch />
          Search
        </button>
      </div>

      {error && <p className="search_error">{error}</p>}

      {suggestions.length > 0 && (
        <ul className="suggestions_list">
          {suggestions.map((location) => (
            <li
              key={location.id}
              className="suggestion_item"
              onClick={() => handleSuggestionClick(location)}
            >
              {location.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
