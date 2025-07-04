import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  React.useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail.page) {
        setCurrentPage(customEvent.detail.page);
      }
    };
    window.addEventListener('navigate', handler as EventListener);
    return () => window.removeEventListener('navigate', handler as EventListener);
  }, []);

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'team':
        return <TeamPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
        <main>
          {renderPage()}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;