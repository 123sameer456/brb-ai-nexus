
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">BRB TECHNOLOGIES</h3>
            <p className="mb-4 text-gray-300">
              Empowering businesses with cutting-edge AI solutions to automate, innovate, and succeed in the digital era.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-primary transition-colors">AI Agents</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary transition-colors">AI Assistants</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary transition-colors">AI Chatbots</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary transition-colors">AI Workflow Solutions</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin size={20} className="shrink-0 mt-1 text-primary" />
                <span className="text-gray-300">123 AI Street, Tech Valley, CA 94000</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={20} className="shrink-0 text-primary" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={20} className="shrink-0 text-primary" />
                <span className="text-gray-300">info@brbtechnologies.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} BRB TECHNOLOGIES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
