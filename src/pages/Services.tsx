
import { Bot, MessageSquare, Workflow, Package, Code, Database, Brain, Layers } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const allServices = [
    {
      title: 'AI Agents',
      description: 'Autonomous AI agents that perform complex tasks, make decisions, and learn from interactions using cutting-edge technologies.',
      icon: <Bot size={28} className="text-white" />,
      technologies: ['LangChain', 'LlamaIndex', 'OpenAI', 'LangGraph'],
      category: 'agents'
    },
    {
      title: 'AI Assistants',
      description: 'Intelligent assistants that understand context, provide insights, and help users accomplish tasks efficiently.',
      icon: <MessageSquare size={28} className="text-white" />,
      technologies: ['OpenAI', 'HuggingFace', 'Claude', 'Gemini'],
      category: 'assistants'
    },
    {
      title: 'AI Chatbots',
      description: 'Conversational interfaces that engage users, provide support, and deliver personalized experiences 24/7.',
      icon: <MessageSquare size={28} className="text-white" />,
      technologies: ['GPT-4', 'Llama', 'Mistral', 'Rasa'],
      category: 'chatbots'
    },
    {
      title: 'Workflow Automations',
      description: 'Smart AI-powered workflow solutions that streamline operations, reduce manual work, and improve efficiency.',
      icon: <Workflow size={28} className="text-white" />,
      technologies: ['n8n', 'Zapier', 'Make', 'Langflow'],
      category: 'workflow'
    },
    {
      title: 'Agentic SaaS',
      description: 'Enterprise-grade autonomous agent platforms that solve complex business problems with minimal human intervention.',
      icon: <Bot size={28} className="text-white" />,
      technologies: ['LangGraph', 'Autogen', 'CrewAI', 'ReAct'],
      category: 'saas'
    },
    {
      title: 'AI SaaS Products',
      description: 'Customizable AI software solutions delivered as services with enterprise security and seamless integration.',
      icon: <Package size={28} className="text-white" />,
      technologies: ['OpenAI', 'AWS', 'Azure', 'Vector DBs'],
      category: 'saas'
    },
    {
      title: 'No-Code/Low-Code Solutions',
      description: 'AI platforms that enable teams to create powerful applications with minimal coding knowledge required.',
      icon: <Code size={28} className="text-white" />,
      technologies: ['LLMOps', 'Flowise', 'FlutterFlow', 'Bubble'],
      category: 'low-code'
    },
    {
      title: 'Departmental Solutions',
      description: 'Specialized AI tools for HR, marketing, finance, and other departments to enhance productivity and decision-making.',
      icon: <Database size={28} className="text-white" />,
      technologies: ['RAG', 'OCR', 'NLP', 'Semantic Search'],
      category: 'department'
    },
    {
      title: 'Multi-Agent Systems',
      description: 'Advanced ecosystems of AI agents that collaborate to solve complex tasks requiring multiple specialized capabilities.',
      icon: <Brain size={28} className="text-white" />,
      technologies: ['LangGraph', 'Autogen', 'CrewAI', 'MARL'],
      category: 'agents'
    },
    {
      title: 'Enterprise AI Integration',
      description: 'Seamless integration of AI capabilities into existing enterprise systems and workflows.',
      icon: <Layers size={28} className="text-white" />,
      technologies: ['API Integrations', 'ETL', 'Custom Connectors'],
      category: 'department'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our AI Services</h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Comprehensive AI solutions tailored to transform your business operations and drive innovation.
          </p>
        </div>
      </section>
      
      {/* Services */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Technologies */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Technology Stack</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We leverage the latest AI technologies and frameworks to build powerful solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Large Language Models</h3>
              <ul className="space-y-2">
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-2"></span> GPT-4o and GPT-4.5-Turbo (OpenAI)</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-2"></span> Claude 3 Opus and Haiku (Anthropic)</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-2"></span> Llama 3 (Meta)</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-2"></span> Gemini Ultra and Pro (Google)</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-2"></span> Mixtral and Mistral (Mistral AI)</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">AI Development Frameworks</h3>
              <ul className="space-y-2">
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-2"></span> LangChain and LangChain.js</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-2"></span> LangGraph for agent workflows</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-2"></span> LlamaIndex for data processing</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-2"></span> HuggingFace Transformers</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-2"></span> CrewAI and AutoGen for multi-agent systems</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Infrastructure & Tools</h3>
              <ul className="space-y-2">
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-2"></span> Vector databases (Pinecone, Weaviate, Qdrant)</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-2"></span> n8n and Make for workflow automation</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-2"></span> Flowise and Langflow for no-code AI</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-2"></span> AWS, Azure, and GCP AI services</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-2"></span> LLMOps and MLOps tools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 px-4 bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our AI services can transform your business.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-primary hover:bg-white/90 text-lg py-6 px-8">
              Contact Our Team
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
