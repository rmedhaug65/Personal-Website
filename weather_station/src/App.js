import { useState, useEffect } from 'react'
import Dap from './components/Map'
import Loader from './components/Loader'
import Header from './components/Header'

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch(process.env.REACT_APP_APIEndPoint)
      const evt = await res.json()

      setEventData(evt)
      setLoading(false)
    }

    fetchEvents()
  }, [])

  return (
    <div>
      { !loading ? <Dap eventData={eventData} /> : <Loader /> }
    </div>
  );
}

export default App;
