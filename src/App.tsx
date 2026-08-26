import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { GlobalSearchModal } from './components/GlobalSearchModal';

// Pages
import { HomePage } from './pages/HomePage';
import { MobilePage } from './pages/MobilePage';
import { DesktopPage } from './pages/DesktopPage';
import { AiPage } from './pages/AiPage';
import { DownloadPage } from './pages/DownloadPage';
import { DocsPage } from './pages/DocsPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { AboutPage } from './pages/AboutPage';
import { SecurityPage } from './pages/SecurityPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { AppPrivacyPage } from './pages/AppPrivacyPage';

function AppContent() {
  const { theme } = useTheme();
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const isLight = theme === 'light';

  // Sync hash and pathname routing
  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '') as PageRoute;
      const pathname = window.location.pathname.replace(/^\//, '') as PageRoute;
      
      const validRoutes: PageRoute[] = [
        'home', 'mobile', 'desktop', 'ai', 
        'download', 'docs', 'resources', 'about', 'security', 
        'contact', 'privacy', 'terms', 'cookies', 'acceptable-use', 'licenses',
        'app-privacy', 'mobile-privacy'
      ];

      if (hash && validRoutes.includes(hash)) {
        setCurrentRoute(hash);
      } else if (pathname && validRoutes.includes(pathname)) {
        setCurrentRoute(pathname);
      }
    };

    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    handleLocationChange();

    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const navigateTo = (route: PageRoute) => {
    setCurrentRoute(route);
    window.location.hash = `/${route}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Standalone in-app privacy policy route (no navbar, no footer) for Android WebView embed
  const isStandaloneAppPrivacy = currentRoute === 'app-privacy' || currentRoute === 'mobile-privacy';

  if (isStandaloneAppPrivacy) {
    return (
      <div className={`min-h-screen font-sans ${
        isLight 
          ? 'bg-[#f5f5f7] text-[#1d1d1f] selection:bg-[#0066cc] selection:text-white' 
          : 'bg-black text-[#fadcd9] selection:bg-[#ba1724] selection:text-white'
      }`}>
        <AppPrivacyPage />
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${
      isLight 
        ? 'bg-[#f5f5f7] text-[#1d1d1f] selection:bg-[#0066cc] selection:text-white' 
        : 'bg-black text-[#fadcd9] selection:bg-[#ba1724] selection:text-white'
    }`}>
      {/* Global Navbar */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Page Route View */}
      <main className="flex-1">
        {currentRoute === 'home' && (
          <HomePage onNavigate={navigateTo} />
        )}

        {currentRoute === 'mobile' && (
          <MobilePage onNavigate={navigateTo} />
        )}

        {currentRoute === 'desktop' && (
          <DesktopPage onNavigate={navigateTo} />
        )}

        {currentRoute === 'ai' && (
          <AiPage onNavigate={navigateTo} />
        )}

        {currentRoute === 'download' && (
          <DownloadPage onNavigate={navigateTo} />
        )}

        {currentRoute === 'docs' && (
          <DocsPage onNavigate={navigateTo} />
        )}

        {currentRoute === 'resources' && (
          <ResourcesPage onNavigate={navigateTo} />
        )}

        {currentRoute === 'about' && (
          <AboutPage onNavigate={navigateTo} />
        )}

        {currentRoute === 'security' && (
          <SecurityPage onNavigate={navigateTo} />
        )}

        {currentRoute === 'contact' && (
          <ContactPage onNavigate={navigateTo} />
        )}

        {(currentRoute === 'privacy' || 
          currentRoute === 'terms' || 
          currentRoute === 'cookies' || 
          currentRoute === 'acceptable-use' || 
          currentRoute === 'licenses') && (
          <LegalPage
            onNavigate={navigateTo}
            defaultDoc={currentRoute}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Global Command Palette / Search Modal (⌘K) */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={navigateTo}
      />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
