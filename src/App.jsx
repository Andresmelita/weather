import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'
import Loading from './components/Loading'
import coverVideo from '/videos/cover.mp4'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()
  const [loading, setLoading] = useState(false)
  const [backImage, setBackImage] = useState()


  useEffect(()=>{
    const URL = `url(/images/${weather?.weather[0].icon}.jpg)`
    setBackImage(URL)
  },)

  useEffect(() => {
    //Función que se ejecuta cuando llega la información de nuestra ubicación
    const success = pos => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCoords(obj);
    }

    //Esto hace el llamado de la api del navegador, para usar la ubicación actual
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  //---Petición del clima---//
  useEffect (()=>{
    if (coords){
      const APIKEY = "b34a5c2bdf7ff2acdc04ebb0db8ce9de"
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords?.lat}&lon=${coords?.lon}&appid=${APIKEY}`
      axios.get(URL)
        .then(res => {
          const celsius = (res.data.main.temp - 273.15).toFixed(1)
          const farenheit = (celsius * 9 / 5 + 32).toFixed(1)
          setTemperature({celsius, farenheit})
          setWeather(res.data)
        })
        .catch(err => console.log(err))
    }
  }, [coords])

  useEffect (()=>{
    setLoading(true)
    setTimeout(() => {
        setLoading(false)
    },1500)
  },[])

  const backgroundObject = {
    backgroundImage: backImage
  }
  return (
    <div className="App">
      <video className='video' src={coverVideo} autoPlay loop muted />
      {loading ? (
          <Loading loading={loading}/>
        ) : (
          <WeatherCard weather={weather} temperature={temperature}/> 
        )
      }
    </div>
  )
}

export default App
