import logo from './logo.svg';
import './App.css';
//components
import { Navbar } from './components/Navbar/Navbar';
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import PanelClima from './components/PanelClima/PanelClima';

function App() {
return (
  <div className="App">
    <BrowserRouter>
     <Navbar/>
      <Routes>
         <Route path='/' element={ <PanelClima/> } />
         <Route path='/weather' element={ <h1> Pagina de Clima </h1> } />
         <Route path='/about' element={ <h1>About Us </h1> }  />
         <Route path='*' element={ <h1>Page Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
