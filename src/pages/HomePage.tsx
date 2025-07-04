import React from 'react';
import { Star, Users, Briefcase, ArrowRight, CheckCircle, Quote } from 'lucide-react';

const HomePage: React.FC = () => {
  const services = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'AI Automation',
      description: 'Automate your business processes with advanced AI-driven solutions tailored to your needs.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Data Insights',
      description: 'Extract actionable insights from your data to make informed decisions and drive growth.'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'AI-Powered Solutions',
      description: 'Transform your business with AI-driven solutions that enhance efficiency, productivity, and customer experiences.'
    },
  ];

  const clients = [
    'src/assets/images/eleve.png',
    'src/assets/images/logo.png',
    'src/assets/images/onecost.png',
    'src/assets/images/pheme.png',
    'src/assets/images/Techfest.png',
    'src/assets/images/techmin.png',
    'src/assets/images/eleve.png'
  ];

  const testimonials = [ 
    {
      quote: "Working with CreativeStudio transformed our brand completely. Their attention to detail and creative vision exceeded our expectations.",
      author: "Sarah Johnson",
      company: "TechCorp Inc.",
      rating: 5
    },
    {
      quote: "The team delivered exceptional results on time and within budget. Their professionalism and expertise are unmatched.",
      author: "Michael Chen",
      company: "Digital Dynamics",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-secondary transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-dark-primary/10 dark:to-dark-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary dark:text-dark-primary mb-6 animate-slide-up">
            AI-Driven Solutions for
            <span className="text-primary dark:text-dark-primary block">Modern Businesses</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in">
          We build cutting-edge AI solutions that transform ideas into reality. Your ambition, powered by our expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105">
              View Our Work
            </button>
            <button className="border-2 border-primary text-primary dark:text-dark-primary dark:border-dark-primary hover:bg-primary hover:text-white dark:hover:bg-dark-primary dark:hover:text-dark-secondary px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-dark-primary mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From intelligent automation to custom AI software, we provide powerful solutions that drive real results for forward-thinking businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-dark-secondary/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className="text-primary dark:text-dark-primary mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary dark:text-dark-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                {index === 0 ? (
                  <button className="text-primary dark:text-dark-primary hover:text-primary/80 font-semibold flex items-center gap-2 transition-colors duration-200">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button className="text-primary dark:text-dark-primary hover:text-primary/80 font-semibold flex items-center gap-2 transition-colors duration-200">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-dark-primary mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
            Our clients trust us to deliver exceptional results, from startups to established enterprises.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <div className="flex gap-8 items-center py-4" style={{ minWidth: 'max-content' }}>
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-dark-secondary/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center border border-gray-100 dark:border-gray-700 flex-shrink-0"
                >
                  <img src={client} alt="Client Logo" className="mx-auto h-20 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-dark-primary mb-4">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-dark-secondary/50 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <Quote className="w-8 h-8 text-primary dark:text-dark-primary mb-4" />
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-secondary dark:text-dark-primary">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      {testimonial.company}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-primary dark:text-dark-primary fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-dark-primary/10 dark:to-dark-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-dark-primary mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Let's discuss how we can help bring your vision to life
          </p>
          <div className="flex items-center justify-center gap-4 text-secondary dark:text-dark-primary">
            <CheckCircle className="w-5 h-5 text-primary dark:text-dark-primary" />
            <span>hello@creativestudio.com</span>
            <span>|</span>
            <span>+1 (555) 123-4567</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;