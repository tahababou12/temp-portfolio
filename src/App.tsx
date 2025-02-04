import React from 'react'
import SocialLinks from './components/SocialLinks'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white p-8 md:p-12 relative">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between">
        {/* Left Content */}
        <div className="max-w-3xl md:mt-32 mb-8 md:mb-0 justify-between">
          <p className="text-2xl md:text-4xl leading-relaxed font-light">
            My website is currently under-going an update. If you have any questions regarding my previous work, SWE & AI/ML work experience, new projects or anything else —{' '}
            <a 
              href="mailto:tahababou12@gmail.com" 
              className="text-[#ff6b4a] hover:text-[#ff8468] transition-colors duration-200 underline decoration-1 underline-offset-4"
            >
              Get in touch!
            </a>
          </p>
          
          {/* Social Links */}
          <div className="mt-8">
            <SocialLinks />
          </div>
        </div>

        {/* Right Content - Initials */}
        <div className="md:mt-32">
          <span className="text-2xl font-light">TA</span>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
