import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './screens/home/home'
import MainScreen from './screens/MainScreen/MainScreen';
import Login from './screens/Login/Login';



const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to={'/login'}/>}/>
                <Route path='login' element={<Login/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App