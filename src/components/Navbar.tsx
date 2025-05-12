
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/95 shadow-md backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-2xl gradient-text">BRB TECHNOLOGIES</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`}>
            Services
          </Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
            About
          </Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
            Contact
          </Link>
        </div>
        
        <div className="hidden md:block">
          <Link to="/contact">
            <Button className="gradient-bg text-white hover:opacity-90">
              Get Started
            </Button>
          </Link>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-md p-4 flex flex-col space-y-4">
          <Link to="/" className="block px-3 py-2 text-foreground hover:text-primary" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/services" className="block px-3 py-2 text-foreground hover:text-primary" onClick={toggleMenu}>
            Services
          </Link>
          <Link to="/about" className="block px-3 py-2 text-foreground hover:text-primary" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/contact" className="block px-3 py-2 text-foreground hover:text-primary" onClick={toggleMenu}>
            Contact
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            <Button className="w-full gradient-bg text-white hover:opacity-90">
              Get Started
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
