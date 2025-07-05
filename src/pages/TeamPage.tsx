import React from 'react';
import { Linkedin, Twitter, Mail, Star } from 'lucide-react';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Muneeb',
      role: 'Creative Director',
      bio: 'With over 10 years of experience in brand identity and digital design, Alex leads our creative vision and ensures every project exceeds expectations.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialties: ['Brand Identity', 'Art Direction', 'Strategy'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'alex@creativestudio.com'
      }
    },
    {
      name: 'Sarah Martinez',
      role: 'Lead Developer',
      bio: 'Sarah transforms creative concepts into stunning digital experiences. Her expertise in modern web technologies ensures our solutions are both beautiful and performant.',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialties: ['React', 'Node.js', 'UI/UX'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@creativestudio.com'
      }
    },
    {
      name: 'Michael Johnson',
      role: 'Digital Marketing Strategist',
      bio: 'Michael develops data-driven marketing strategies that amplify brand reach and drive meaningful engagement across all digital channels.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialties: ['SEO', 'Social Media', 'Analytics'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'michael@creativestudio.com'
      }
    },
    {
      name: 'Emily Rodriguez',
      role: 'UX Designer',
      bio: 'Emily creates intuitive user experiences that delight and engage. Her user-centered approach ensures every interaction is meaningful and purposeful.',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialties: ['User Research', 'Prototyping', 'Design Systems'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'emily@creativestudio.com'
      }
    },
    {
      name: 'David Kim',
      role: 'Project Manager',
      bio: 'David ensures projects run smoothly from conception to delivery. His attention to detail and communication skills keep teams aligned and clients happy.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialties: ['Agile', 'Client Relations', 'Quality Assurance'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'david@creativestudio.com'
      }
    },
   
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-secondary transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-dark-primary/10 dark:to-dark-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary dark:text-dark-primary mb-6 animate-slide-up">
            Meet Our Creative Team
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in">
            We're a diverse group of creative professionals passionate about bringing your vision to life. 
            Each team member brings unique expertise and perspective to every project.
          </p>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-primary dark:text-dark-primary mb-2">50+</div>
              <div className="text-secondary dark:text-dark-primary font-medium">Projects Delivered</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-primary dark:text-dark-primary mb-2">15+</div>
              <div className="text-secondary dark:text-dark-primary font-medium">Years Experience</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-primary dark:text-dark-primary mb-2">98%</div>
              <div className="text-secondary dark:text-dark-primary font-medium">Client Satisfaction</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-primary dark:text-dark-primary mb-2">24/7</div>
              <div className="text-secondary dark:text-dark-primary font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-dark-secondary/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden group"
              >
                {/* Member Image */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary dark:text-dark-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary dark:text-dark-primary font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Specialties */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-secondary dark:text-dark-primary mb-2">
                      Specialties:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary/10 dark:bg-dark-primary/10 text-primary dark:text-dark-primary text-sm rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <a
                      href={member.social.linkedin}
                      className="p-2 text-secondary dark:text-dark-primary hover:text-primary dark:hover:text-white hover:bg-primary/10 dark:hover:bg-dark-primary/10 rounded-full transition-all duration-200"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="p-2 text-secondary dark:text-dark-primary hover:text-primary dark:hover:text-white hover:bg-primary/10 dark:hover:bg-dark-primary/10 rounded-full transition-all duration-200"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="p-2 text-secondary dark:text-dark-primary hover:text-primary dark:hover:text-white hover:bg-primary/10 dark:hover:bg-dark-primary/10 rounded-full transition-all duration-200"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-dark-primary/10 dark:to-dark-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-dark-primary mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Our team is excited to collaborate on your next project. Let's create something amazing together.
          </p>
          <button
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105"
            onClick={() => {
              if (typeof window !== 'undefined' && window.dispatchEvent) {
                window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'contact' } }));
              }
            }}
          >
            Start a Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;