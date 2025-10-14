import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/homepage'
import ProfilePage from './pages/profilepage'
import BlogsPage from './pages/blogspage'

function App() {
    return (
        <div className='text-gray-600'>
            <header>
                <Navigation />
            </header>
            <main className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/profile' element={<ProfilePage />} />
                    <Route path='/blogs' element={<BlogsPage />} />
                </Routes>
            </main>
        </div>
    )
}

export default App
