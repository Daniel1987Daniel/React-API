import { useState, useEffect } from "react"

const App = () => {

  const url = "http://api.open-notify.org/iss-now.json"
  let [latitude, setLatitude] = useState("")  
  let [longitude, setLongitude] = useState("")
  const [urlMap, setUrlMap] = useState("")
  
  const getCoordinates = async () => {
    const response = await fetch(url)
    const data = await response.json()
    latitude = data["iss_position"]["latitude"]
    longitude = data["iss_position"]["longitude"]
    setLatitude(latitude)
    setLongitude(longitude)

    const iss_lat = data["iss_position"]["latitude"]
    const iss_long = data["iss_position"]["longitude"]
    setUrlMap(
     `https://en.mapy.cz/zakladni?x=${iss_long}&y=${iss_lat}z=10`
    )}

    useEffect(() => {
      getCoordinates()
    }, [])

  return (
    <div>   
      <h1 className="title">API</h1>
      <main>
        <h4>Latitude</h4>
        <p>{latitude}</p>
        <h4>Longitude</h4>
        <p>{longitude}</p>
      </main>
      <footer>
        <button className="btn-1">
          <a href={urlMap} rel="noreferrer" target="_blank">Open in maps</a>
        </button>
        <button className="btn-2" onClick={upadetDataBtn}>Update data</button>
      </footer>
    </div>
  )
}

export default App
