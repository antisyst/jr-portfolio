import './App.css';
import Navbar from './components/navigation/navigation.component';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './router/home';

function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route index={true} element={<Home/>}/>
        </Routes>
    </Router>
  )
}

export default App
