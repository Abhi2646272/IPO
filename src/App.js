 import './App.css';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Login from './Login';
import Navbar from './Navbar';
import Register from './Register';
import Dashboard from './Dashboard';
import { DarkModeProvider } from './DarkModeContext';
import Footer from './Footer';
function App() {
  return (
    <DarkModeProvider>
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
       
      </Routes>
      <Footer/>
     
    </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
