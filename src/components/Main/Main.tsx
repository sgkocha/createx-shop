import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Contacts from '../../pages/Contacts'
import Blog from '../../pages/Blog'
import TrackOrder from '../../pages/TrackOrder'
import Women from '../../pages/Women'

type MainProps = {
    handleCartCount: () => void
}

const Main = ({handleCartCount}:MainProps) => {
    return (
        <Routes>
            <Route
                path='/'
                element={<Home handleCartCount={handleCartCount}/>}            
            />
            <Route
                path='contacts'
                element={<Contacts/>}            
            />
            <Route
                path='blog'
                element={<Blog/>}            
            />
            <Route
                path='track-order'
                element={<TrackOrder/>}            
            />
            <Route
                path='women'
                element={<Women handleCartCount={handleCartCount}/>}            
            />
        </Routes>
    )
}

export default Main