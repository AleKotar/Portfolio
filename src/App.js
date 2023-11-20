import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Components/Home'
import Github from './Components/Github'
import Resume from './Components/Resume'
import Contact from './Components/Contact'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="github" element={<Github />} />

          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="resume" element={<Resume />} />
      </Routes>
    </>
  )
}

export default App
