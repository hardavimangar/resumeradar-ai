import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-gray-800 px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-white text-xl font-bold">
        ResumeRadar AI
      </Link>
      <div className="flex gap-6">
        <Link to="/" className="text-gray-300 hover:text-white">
          Home
        </Link>
        <Link to="/upload" className="text-gray-300 hover:text-white">
          Upload Resume
        </Link>
        <Link to="/job-description" className="text-gray-300 hover:text-white">
          Job Description
        </Link>
        <Link to="/results" className="text-gray-300 hover:text-white">
          Results
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
