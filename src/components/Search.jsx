import { useRef, useState } from "react"
import './Search.css'

function Search ({setLocationId}) {
  const inputRef = useRef()
  const [error, setError] = useState('')

  const handleClick = () => {
    const value = inputRef.current.value.trim()
    
    if (!value) {
      setError('Please enter a valid location ID')
      return
    }

    if (value <= 1 || value >= 126) {
      setError('Plase enter a valid Location  ID  between 1 and 126')
      return
    }

    setLocationId(inputRef.current.value)
    inputRef.current.value = ''
    setError('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClick()
    }
  }

  return (
    <div className="search">
      <div className="search_container">
        <input className="search_input" type="text" ref={inputRef} onKeyDown={handleKeyPress}/>
        <button className="search_button" onClick={handleClick}>Search</button>
      </div>
      {error && <p className="search_error">{error}</p>}
    </div>
  )
}

export default Search