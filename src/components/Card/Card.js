import React from "react";
//components
import Loading from "../Loading/Loading";
//css
import './Card.css'

const Card = ({loadingData,showData,clima,forecast}) => {

  //fecha actual
   let hoy = new Date();
   let dia= hoy.getDate();
   let mes= hoy.getMonth() + 1;
   let anio=hoy.getFullYear();
   let fecha= dia + ' / ' + mes + ' / ' + anio;
  //iconos del clima
   let iconUrl = '';
   let iconUrl3nextHours= '';
   let iconUrl6nextHours= '';
   let iconUrl9nextHours= '';
  //fechas de las siguientes horas
   let forecastFecha3='';
   let forecastFecha6='';
   let forecastFecha9='';

    if(loadingData){
        return <Loading/>
    }
    if(showData){

      //icono + data clima actual
      let url = 'http://openweathermap.org/img/w/';
      iconUrl = url + clima.weather[0].icon + '.png';
      //icono + data clima despues de 3 horas
      iconUrl3nextHours = url + forecast.list[1].weather[0].icon + '.png';
      //icono + data clima despues de 6 horas
      iconUrl6nextHours = url + forecast.list[2].weather[0].icon + '.png';
       //icono + data clima despues de 9 horas
      iconUrl9nextHours = url + forecast.list[3].weather[0].icon + '.png';

      ///////////////////////////////////
       //fecha despues de 3 horas
       forecastFecha3= forecast.list[1].dt_txt
       //fecha despues de 6 horas
       forecastFecha6= forecast.list[2].dt_txt
       //fecha despues de 9 horas
       forecastFecha9= forecast.list[3].dt_txt

    }

    return(
    <div>
    {
        showData === true ? (
         <div className="container"> 
                    
             <div className="card">    
                  <img src='https://images.pexels.com/photos/1707820/pexels-photo-1707820.jpeg'
                   className="img-background" alt='img'/>
                  <h1 className="weather-name"> Clima de {clima.name} </h1>
                  <h2 className="weather-date"> {fecha}</h2>
                  <div className="weather-info"> {clima.weather[0].description}</div>
                  <div className="background-icon">          
                  <img className='icon-url' src ={iconUrl} alt='weather-icon'/>
                   {Math.round(clima.main.temp - 273.15).toFixed(1)}°C
                  </div>
                  <div className="weather-info">
                    <div>Temperatura Maxima: {Math.round(clima.main.temp_max - 273.15).toFixed(1)}°C</div>
                    <div>Temperatura Minima: {Math.round(clima.main.temp_min - 273.15).toFixed(1)}°C</div>
                  </div>
                  <div className="latitud-longitud">
                    <div className="lat"> Latitud:{Math.round(clima.coord.lat).toFixed(1)} </div>
                    <div className="lat"> Longitud :{Math.round(clima.coord.lon).toFixed(1)}</div>
                    <div className="lat"> Humedad : {clima.main.humidity}% </div>
                    <div className="lat"> Viento a : {clima.wind.speed}m/s </div>
                   </div>
              </div>           
              
              <div className="next-forecast3">
                  <h1 className="weather-name"> tiempo dentro de 3 horas:</h1>  
                  <h2 className="weather-date">{forecastFecha3}hs</h2>
                  <div className="weather-info">  {forecast.list[1].weather[0].description} </div>
                  <div className="background-icon">
                  <img src={iconUrl3nextHours}  alt='icon'/>
                  <h5>{(forecast.list[1].main.temp - 273.15).toFixed(1)}°C </h5>
                  </div>
               </div>

               <div className="next-forecast6">
                  <h1 className="weather-name"> tiempo dentro de 6 horas:</h1>  
                  <h2 className="weather-date">{forecastFecha6}hs</h2>
                  <div className="weather-info">{forecast.list[2].weather[0].description} </div>
                  <div className="background-icon">
                  <img src={iconUrl6nextHours} alt='icon'/>
                  <h5>{(forecast.list[2].main.temp - 273.15).toFixed(1)}°C </h5>
                  </div>
               </div>  

               <div className="next-forecast9">
                 <h1 className="weather-name"> tiempo dentro de 9 horas:</h1>  
                 <h2 className="weather-date">{forecastFecha9}hs</h2>
                 <div className="weather-info">{forecast.list[3].weather[0].description} </div>
                 <div className="background-icon">
                 <img src={iconUrl9nextHours} alt='icon'/>
                 <h5>{(forecast.list[3].main.temp - 273.15).toFixed(1)}°C </h5> 
                 </div>
               </div>

         </div>
        ) : ( <h1 className="weather-ask"> ingrese una localidad. </h1> )
    }   
    </div>
    );
}

export default Card;