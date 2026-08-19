import React, { useState, useEffect } from 'react';
import { PageRoute, ExtensionItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { GlobalSearchModal } from './components/GlobalSearchModal';

// Pages
import { HomePage } from './pages/HomePage';
import { MobilePage } from './pages/MobilePage';
import { DesktopPage } from './pages/DesktopPage';
import { AiPage } from './pages/AiPage';
import { ExtensionsPage } from './pages/ExtensionsPage';
import { DownloadPage } from './pages/DownloadPage';
import { DocsPage } from './pages/DocsPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { AboutPage } from './pages/AboutPage';
import { SecurityPage } from './pages/SecurityPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';

export function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedExtension, setSelectedExtension] = useState<ExtensionItem | null>(null);

  // Sync hash routing if present
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '') as PageRoute;
      if (hash && [
        'home', 'mobile', 'desktop', 'ai', 'extensions', 
        'download', 'docs', 'resources', 'about', 'security', 
        'contact', 'privacy', 'terms', 'cookies', 'acceptable-use', 'licenses'
      ].includes(hash)) {
        setCurrentRoute(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (route: PageRoute) => {
    setCurrentRoute(route);
    window.location.hash = `/${route}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenExtensionModal = (ext: ExtensionItem) => {
    setSelectedExtension(ext);
  };

  const handleCloseExtensionModal = () => {
    setSelectedExtension(null);
  };

  return (
    <div className="min-h-screen bg-[#070709] text-zinc-100 flex flex-col font-sans selection:bg-[#5b0000] selection:text-[#ff8585]">
      {/* Global Navbar */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Page Route View */}
      <main className="flex-1">
        {currentRoute === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenExtensionModal={handleOpenExtensionModal}
          />
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

        {currentRoute === 'extensions' && (
          <ExtensionsPage
            onNavigate={navigateTo}
            selectedExtension={selectedExtension}
            onOpenExtensionModal={handleOpenExtensionModal}
            onCloseExtensionModal={handleCloseExtensionModal}
          />
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
        onOpenExtension={(ext) => {
          setSelectedExtension(ext);
          navigateTo('extensions');
        }}
      />
    </div>
  );
}

export default App;
