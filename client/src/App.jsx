import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Upload from './pages/Upload'
import JobDescription from './pages/JobDescription'
import Results from './pages/Results'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/job-description" element={<JobDescription />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App 
