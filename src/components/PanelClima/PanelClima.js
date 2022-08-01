import React, {useState} from "react";
//components
import FormClima from "../FormularioClima.js/FormClima";
import Card from "../Card/Card";

const PanelClima = () => {

 let urlOpenWeather = "https://api.openweathermap.org/data/2.5/weather?&appid=3380581c8e2682f167da3a116a3d3155&lang=es";
 let urlCiudad = "&q=";

 let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?&appid=3380581c8e2682f167da3a116a3d3155&lang=es";

 const [ clima,setClima] = useState([]);
 const [ forecast,setForecast] = useState([]);
 const [loading,setLoading] = useState(false);
 const [show, setShow] = useState(false);
 const [ localidad, setLocalidad] = useState("");

 const getLocalidad = async(loc) => {
 
    setLoading(true);
    setLocalidad(loc);

    //clima
    urlOpenWeather = urlOpenWeather + urlCiudad + loc;

    await fetch(urlOpenWeather).then((response) => {
        if(!response.ok) throw{ response}
        return response.json();

    }).then((dataClima) => {
        console.log(dataClima);
        setClima(dataClima);
    }).catch(
        error => {
            console.error(error);
            setLoading(false);
            setShow(false);
    
                <div> error</div>
            
        });

    //forecast

    urlForecast = urlForecast + urlCiudad + loc;
    
    await fetch(urlForecast).then((response) => {
        if(!response.ok) throw{response}
        return response.json();
    }).then((dataForecast) => {
        console.log(dataForecast);
        setForecast(dataForecast);
        //si todo fue bien
        setLoading(false);
        setShow(true);

    }).catch(
        error => {
            console.error(error);
            setLoading(false);
            setShow(false);

                <div> error </div>
        
        });
 }

   return (
     <React.Fragment>
        <FormClima newLocation={getLocalidad}/>
        <Card showData= {show} loadingData={loading} 
                 clima={clima} forecast={forecast}/>
     </React.Fragment>
   );
}
 
 export default PanelClima