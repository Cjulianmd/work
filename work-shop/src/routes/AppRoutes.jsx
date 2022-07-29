import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuApp from '../components/MenuApp';
import Home from '../containers/Home';
import Perfil from '../containers/Perfil';

const AppRoutes = () => {
    return (
        <BrowserRouter>
        <MenuApp />        
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/perfil' element={<Perfil/>}/>
                <Route path='/home' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
