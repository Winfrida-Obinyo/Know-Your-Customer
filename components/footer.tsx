import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiX } from 'react-icons/si'; 

export default function Footer() {
  return (
    <footer className="bg-[#2D2D2D] text-white py-4 w-full">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center space-y-4">
        <div className="text-center">
          <h4 className="text-xl font-semibold">Dev Winfrida</h4>
          <p className="mt-1 text-sm">Passionate Software Engineer delivering creative solutions for the web.</p>
        </div>

        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://github.com"
            className="text-white hover:text-[#BAD59E] transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://linkedin.com"
            className="text-white hover:text-[#BAD59E] transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://x.com" 
            className="text-white hover:text-[#BAD59E] transition duration-300"
            aria-label="X"
          >
            <SiX size={28} />
          </a>
        </div>

        <div className="mt-4 border-t border-white pt-2 text-sm text-center">
          <p>© {new Date().getFullYear()} Dev Winfrida. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
