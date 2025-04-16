import { useState } from 'react'
import { AppBar, Drawer } from './components'
import { Home } from './pages';
import { Footer } from './sections';
import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'

function App() {

  const [isDrawerOpen, setDrawerOpen] = useState(null)

  const onClickDrawer = () => {
    setDrawerOpen(true)
  }

  const handleDrawerClose = (e) => {
    e.stopPropagation()
    setDrawerOpen(false)
  }

  return (
    <>
      <AppBar handleDrawer={onClickDrawer}/>
      <Drawer isOpen={isDrawerOpen} closeDrawer={handleDrawerClose}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
