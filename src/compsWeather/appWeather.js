import React, { useEffect, useState } from 'react'
import WeatherFrom from './WeatherFrom'
import WeatherInfo from './weatherInfo'
import axios from 'axios'

export default function AppWeather() {
  const [info , setInfo] = useState();

  useEffect(()=>{
    doApi("ashdod")
  },[])

  const doApi = async (_city) => {
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' +_city+ '&appid=4927c7f6659d0bc691c6b751259a2b29&units=metric&lang=he';
    let resp = await axios.get(url);
    setInfo(resp.data);
  }

  

  return (
    <React.Fragment>
        <WeatherFrom doApi={doApi}></WeatherFrom>
       { info && <WeatherInfo infoData={info} />}
    </React.Fragment>
  )
}
