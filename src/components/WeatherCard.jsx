import React, { useState } from 'react'

const WeatherCard = ({weather, temperature}) => {

    const [isCelsius, setIsCelsius] = useState(true)
    const changeTemperature = () => setIsCelsius(!isCelsius)

    console.log(weather)
    return (
        <article className='card'>
            <h1 className='card_title'>Weather App</h1>
            <h2 className='card_subtitle'>{`${weather?.name}, ${weather?.sys.country}📌`}</h2>
            <section className='card_firstSection'>
                <img className='card_image' src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
            </section>
            <section className='card_secondSection'>
                <h3 className='enunciado'>{weather?.weather[0].description}</h3>
                <ul className='list'>
                    <li className='item'><span><b>Wind Speed: </b></span>{weather?.wind.speed} m/s</li>
                    <li className='item'><span><b>Clouds: </b></span>{weather?.clouds.all} %</li>
                    <li className='item'><span><b>Pressure: </b></span>{weather?.main.pressure} hPa</li>
                </ul>
            </section >
            <h3 className='card_temperature'>🌡️ {isCelsius ? `${temperature?.celsius} °C` : `${temperature?.farenheit} °F`}</h3>
            <button className='card_btn' onClick={changeTemperature}><b>{isCelsius ? 'Change to °F' : 'Change to °C'}</b></button>
        </article>

    )
}

export default WeatherCard