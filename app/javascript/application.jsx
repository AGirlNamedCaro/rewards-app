import React from 'react'
import {createRoot} from 'react-dom/client'
import Welcome from './components/Welcome'

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('react-root')
    const root = createRoot(container)
    root.render(<Welcome/>)
})