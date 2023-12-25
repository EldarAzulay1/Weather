import React from 'react'

export default function WeatherInfo(props) {
  let info = props.infoData;
  return (
    <div className='container text-center mt-3'>
      <h2 className='display-4'>מזווג אוויר בעיר: {info.name} </h2>
      <img src={'https://openweathermap.org/img/w/'+info.weather[0].icon +'.png'} width={150}></img>
      <h3 className='mt-5'>המצב בחוץ: {info.weather[0].description}</h3>
      <h3 style={{direction:"rtl"}}>טמפרטורה: {info.main.temp + "C"} </h3>
      <h3 style={{direction:"rtl"}}>עוצמת הרוח: {info.wind.speed + "km"} </h3>
    </div>
  
  )
}
