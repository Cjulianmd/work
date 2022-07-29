import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../containers/home';
import Quiz from '../components/Quiz'


class AppRoutes extends Component {
    render() {
        return (
            <BrowserRouter>
            <NavBar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/quiz" element={<Quiz/>}/>
                     
                
                </Routes>
            </BrowserRouter>
        );
    }
}

export default AppRoutes;