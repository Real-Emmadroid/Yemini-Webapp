import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const ConverterAppPrivacyPage: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className={`min-h-screen py-10 px-4 sm:px-8 lg:px-12 font-sans transition-colors ${
      isLight ? 'bg-white text-zinc-800' : 'bg-[#070709] text-zinc-300'
    }`}>
      <article className="max-w-4xl mx-auto space-y-10 text-sm sm:text-base leading-relaxed">
        
        {/* Document Header */}
        <header className={`space-y-4 pb-8 border-b ${
          isLight ? 'border-zinc-200' : 'border-zinc-800/80'
        }`}>
          {/* Preserved clearance space */}
          <div className="h-6" aria-hidden="true" />
          <h1 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isLight ? 'text-zinc-900' : 'text-white'
          }`}>
            Privacy Policy for Yemini Converter
          </h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-zinc-500">
            <span><strong>Effective Date:</strong> January 1, 2026</span>
            <span>•</span>
            <span><strong>Application:</strong> Yemini Converter (Android)</span>
            <span>•</span>
            <span><strong>Provider:</strong> STF Ecosystem (Sphere Tech Foundation)</span>
          </div>
        </header>

        {/* Introduction */}
        <section className="space-y-4">
          <p className={`text-base sm:text-lg ${isLight ? 'text-zinc-900' : 'text-zinc-200'}`}>
            This Privacy Policy describes how <strong>Yemini Converter</strong> (&ldquo;the App,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), provided by <strong>STF Ecosystem (Sphere Tech Foundation)</strong>, handles information when you use our Android application.
          </p>
        </section>

        {/* Section 1: Summary */}
        <section className="space-y-4">
          <h2 className={`text-xl sm:text-2xl font-bold tracking-tight ${isLight ? 'text-zinc-900' : 'text-white'}`}>
            1. Summary
          </h2>
          <div className={`p-4 sm:p-5 border space-y-2 ${
            isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-zinc-900/90 border-zinc-800'
          }`}>
            <h3 className={`text-sm font-bold uppercase tracking-wider font-mono ${
              isLight ? 'text-zinc-900' : 'text-white'
            }`}>
              On-Device Offline Processing
            </h3>
            <p className={`text-sm leading-relaxed ${isLight ? 'text-zinc-700' : 'text-zinc-300'}`}>
              Yemini Converter is designed to work <strong>fully offline</strong>. In its current version, <strong>all file conversions (images, audio, and documents) happen entirely on your device</strong>. We do not collect, transmit, or store your files, and we do not require an account to use the App.
            </p>
          </div>
        </section>

        {/* Section 2: Information We Do Not Collect */}
        <section className="space-y-3">
          <h2 className={`text-xl sm:text-2xl font-bold tracking-tight ${isLight ? 'text-zinc-900' : 'text-white'}`}>
            2. Information We Do Not Collect
          </h2>
          <p>
            We do not collect the following:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>File Content:</strong> The content of any files you convert (images, audio, PDFs, documents, archives).</li>
            <li><strong>File Metadata:</strong> File names, metadata, or folder locations on your device.</li>
            <li><strong>Personal Identifiers:</strong> Your name, email address, or phone number.</li>
            <li><strong>Location Data:</strong> Precise or approximate GPS and network geolocation.</li>
            <li><strong>Device Contacts:</strong> Contacts or other personal device data.</li>
          </ul>
        </section>

        {/* Section 3: How the App Accesses Your Files */}
        <section className="space-y-3">
          <h2 className={`text-xl sm:text-2xl font-bold tracking-tight ${isLight ? 'text-zinc-900' : 'text-white'}`}>
            3. How the App Accesses Your Files
          </h2>
          <p>
            To convert a file, the App needs to read the file you select and write the converted output back to your device storage. This is done using Android&apos;s built-in file access system (<strong>Storage Access Framework / Scoped Storage</strong>), which means:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Explicit Selection:</strong> You choose which files the App can access, one at a time, through the native Android system file picker.</li>
            <li><strong>Scoped Boundaries:</strong> The App does not have broad access to your entire device storage.</li>
            <li><strong>Local Destination:</strong> Converted files are saved locally to a folder on your device that you control.</li>
            <li><strong>Zero Server Uploads:</strong> Files never leave your device during this process — there is no upload to any external server or cloud service.</li>
          </ul>
        </section>

        {/* Section 4: Permissions */}
        <section className="space-y-3">
          <h2 className={`text-xl sm:text-2xl font-bold tracking-tight ${isLight ? 'text-zinc-900' : 'text-white'}`}>
            4. Permissions
          </h2>
          <p>
            The App may request the following permissions:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Storage / File Access (READ_EXTERNAL_STORAGE / Storage Access Framework):</strong> Required to let you pick files to convert and save the converted output to your chosen directory.</li>
            <li><strong>Notifications (POST_NOTIFICATIONS):</strong> Optional; used strictly to inform you when a background file conversion batch is complete.</li>
          </ul>
          <p>
            We only request permissions strictly necessary for the App&apos;s core file conversion functionality.
          </p>
        </section>

        {/* Section 5: Third-Party Services */}
        <section className="space-y-3">
          <h2 className={`text-xl sm:text-2xl font-bold tracking-tight ${isLight ? 'text-zinc-900' : 'text-white'}`}>
            5. Third-Party Services
          </h2>
          <p>
            The current version of Yemini Converter does not integrate with third-party analytics, advertising, or tracking services.
          </p>
          <p className="text-xs text-zinc-500 font-mono">
            Note: If this changes in future releases (such as adding non-intrusive ads, anonymous crash reporting, or telemetry), this section will be immediately updated to identify each provider and link to its respective privacy policy.
          </p>
        </section>

        {/* Section 6: Children's Privacy */}
        <section className="space-y-3">
          <h2 className={`text-xl sm:text-2xl font-bold tracking-tight ${isLight ? 'text-zinc-900' : 'text-white'}`}>
            6. Children&apos;s Privacy
          </h2>
          <p>
            The App is not directed at children under 13, and we do not knowingly collect personal information from children. Since the App does not collect personal data in its current form, this risk is minimal, but this section will be revisited if account features are added.
          </p>
        </section>

        {/* Section 7: Future Features: Sign-In and Cloud Backup */}
        <section className="space-y-3">
          <h2 className={`text-xl sm:text-2xl font-bold tracking-tight ${isLight ? 'text-zinc-900' : 'text-white'}`}>
            7. Future Features: Sign-In &amp; Cloud Backup
          </h2>
          <p>
            We may introduce optional account sign-in and cloud backup features in a future update. <strong>If and when these features are added, this Privacy Policy will be updated before the update is released</strong>, and will include details such as:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>What account information is collected (e.g., email address, authentication provider tokens).</li>
            <li>What file or conversion history data, if any, is backed up to the cloud.</li>
            <li>Which third-party services are used for authentication and storage (e.g., Firebase, Google Sign-In, or similar cloud providers).</li>
            <li>How long data is retained and how you can request deletion of your account and synchronized data.</li>
            <li>Whether cloud backup is strictly opt-in and can be disabled, with local-only offline usage remaining fully functional.</li>
          </ul>
          <p>
            Until such an update is published, no account or cloud backup functionality exists in the App, and the practices described in Sections 2–3 above apply in full.
          </p>
        </section>

        {/* Section 8: Data Security */}
        <section className="space-y-3">
          <h2 className={`text-xl sm:text-2xl font-bold tracking-tight ${isLight ? 'text-zinc-900' : 'text-white'}`}>
            8. Data Security
          </h2>
          <p>
            Because file conversion happens entirely on-device, your files are protected by your device&apos;s own security mechanisms (screen lock, sandboxing, on-disk hardware encryption). We do not operate servers that store your converted files, so there is zero server-side data breach risk under the current version of the App.
          </p>
        </section>

        {/* Section 9: Your Choices */}
        <section className="space-y-3">
          <h2 className={`text-xl sm:text-2xl font-bold tracking-tight ${isLight ? 'text-zinc-900' : 'text-white'}`}>
            9. Your Choices
          </h2>
          <p>
            Since the App does not collect personal data, there is no account data to access, export, or delete. You can uninstall the App at any time, which removes all App-related cached binaries and configurations from your device, except for the converted files you have explicitly saved to your storage folders.
          </p>
        </section>

        {/* Section 10: Changes to This Policy */}
        <section className="space-y-3">
          <h2 className={`text-xl sm:text-2xl font-bold tracking-tight ${isLight ? 'text-zinc-900' : 'text-white'}`}>
            10. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time, particularly when new features (such as sign-in or cloud backup) are introduced. We will update the &ldquo;Effective Date&rdquo; at the top of this policy and, for material changes, provide advance notice within the App interface.
          </p>
        </section>

        {/* Section 11: Contact Us */}
        <section className={`space-y-3 pt-6 border-t ${
          isLight ? 'border-zinc-200' : 'border-zinc-800/80'
        }`}>
          <h2 className={`text-xl sm:text-2xl font-bold tracking-tight ${isLight ? 'text-zinc-900' : 'text-white'}`}>
            11. Contact Us
          </h2>
          <p>
            If you have questions or feedback regarding this Privacy Policy or Yemini Converter, please contact us at:
          </p>
          <div className={`p-4 border space-y-1 font-mono text-xs sm:text-sm ${
            isLight ? 'bg-zinc-50 border-zinc-200 text-zinc-700' : 'bg-zinc-900/90 border-zinc-800 text-zinc-300'
          }`}>
            <p><strong>Organization:</strong> STF Ecosystem (Sphere Tech Foundation)</p>
            <p><strong>Support &amp; Privacy:</strong> <a href="mailto:yeminisupport@gmail.com" className="text-[#ba1724] dark:text-[#ff8585] hover:underline">yeminisupport@gmail.com</a></p>
            <p><strong>Official Parental Portal:</strong> <a href="https://stfweb3ecosystem.com/" target="_blank" rel="noopener noreferrer" className="text-[#ba1724] dark:text-[#ff8585] hover:underline">stfweb3ecosystem.com</a></p>
          </div>
        </section>

        {/* Footer Notice */}
        <footer className={`pt-8 pb-12 border-t text-xs font-mono text-center space-y-2 ${
          isLight ? 'border-zinc-200 text-zinc-500' : 'border-zinc-800/60 text-zinc-500'
        }`}>
          <p>© 2026 Yemini. All rights reserved.</p>
          <p className="italic max-w-2xl mx-auto">
            Yemini Converter • Standalone In-App Privacy Document
          </p>
        </footer>

      </article>
    </div>
  );
};

export default ConverterAppPrivacyPage;
