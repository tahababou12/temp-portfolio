import React from 'react'
import { Github, Linkedin, Mail, FileText } from 'lucide-react'

const SocialLinks: React.FC = () => {
  const socialLinks = [
    {
      id: 'linkedin',
      icon: <Linkedin strokeWidth={1.5} />,
      url: 'https://www.linkedin.com/in/tahaababou/',
      label: 'LinkedIn Profile'
    },
    {
      id: 'github',
      icon: <Github strokeWidth={1.5} />,
      url: 'https://github.com/tahababou12',
      label: 'GitHub Profile'
    },
    {
      id: 'email',
      icon: <Mail strokeWidth={1.5} />,
      url: 'mailto:tahababou12@gmail.com',
      label: 'Email Contact'
    },
    {
      id: 'resume',
      icon: <FileText strokeWidth={1.5} />,
      url: 'https://drive.google.com/file/d/1d0_nLHEYijiMREiB56gRUehfX021xLVm/view?usp=sharing',
      label: 'View Resume'
    }
  ]

  return (
    <nav className="flex items-center space-x-6" aria-label="Social Links">
      {socialLinks.map(({ id, icon, url, label }) => (
        <a
          key={id}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-[#ff6b4a] transition-colors duration-200"
          aria-label={label}
        >
          {React.cloneElement(icon, { size: 24 })}
        </a>
      ))}
    </nav>
  )
}

export default SocialLinks
