import React from 'react';
import { ExternalLink, Calendar, Tag, Filter } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'AI-Powered Solutions', label: 'AI-Powered Solutions' },
    { id: 'Data Insights', label: 'Data Insights' },
    { id: 'AI Automation', label: 'AI Automation' },
    { id: 'Web Development', label: 'Web Development' },
    { id: 'Digital Marketing', label: 'Digital Marketing' },
    { id: 'UI/UX Design', label: 'UI/UX Design' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Attendance System based on Facial Recognition',
      category: 'AI-Powered Solutions',
      description: 'Developed an attendance system using facial recognition technology to streamline attendance tracking in educational institutions.',
      image: '/images/project/attendance.png',
      tags: ['AI', 'Facial Recognition', 'Attendance System'],
      date: '2025-05-15',
      status: 'completed',
      client: ''
    },
    {
      id: 2,
      title: 'HerHaq',
      category: 'AI-Powered Solutions',
      description: 'Developed a platform that helps women consult regarding legal action to problems they face.',
      image: '/images/project/herhaq.png',
      tags: ['AI', 'Legal Action', 'Women Empowerment'],
      date: '',
      status: 'ongoing',
      client: ''
    },
    {
      id: 3,
      title: 'Arbitrator System',
      category: 'AI-powered Solutions',
      description: 'Developed a system that helps in resolving contract issues in civil engineering.',
      image: 'images/project/arbitrator.png',
      tags: ['AI', 'Dispute Resolution', 'Arbitration'],
      date: '',
      status: 'ongoing',
      client: ''
    },
    // {
    //   id: 4,
    //   title: 'Mobile App Design',
    //   category: 'design',
    //   description: 'Intuitive mobile app design for a fitness tracking application with focus on user experience and accessibility.',
    //   image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600',
    //   tags: ['Mobile Design', 'UX/UI', 'Prototyping'],
    //   date: '2024-03-25',
    //   status: 'ongoing',
    //   client: 'FitLife App'
    // },
    // {
    //   id: 5,
    //   title: 'Corporate Website',
    //   category: 'web',
    //   description: 'Professional corporate website with custom CMS, blog functionality, and integrated contact system.',
    //   image: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=600',
    //   tags: ['Corporate', 'CMS', 'Blog'],
    //   date: '2024-04-05',
    //   status: 'ongoing',
    //   client: 'Global Ventures'
    // },
    // {
    //   id: 6,
    //   title: 'Brand Guidelines System',
    //   category: 'branding',
    //   description: 'Comprehensive brand guidelines system with digital brand book and asset management portal.',
    //   image: 'https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=600',
    //   tags: ['Brand Guidelines', 'Digital Assets', 'System Design'],
    //   date: '2024-04-12',
    //   status: 'ongoing',
    //   client: 'Innovation Labs'
    // }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-secondary transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-dark-primary/10 dark:to-dark-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary dark:text-dark-primary mb-6 animate-slide-up">
            Our Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in">
            Explore our portfolio of successful projects across branding, web development, 
            digital marketing, and design. Each project represents our commitment to excellence.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Filter className="w-5 h-5 text-secondary dark:text-dark-primary" />
            <span className="font-semibold text-secondary dark:text-dark-primary">Filter by Category:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white dark:bg-dark-primary dark:text-dark-secondary'
                    : 'bg-gray-100 dark:bg-gray-700 text-secondary dark:text-dark-primary hover:bg-primary/10 dark:hover:bg-dark-primary/10'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-dark-secondary/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'completed'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      {project.status === 'completed' ? 'Completed' : 'Ongoing'}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-secondary dark:text-dark-primary">
                      {project.title}
                    </h3>
                    <button
                      className="p-2 text-secondary dark:text-dark-primary hover:text-primary dark:hover:text-white hover:bg-primary/10 dark:hover:bg-dark-primary/10 rounded-full transition-all duration-200"
                      onClick={() => {
                        if (project.title.toLowerCase().includes('attendance') || project.title.toLowerCase().includes('facial recog')) {
                          window.open('https://muneebnu.pythonanywhere.com/', '_blank');
                        }
                      }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary/10 dark:bg-dark-primary/10 text-primary dark:text-dark-primary text-sm rounded-full flex items-center gap-1"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Meta */}
                  <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {formatDate(project.date)}
                      </div>
                      <div className="text-secondary dark:text-dark-primary font-medium">
                        {project.client}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-dark-primary mb-4">
              Project Impact
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our projects deliver measurable results and create lasting impact for our clients
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary dark:text-dark-primary mb-2">50+</div>
              <div className="text-secondary dark:text-dark-primary font-medium">Projects Completed</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary dark:text-dark-primary mb-2">300%</div>
              <div className="text-secondary dark:text-dark-primary font-medium">Average ROI Increase</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary dark:text-dark-primary mb-2">25+</div>
              <div className="text-secondary dark:text-dark-primary font-medium">Happy Clients</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary dark:text-dark-primary mb-2">100%</div>
              <div className="text-secondary dark:text-dark-primary font-medium">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-dark-primary/10 dark:to-dark-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-dark-primary mb-4">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Let's collaborate to create something extraordinary that drives results for your business.
          </p>
          <button
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105"
            onClick={() => {
              if (typeof window !== 'undefined' && window.dispatchEvent) {
                window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'contact' } }));
              }
            }}
          >
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
