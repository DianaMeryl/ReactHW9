import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Order from './pages/Order';
import Layout from './layout/Layout';
import Nopage from './pages/Nopage';
import ProtectedRoute from './components/ProtectedRoute';
import Private from './pages/Private';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { useState } from 'react';

function App() {
const[isLogged, setIsLogged] =  useState(false);
  return (
    <div>
      <BrowserRouter>
          <button className='btn' onClick={() => setIsLogged(true)}><Link to="/private">Мені більше 18</Link></button>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="order" element={<Order />}/>
                <Route path="*" element={<Nopage />} />
            </Route>
            <Route element={<ProtectedRoute isLogged={isLogged} />}>
                <Route path="/private" element={<Private />}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
