import React from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const ContactPage: React.FC = () => {
  const [state, handleSubmit] = useForm("xanjkgwz");

  const services = [
    'AI Automation ',
    'AI-Product Developement',
    'Data Analytics',
    'Data Visualization ',
    'AI-Powered Solutions',
    'Other'
  ];

  const budgetRanges = [
    '10,000 - 20,000',
    '20,000 - 45,000',
    '45,000 - 100,000',
    '100,000+'
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      content: 'muneebq2003@gmail.com',
      description: 'Send us an email anytime'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      content: '+92 3300 078040',
      description: 'Mon-Fri from 8am to 5pm'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      content: 'On-site Soon',
      description: ''
    }
  ];

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope and complexity. Most projects range from 4-12 weeks, with ongoing projects having flexible timelines.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Yes! We work with clients worldwide and have experience managing projects across different time zones and cultures.'
    },
    {
      question: 'What is your payment structure?',
      answer: 'We typically work with a 50% deposit to start, with the remaining balance due upon project completion. For larger projects, we can arrange milestone payments.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Absolutely! We offer various support packages to ensure your project continues to perform optimally after launch.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-secondary transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-dark-primary/10 dark:to-dark-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary dark:text-dark-primary mb-6 animate-slide-up">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in">
            Ready to bring your vision to life? We'd love to hear about your project 
            and discuss how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-dark-secondary/50 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-secondary dark:text-dark-primary mb-4">
                  Start Your Project
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              {state.succeeded ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-secondary dark:text-dark-primary mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Thank you for reaching out. We'll be in touch soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-secondary dark:text-dark-primary mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary focus:border-transparent bg-white dark:bg-dark-secondary text-secondary dark:text-dark-primary transition-colors duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary dark:text-dark-primary mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary focus:border-transparent bg-white dark:bg-dark-secondary text-secondary dark:text-dark-primary transition-colors duration-200"
                        placeholder="your@email.com"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-secondary dark:text-dark-primary mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary focus:border-transparent bg-white dark:bg-dark-secondary text-secondary dark:text-dark-primary transition-colors duration-200"
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-secondary dark:text-dark-primary mb-2">
                        Service Needed
                      </label>
                      <input
                        type="text"
                        id="service"
                        name="service"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary focus:border-transparent bg-white dark:bg-dark-secondary text-secondary dark:text-dark-primary transition-colors duration-200"
                        placeholder="Service needed"
                      />
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-secondary dark:text-dark-primary mb-2">
                        Budget Range
                      </label>
                      <input
                        type="text"
                        id="budget"
                        name="budget"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary focus:border-transparent bg-white dark:bg-dark-secondary text-secondary dark:text-dark-primary transition-colors duration-200"
                        placeholder="Budget range"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary dark:text-dark-primary mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary focus:border-transparent bg-white dark:bg-dark-secondary text-secondary dark:text-dark-primary transition-colors duration-200 resize-none"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {state.submitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Info Cards */}
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-dark-secondary/50 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 dark:bg-dark-primary/10 rounded-lg text-primary dark:text-dark-primary">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-secondary dark:text-dark-primary mb-1">
                        {info.title}
                      </h3>
                      <p className="text-secondary dark:text-dark-primary font-medium mb-1">
                        {info.content}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Response Time */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-dark-primary/10 dark:to-dark-secondary/20 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-primary dark:text-dark-primary" />
                  <h3 className="text-lg font-bold text-secondary dark:text-dark-primary">
                    Quick Response
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  We typically respond to all inquiries within 24 hours during business days. 
                  For urgent matters, don't hesitate to call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-dark-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Find answers to common questions about our process and services
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-dark-secondary/50 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-start gap-4">
                  <MessageCircle className="w-6 h-6 text-primary dark:text-dark-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-secondary dark:text-dark-primary mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
