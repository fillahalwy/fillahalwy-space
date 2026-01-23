import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import BlogsPage from './pages/BlogsPage';
import BlogDetail from './pages/BlogDetail';

function App() {
    return (
        <div className='text-gray-600'>
            <header>
                <Navigation />
            </header>
            <main className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/profile' element={<ProjectsPage />} />
                    <Route path='/blogs' element={<BlogsPage />} />
                    <Route path='/blogs/:id' element={<BlogDetail />} />
                </Routes>
            </main>
        </div>
    )
}

export default App
