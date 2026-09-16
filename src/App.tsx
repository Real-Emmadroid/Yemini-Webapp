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
import { DeleteAccountPage } from './pages/DeleteAccountPage';
import { EditorAppPrivacyPage } from './pages/EditorAppPrivacyPage';
import { NotepadAppPrivacyPage } from './pages/NotepadAppPrivacyPage';
import { ConverterAppPrivacyPage } from './pages/ConverterAppPrivacyPage';
import { ShareAppPrivacyPage } from './pages/ShareAppPrivacyPage';

function AppContent() {
  const { theme } = useTheme();
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const isLight = theme === 'light';

  // Sync hash and pathname routing
  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '').toLowerCase();
      const pathname = window.location.pathname.replace(/^\//, '').toLowerCase();
      
      const validRoutes: PageRoute[] = [
        'home', 'mobile', 'desktop', 'ai', 
        'download', 'docs', 'resources', 'about', 'security', 
        'contact', 'privacy', 'terms', 'cookies', 'acceptable-use', 'licenses',
        'delete-account', 'account-deletion',
        'editorapp-privacy', 'notepadapp-privacy', 'converterapp-privacy', 'shareapp-privacy', 'app-privacy', 'mobile-privacy'
      ];

      // Handle common aliases for account deletion
      if (
        hash === 'delete-account' ||
        hash === 'account-deletion' ||
        hash === 'deleteaccount' ||
        hash === 'accountdeletion' ||
        pathname === 'delete-account' ||
        pathname === 'account-deletion' ||
        pathname === 'deleteaccount' ||
        pathname === 'accountdeletion'
      ) {
        setCurrentRoute('delete-account');
        return;
      }

      if (hash && validRoutes.includes(hash as PageRoute)) {
        setCurrentRoute(hash as PageRoute);
      } else if (pathname && validRoutes.includes(pathname as PageRoute)) {
        setCurrentRoute(pathname as PageRoute);
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

  // Standalone in-app privacy policy routes (headless & footerless for Android WebView embeds)
  const isEditorAppPrivacy = currentRoute === 'editorapp-privacy' || currentRoute === 'app-privacy' || currentRoute === 'mobile-privacy';
  const isNotepadAppPrivacy = currentRoute === 'notepadapp-privacy';
  const isConverterAppPrivacy = currentRoute === 'converterapp-privacy';
  const isShareAppPrivacy = currentRoute === 'shareapp-privacy';

  if (isEditorAppPrivacy) {
    return (
      <div className={`min-h-screen font-sans ${
        isLight 
          ? 'bg-[#f5f5f7] text-[#1d1d1f] selection:bg-[#580c14] selection:text-white' 
          : 'bg-black text-[#fadcd9] selection:bg-[#580c14] selection:text-white'
      }`}>
        <EditorAppPrivacyPage />
      </div>
    );
  }

  if (isNotepadAppPrivacy) {
    return (
      <div className={`min-h-screen font-sans ${
        isLight 
          ? 'bg-[#f5f5f7] text-[#1d1d1f] selection:bg-[#580c14] selection:text-white' 
          : 'bg-black text-[#fadcd9] selection:bg-[#580c14] selection:text-white'
      }`}>
        <NotepadAppPrivacyPage />
      </div>
    );
  }

  if (isConverterAppPrivacy) {
    return (
      <div className={`min-h-screen font-sans ${
        isLight 
          ? 'bg-[#f5f5f7] text-[#1d1d1f] selection:bg-[#580c14] selection:text-white' 
          : 'bg-black text-[#fadcd9] selection:bg-[#580c14] selection:text-white'
      }`}>
        <ConverterAppPrivacyPage />
      </div>
    );
  }

  if (isShareAppPrivacy) {
    return (
      <div className={`min-h-screen font-sans ${
        isLight 
          ? 'bg-[#f5f5f7] text-[#1d1d1f] selection:bg-[#580c14] selection:text-white' 
          : 'bg-black text-[#fadcd9] selection:bg-[#580c14] selection:text-white'
      }`}>
        <ShareAppPrivacyPage />
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${
      isLight 
        ? 'bg-[#f5f5f7] text-[#1d1d1f] selection:bg-[#580c14] selection:text-white' 
        : 'bg-black text-[#fadcd9] selection:bg-[#580c14] selection:text-white'
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

        {(currentRoute === 'delete-account' || currentRoute === 'account-deletion') && (
          <DeleteAccountPage onNavigate={navigateTo} />
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
