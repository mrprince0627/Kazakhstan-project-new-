import { useState } from 'react';
import { Menu, X, ChevronDown, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MenuItem {
  name: string;
  path: string;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const resourcesMenu: MenuItem[] = [
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact Us', path: '/contact-us' },
    { name: 'View Our Partners', path: '/our-partners' },
    { name: 'Blog & News', path: '/blog-news' },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Study in Kyrgyzstan</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Home
            </Link>
            <Link to="/universities" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Universities
            </Link>
            <Link to="/about-kyrgyzstan" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              About Kyrgyzstan
            </Link>
            <Link to="/compare" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Compare Universities
            </Link>
            <Link to="/scholarships" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Scholarships
            </Link>
            <Link to="/education-system" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Education System
            </Link>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-red-600 font-medium transition-colors">
                <span>Resources</span>
                <ChevronDown className="w-4 h-4 " />
              </button>

              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 w-60 bg-white shadow-xl rounded-lg mt-0 p-4 border">
                  <ul className="space-y-2">
                    {resourcesMenu.map((item, index) => (
                      <li key={index}>
                        <Link
                          to={item.path}
                          className="block text-gray-600 hover:text-red-600 text-sm transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <Link
              to="/auth"
              className="bg-red-600 text-white px-9 py-2 rounded-lg hover:bg-red-700 transition-colors "
            >
              Sign Up
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="space-y-4">
              <Link to="/" onClick={handleNavClick} className="block text-gray-700 hover:text-red-600 font-medium">
                Home
              </Link>
              <Link to="/universities" onClick={handleNavClick} className="block text-gray-700 hover:text-red-600 font-medium">
                Universities
              </Link>
              <Link to="/about-kyrgyzstan" onClick={handleNavClick} className="block text-gray-700 hover:text-red-600 font-medium">
                About Kyrgyzstan
              </Link>
              <Link to="/compare" onClick={handleNavClick} className="block text-gray-700 hover:text-red-600 font-medium">
                Compare Universities
              </Link>
              <Link to="/scholarships" onClick={handleNavClick} className="block text-gray-700 hover:text-red-600 font-medium">
                Scholarships
              </Link>
              <Link to="/education-system" onClick={handleNavClick} className="block text-gray-700 hover:text-red-600 font-medium">
                Education System
              </Link>

              {/* Resources dropdown in mobile */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-gray-700 hover:text-red-600 font-medium"
                  onClick={() =>
                    setActiveDropdown(activeDropdown === 'resources' ? null : 'resources')
                  }
                >
                  <span>Resources</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'resources' && (
                  <div className="mt-2 pl-4 space-y-2">
                    {resourcesMenu.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        onClick={handleNavClick}
                        className="block text-gray-600 hover:text-red-600 text-sm transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/auth"
                onClick={handleNavClick}
                className="block bg-red-600 text-white px-4 py-2 rounded-lg text-center"
              >
                Sign Up
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;