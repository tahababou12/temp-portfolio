import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="absolute bottom-0 left-0 right-0 p-4 text-center text-sm text-gray-600">
      Built with{' '}
      <a
        href="https://bragai.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#ff6b4a] hover:text-[#ff8468] transition-colors duration-200 underline decoration-1 underline-offset-4"
      >
        bRAGAI
      </a>
      {' '}- my new project
    </footer>
  )
}

export default Footer
