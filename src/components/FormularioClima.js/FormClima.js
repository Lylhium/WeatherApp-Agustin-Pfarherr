import React , {useState} from 'react'
//css
import './FormClima.css'
//icon-img
import searchIcon from '../../assets/search.png'

const FormClima = ({newLocation}) => {
    const [ ciudad, setCiudad ] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({ciudad});
        if(ciudad == '' || !ciudad) return;
          // en el caso que se incluyo una ciudad :
          newLocation(ciudad);
    }

    return (
    <div className='search'> 
       <form className='search-bar' onSubmit={onSubmit}>
          <div className='input-grupo '>
             <input type="text" className='form-control' placeholder='Buscar' onChange={(e)=> setCiudad(e.target.value)}/>
          <button className='boton-input input-group-text' type='submit'><img src={searchIcon}/></button> 
          </div> 
       </form> 
    </div>

    );
}

   export default FormClima; 