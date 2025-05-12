
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-primary/70" />
      </div>
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Transforming Business With <span className="gradient-text">Advanced AI</span> Solutions
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            BRB TECHNOLOGIES helps businesses leverage cutting-edge AI tools like OpenAI, LangChain, and HuggingFace to automate workflows, create intelligent assistants, and boost productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/services">
              <Button className="gradient-bg text-white text-lg py-6 px-8 rounded-lg hover:opacity-90">
                Explore Our Services
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white text-lg py-6 px-8 rounded-lg hover:bg-white/20">
                Contact Us
              </Button>
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-3 gap-4 md:gap-10">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">50+</h3>
              <p className="text-gray-300">AI Projects</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">98%</h3>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">24/7</h3>
              <p className="text-gray-300">Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
