
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: 'Email',
      details: 'info@brbtechnologies.com',
      description: 'For general inquiries and information',
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Monday-Friday, 9am-5pm PST',
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: 'Office',
      details: '123 AI Street, Tech Valley, CA 94000',
      description: 'Our headquarters location',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Have a question about our AI services or want to discuss your project? Contact us today.
          </p>
        </div>
      </section>
      
      {/* Contact Info Cards */}
      <section className="py-12 px-4 -mt-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-lg font-medium mb-1">{item.details}</p>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form below, and our team will get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>
            
            <div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">How We Can Help</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-1">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">AI Strategy Consultation</h4>
                      <p className="text-muted-foreground">
                        Get expert advice on how AI can transform your business operations.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-1">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Custom AI Solution Development</h4>
                      <p className="text-muted-foreground">
                        Discuss your needs for a tailored AI product or service.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-1">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">AI Implementation Support</h4>
                      <p className="text-muted-foreground">
                        Get help integrating AI solutions into your existing systems.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-1">
                      4
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Partnership Opportunities</h4>
                      <p className="text-muted-foreground">
                        Explore potential collaborations and partnerships with us.
                      </p>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
                  <h4 className="font-bold mb-2">Looking for a quick response?</h4>
                  <p className="text-muted-foreground mb-4">
                    For urgent inquiries, please call our support line at +1 (555) 987-6543.
                  </p>
                  <p className="text-sm">
                    Available Monday-Friday, 8am-6pm PST
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="bg-gray-200 h-96 w-full rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Map would be embedded here</p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
