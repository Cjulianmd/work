import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Back from '../containers/back';
import Registrer from '../containers/create'

class AppRoutes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Back/>}/>
                    <Route path="/Singin" element={<Back/>}/>
                    <Route path="/registrer" element={<Registrer/>}/>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default AppRoutes;