import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-8">
          {['Home', 'Experience', 'Education', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="nav-link"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;