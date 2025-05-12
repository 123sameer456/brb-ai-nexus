
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check, Users, Trophy, Clock, Target } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'CEO & AI Strategist',
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36',
    },
    {
      name: 'Sophia Lee',
      role: 'CTO & AI Architect',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
    {
      name: 'Marcus Chen',
      role: 'Head of AI Research',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    },
    {
      name: 'Taylor Robinson',
      role: 'AI Solutions Director',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
    },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push boundaries to deliver cutting-edge AI solutions.',
      icon: <Target className="h-8 w-8 text-primary" />,
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in every project and client interaction.',
      icon: <Trophy className="h-8 w-8 text-primary" />,
    },
    {
      title: 'Collaboration',
      description: 'We believe in working closely with our clients for the best outcomes.',
      icon: <Users className="h-8 w-8 text-primary" />,
    },
    {
      title: 'Reliability',
      description: 'We deliver on our promises and stand by our work with pride.',
      icon: <Clock className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About BRB TECHNOLOGIES</h1>
              <p className="text-xl text-white/90 mb-8">
                We're on a mission to empower businesses with cutting-edge AI solutions that drive growth, innovation, and efficiency.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                alt="BRB Technologies Team" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg mb-6">
                BRB TECHNOLOGIES was founded in 2021 by a team of AI experts with a shared vision: to make advanced artificial intelligence accessible to businesses of all sizes.
              </p>
              <p className="text-lg mb-6">
                What began as a small startup has quickly grown into a leading AI agency, working with companies across industries to implement transformative AI solutions.
              </p>
              <p className="text-lg mb-6">
                Today, we're proud to be at the forefront of AI innovation, leveraging technologies like OpenAI, LangChain, HuggingFace, LangGraph, and more to create custom solutions that solve real business challenges.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 text-primary font-bold">
                    50+
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Successful AI Projects</h3>
                    <p className="text-muted-foreground">Delivered to satisfied clients</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 text-primary font-bold">
                    20+
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">AI Experts</h3>
                    <p className="text-muted-foreground">Specializing in various AI domains</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 text-primary font-bold">
                    15+
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Industries Served</h3>
                    <p className="text-muted-foreground">From healthcare to finance to retail</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do at BRB TECHNOLOGIES.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the experts behind BRB TECHNOLOGIES' AI innovations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-muted-foreground mb-4">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose BRB TECHNOLOGIES?</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver AI solutions that drive real results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="flex items-start mb-4">
                <Check className="h-6 w-6 text-white mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Cutting-Edge Technology</h3>
                  <p className="text-white/80">
                    Access to the latest AI models and frameworks, including OpenAI GPT-4, Claude, Llama, and more.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="flex items-start mb-4">
                <Check className="h-6 w-6 text-white mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
                  <p className="text-white/80">
                    Dedicated AI specialists with deep expertise in LangChain, LangGraph, and advanced AI frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="flex items-start mb-4">
                <Check className="h-6 w-6 text-white mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Custom Solutions</h3>
                  <p className="text-white/80">
                    Tailored AI applications designed specifically for your unique business needs and challenges.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="flex items-start mb-4">
                <Check className="h-6 w-6 text-white mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">End-to-End Service</h3>
                  <p className="text-white/80">
                    From strategy and development to deployment and ongoing optimization of your AI solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="flex items-start mb-4">
                <Check className="h-6 w-6 text-white mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Rapid Implementation</h3>
                  <p className="text-white/80">
                    Quick development and deployment cycles to get your AI solutions up and running fast.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="flex items-start mb-4">
                <Check className="h-6 w-6 text-white mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Ongoing Support</h3>
                  <p className="text-white/80">
                    Dedicated technical support and continuous improvement of your AI systems and applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our AI expertise can help you achieve your business goals.
          </p>
          <Link to="/contact">
            <Button className="gradient-bg text-white hover:opacity-90 text-lg py-6 px-8">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
