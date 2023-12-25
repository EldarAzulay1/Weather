import React , {useRef} from 'react'

export default function WeatherFrom(props) {
  const inputCity = useRef();
  return (
    <div style={{direction:'rtl'}} className="container-fluid bg-warning p-2">
      <div className='container'>
        <div className='row'>
          <div  className="logo col-auto text-light">
            <h2 >תחזית מזווג אויר</h2>
          </div>
          <div className="d-flex col-md-4 ">
            <input ref={inputCity} className='form-control' id="id_input" placeholder='חפש עיר' type='search'></input>
            <button className="btn btn-dark me-3" onClick={() => props.doApi(inputCity.current.value)}>חפש</button>
          </div>
        
        </div>
      </div>
    </div>
  )
}
