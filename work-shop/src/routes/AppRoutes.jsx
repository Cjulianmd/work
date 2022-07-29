
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuApp from '../components/MenuApp';
import Home from '../containers/Home';
import Perfil from '../containers/Perfil';
import Back from '../containers/back';
import Registrer from '../containers/create'
const AppRoutes = () => {
    return (
        <BrowserRouter>      
            <Routes>
                <Route path='/perfil' element={<Perfil/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path="/" element={<Back/>}/>
                <Route path="/Singin" element={<Back/>}/>
                <Route path="/registrer" element={<Registrer/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;

