
import { Bot, MessageSquare, Workflow, Layers, Package, Database, Code, Brain } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  const services = [
    {
      title: 'AI Agents',
      description: 'Intelligent autonomous agents that perform complex tasks and make decisions using advanced AI.',
      icon: <Bot size={28} className="text-white" />,
      technologies: ['LangChain', 'LlamaIndex', 'OpenAI', 'LangGraph']
    },
    {
      title: 'AI Assistants',
      description: 'Custom AI assistants that augment human capabilities and streamline business operations.',
      icon: <MessageSquare size={28} className="text-white" />,
      technologies: ['OpenAI', 'HuggingFace', 'Claude', 'Gemini']
    },
    {
      title: 'AI Chatbots',
      description: 'Conversational AI solutions that engage customers and provide 24/7 automated support.',
      icon: <MessageSquare size={28} className="text-white" />,
      technologies: ['GPT-4', 'Llama', 'Mistral', 'Rasa']
    },
    {
      title: 'Workflow Automations',
      description: 'Intelligent workflow tools that automate repetitive tasks and optimize business processes.',
      icon: <Workflow size={28} className="text-white" />,
      technologies: ['n8n', 'Zapier', 'Make', 'Langflow']
    },
  ];

  const enterpriseServices = [
    {
      title: 'Agentic SaaS Solutions',
      description: 'Enterprise-grade autonomous agent platforms tailored to your specific industry needs.',
      icon: <Bot size={28} className="text-white" />,
      technologies: ['LangGraph', 'Autogen', 'CrewAI']
    },
    {
      title: 'AI SaaS Products',
      description: 'Custom AI software-as-a-service solutions built with enterprise security and scalability.',
      icon: <Package size={28} className="text-white" />,
      technologies: ['OpenAI', 'AWS', 'Azure', 'Vector DBs']
    },
    {
      title: 'No-Code/Low-Code',
      description: 'Powerful AI platforms that empower teams to build solutions without extensive coding.',
      icon: <Code size={28} className="text-white" />,
      technologies: ['LLMOps', 'Flowise', 'FlutterFlow']
    },
    {
      title: 'Departmental Solutions',
      description: 'AI-powered tools for HR, marketing, finance, and other departments to boost productivity.',
      icon: <Database size={28} className="text-white" />,
      technologies: ['RAG', 'OCR', 'NLP', 'Semantic Search']
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Leverage the power of artificial intelligence to transform your business with our comprehensive suite of AI solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/services">
              <Button className="gradient-bg text-white hover:opacity-90">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Enterprise Solutions */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Solutions</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive AI solutions designed for enterprise-scale implementation across your organization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {enterpriseServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 gradient-bg">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Partner with BRB TECHNOLOGIES to leverage cutting-edge AI technologies and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-white/90 text-lg py-6 px-8">
                Get Started
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg py-6 px-8">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Tech Partners */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Technology Partners</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We work with industry-leading AI platforms to deliver the most powerful solutions.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">OpenAI</div>
              <p className="text-sm text-muted-foreground">GPT Models</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">LangChain</div>
              <p className="text-sm text-muted-foreground">AI Frameworks</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">HuggingFace</div>
              <p className="text-sm text-muted-foreground">Open-Source AI</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">Llama</div>
              <p className="text-sm text-muted-foreground">Large Language Models</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">Gemini</div>
              <p className="text-sm text-muted-foreground">Multimodal AI</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
