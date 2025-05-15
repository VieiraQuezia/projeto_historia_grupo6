// Components
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//.

// Style
  import './App.css'
//.

// Pages
  import Home from './pages/homePage'
  import GuerraCanudos from './pages/guerraCanudos'
  // import GuerraContestado from './pages/guerraContestado'
  // import PrimeiraGuerra from './pages/primeiraGuerra'
  import RevolucaoRussas from './pages/revolucaoRussa'
  import FascismoItaliano from './pages/fascismoItaliano'
  // import Revolucao30 from './pages/revolucao30'
  import Crise29 from './pages/crise29'


function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/canudos' element={<GuerraCanudos/>} /> 
          {/* <Route path='/contestado' element={<GuerraContestado/>} />
          <Route path='/primeira-guerra' element={<PrimeiraGuerra/>} />*/}
          <Route path='/revolucao-russa' element={<RevolucaoRussas/>} /> 
          <Route path='/fascismo' element={<FascismoItaliano/>} />
          {/* <Route path='/revolucao-1930' element={<Revolucao30/>} />*/}
          <Route path='/crise-29' element={<Crise29/>} /> 
          
                
        </Routes>
      </BrowserRouter>

      
    </>
  )
}

export default App;
