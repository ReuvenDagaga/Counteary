import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DataCenter from './components/DataCenter.tsx'

createRoot(document.getElementById('root')!).render(
    <DataCenter />
)
