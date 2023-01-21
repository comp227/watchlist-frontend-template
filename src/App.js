import { useState, useEffect } from 'react'
import Show from './components/Show'
import showService from './services/shows'

const App = () => {
  const [shows, setShows] = useState([])

  useEffect(() => {
    showService.getAll().then(shows =>
      setShows( shows )
    )
  }, [])

  return (
    <div>
      <h2>What to watch</h2>
      {shows.map(show =>
        <Show key={show.id} show={show} />
      )}
    </div>
  )
}

export default App
