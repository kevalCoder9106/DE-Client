import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* React Pages */}
          <Route  path='/home' element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </>      
  );
}

export default App;