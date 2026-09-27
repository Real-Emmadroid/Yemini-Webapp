import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const ShareAppPrivacyPage: React.FC = () => {
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
          <div className={`inline-block px-3 py-1 text-xs font-mono border ${
            isLight
              ? 'bg-zinc-100 border-zinc-200 text-[#ba1724]'
              : 'bg-zinc-900 border-zinc-800 text-[#ff8585]'
          }`}>
            Official Privacy Policy • Android Application
          </div>
          <h1 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isLight ? 'text-zinc-900' : 'text-white'
          }`}>
            Privacy Policy for Yemini Share
          </h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-zinc-500">
            <span><strong>Effective Date:</strong> January 1, 2026</span>
            <span>•</span>
            <span><strong>Application:</strong> Yemini Share (Android)</span>
            <span>•</span>
            <span><strong>Provider:</strong> STF Ecosystem (Sphere Tech Foundation)</span>
          </div>
        </header>

        {/* Notice Box */}
        <div className={`p-4 sm:p-5 border space-y-2 ${
          isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-zinc-900/90 border-zinc-800'
        }`}>
          <h3 className={`text-sm font-bold uppercase tracking-wider font-mono ${
            isLight ? 'text-zinc-900' : 'text-white'
          }`}>
            Peer-to-Peer Offline Architecture
          </h3>
          <p className={`text-sm leading-relaxed ${isLight ? 'text-zinc-700' : 'text-zinc-300'}`}>
            This document was drafted based on the features actually built into Yemini Share, to give you an accurate, ready-to-edit starting point. Yemini Share is an offline, peer-to-peer file-sharing application for Android.
          </p>
        </div>

        {/* Section 1: Introduction */}
        <section className="space-y-4">
          <h2 className={`text-xl sm:text-2xl font-bold tracking-tight ${isLight ? 'text-zinc-900' : 'text-white'}`}>
            1. Introduction
          </h2>
          <p className={`text-base sm:text-lg ${isLight ? 'text-zinc-900' : 'text-zinc-200'}`}>
            Yemini Share (&ldquo;the App,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;), provided by <strong>STF Ecosystem (Sphere Tech Foundation)</strong>, is an offline, peer-to-peer file-sharing application for Android. This Privacy Policy explains what information the App handles, how it is used, and your choices — written to reflect exactly how the App is built, not a generic template.
          </p>
          <p>
            <strong>The short version:</strong> Yemini Share does not have user accounts, does not use the internet to move your files, and does not operate any server that your files or personal data pass through. Transfers happen directly between two nearby devices.
          </p>
        </section>

        {/* Section 2: How Yemini Share Moves Your Files */}
        <section className="space-y-4">
          <h2 className={`text-xl sm:text-2xl font-bold tracking-tight ${isLight ? 'text-zinc-900' : 'text-white'}`}>
            2. How Yemini Share Moves Your Files
          </h2>
          <p>
            Yemini Share offers two connection methods, both entirely local and offline:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Standard (Nearby) mode:</strong> Uses Google&apos;s Nearby Connections API, which negotiates a direct connection between two devices using Bluetooth and Wi-Fi radios. No internet connection is required, and no file data passes through any external server.</li>
            <li><strong>5G Direct mode:</strong> One device creates a local Wi-Fi hotspot; the other device scans a QR code to join that hotspot directly and connects over a private local network address. File data is transferred over that direct local connection only.</li>
          </ul>
          <p>
            In both modes, files you choose to send are transmitted directly to the other device you connect with. We (the developers) never receive, store, or have access to the files you share, or to any content transferred through the App.
          </p>
        </section>

        {/* Section 3: Information Stored on Your Device */}
        <section className="space-y-4">
          <h2 className={`text-xl sm:text-2xl font-bold tracking-tight ${isLight ? 'text-zinc-900' : 'text-white'}`}>
            3. Information Stored on Your Device
          </h2>
          <p>
            The App stores certain information locally, on your device only. None of the following is transmitted to us or to any third party:
          </p>
          
          <div className={`overflow-x-auto my-4 border ${
            isLight ? 'border-zinc-200 bg-zinc-50' : 'border-zinc-800 bg-zinc-900/60'
          }`}>
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className={`border-b font-mono ${
                  isLight ? 'border-zinc-200 bg-zinc-100 text-zinc-800' : 'border-zinc-800 bg-zinc-900/90 text-zinc-300'
                }`}>
                  <th className="p-3">Data Category</th>
                  <th className="p-3">Details</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-zinc-200 text-zinc-700' : 'divide-zinc-800/60 text-zinc-300'}`}>
                <tr>
                  <td className={`p-3 font-semibold ${isLight ? 'text-zinc-900' : 'text-white'}`}>Transfer history</td>
                  <td className="p-3">A local record of files you&apos;ve sent and received — file name, size, category, timestamp, and the name of the connected device — stored in a local database on your device.</td>
                </tr>
                <tr>
                  <td className={`p-3 font-semibold ${isLight ? 'text-zinc-900' : 'text-white'}`}>App settings</td>
                  <td className="p-3">Your theme preference (light/dark), device nickname, chosen save location, and language preference.</td>
                </tr>
                <tr>
                  <td className={`p-3 font-semibold ${isLight ? 'text-zinc-900' : 'text-white'}`}>Profile</td>
                  <td className="p-3">Your chosen display avatar (a built-in preset icon, or a photo you select from your camera or gallery) and your device nickname.</td>
                </tr>
                <tr>
                  <td className={`p-3 font-semibold ${isLight ? 'text-zinc-900' : 'text-white'}`}>Received files</td>
                  <td className="p-3">Files you receive are saved to your device&apos;s local storage, organized into folders by type (Images, Videos, Audio, Apps, Documents) under a &ldquo;Yemini Share&rdquo; folder.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            All of the above stays on your device. You can clear individual transfer-history entries at any time via swipe-to-delete. Uninstalling the App removes this locally stored data, though files already saved to your device&apos;s shared storage (e.g. in the &ldquo;Yemini Share&rdquo; folder) are not automatically deleted.
          </p>
        </section>

        {/* Section 4: Permissions the App Requests, and Why */}
        <section className="space-y-4">
          <h2 className={`text-xl sm:text-2xl font-bold tracking-tight ${isLight ? 'text-zinc-900' : 'text-white'}`}>
            4. Permissions the App Requests, and Why
          </h2>
          
          <div className={`overflow-x-auto my-4 border ${
            isLight ? 'border-zinc-200 bg-zinc-50' : 'border-zinc-800 bg-zinc-900/60'
          }`}>
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className={`border-b font-mono ${
                  isLight ? 'border-zinc-200 bg-zinc-100 text-zinc-800' : 'border-zinc-800 bg-zinc-900/90 text-zinc-300'
                }`}>
                  <th className="p-3">Permission</th>
                  <th className="p-3">Why the App needs it</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-zinc-200 text-zinc-700' : 'divide-zinc-800/60 text-zinc-300'}`}>
                <tr>
                  <td className={`p-3 font-semibold ${isLight ? 'text-zinc-900' : 'text-white'}`}>Bluetooth (scan, advertise, connect)</td>
                  <td className="p-3">To discover nearby devices and establish a direct connection in Standard mode.</td>
                </tr>
                <tr>
                  <td className={`p-3 font-semibold ${isLight ? 'text-zinc-900' : 'text-white'}`}>Nearby Wi-Fi Devices / Location</td>
                  <td className="p-3">Required by Android to perform Bluetooth/Wi-Fi based device discovery. On versions of Android requiring it, this permission does not mean the App tracks or records your location — it is a platform requirement for local radio scanning, and the App does not access or store GPS/location data.</td>
                </tr>
                <tr>
                  <td className={`p-3 font-semibold ${isLight ? 'text-zinc-900' : 'text-white'}`}>Camera</td>
                  <td className="p-3">To scan a QR code when connecting via 5G Direct mode. The camera is only used live for scanning; no photos or video are captured or stored by this feature.</td>
                </tr>
                <tr>
                  <td className={`p-3 font-semibold ${isLight ? 'text-zinc-900' : 'text-white'}`}>Photos, videos, audio, and storage access</td>
                  <td className="p-3">To let you browse and select files on your device to send, and to save files you receive into your device&apos;s storage.</td>
                </tr>
                <tr>
                  <td className={`p-3 font-semibold ${isLight ? 'text-zinc-900' : 'text-white'}`}>Foreground Service / Notifications</td>
                  <td className="p-3">To keep active file transfers running reliably in the background without being killed by Android aggressive battery management.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            You can revoke any of these permissions at any time through your Android device settings. Note that disabling certain permissions (such as Bluetooth or Storage) will prevent the App from performing file transfers.
          </p>
        </section>

        {/* Section 5: Third-Party Services and SDKs */}
        <section className="space-y-4">
          <h2 className={`text-xl sm:text-2xl font-bold tracking-tight ${isLight ? 'text-zinc-900' : 'text-white'}`}>
            5. Third-Party Services &amp; SDKs
          </h2>
          <p>
            Yemini Share uses minimal third-party software development kits (SDKs), strictly limited to Android platform support and local connection management:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Google Play Services (Nearby Connections API):</strong> Used for local device discovery and peer-to-peer data streaming. Google&apos;s privacy policy applies to their framework services: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#ba1724] dark:text-[#ff8585] hover:underline">Google Privacy Policy ↗</a>.</li>
            <li><strong>ZXing / Barcode Scanner Library:</strong> Used locally on-device to decode QR codes when pairing in 5G Direct mode. This library processes image frames entirely on-device and transmits zero data externally.</li>
          </ul>
          <p>
            We do not integrate third-party analytics SDKs, user tracking pixels, advertising networks, or remote telemetry servers into Yemini Share.
          </p>
        </section>

        {/* Section 6: Data Security */}
        <section className="space-y-4">
          <h2 className={`text-xl sm:text-2xl font-bold tracking-tight ${isLight ? 'text-zinc-900' : 'text-white'}`}>
            6. Data Security
          </h2>
          <p>
            Because transfers occur directly between devices over local radio waves (Bluetooth, Wi-Fi Direct, or local hotspot) without passing through external servers:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>No Cloud Vulnerability:</strong> There is no central database or cloud storage holding your transferred files that could be compromised in a server breach.</li>
            <li><strong>Encrypted Transport:</strong> Nearby Connections and Wi-Fi Direct protocols establish encrypted communication channels between connected devices.</li>
            <li><strong>User Control:</strong> Incoming transfer requests require explicit manual acceptance on the receiving device before any data transfer begins.</li>
          </ul>
        </section>

        {/* Section 7: Children's Privacy */}
        <section className="space-y-4">
          <h2 className={`text-xl sm:text-2xl font-bold tracking-tight ${isLight ? 'text-zinc-900' : 'text-white'}`}>
            7. Children&apos;s Privacy
          </h2>
          <p>
            Yemini Share does not collect personal information from any user, including children under 13. Since the App operates entirely offline without accounts or data collection, it is safe for users of all ages under parental guidance.
          </p>
        </section>

        {/* Section 8: Changes to This Privacy Policy */}
        <section className="space-y-4">
          <h2 className={`text-xl sm:text-2xl font-bold tracking-tight ${isLight ? 'text-zinc-900' : 'text-white'}`}>
            8. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy if new features or connection modes are added to Yemini Share. Any updates will be posted on this page with a revised effective date. We encourage you to review this policy periodically.
          </p>
        </section>

        {/* Section 9: Contact Us */}
        <section className={`space-y-3 pt-6 border-t ${
          isLight ? 'border-zinc-200' : 'border-zinc-800/80'
        }`}>
          <h2 className={`text-xl sm:text-2xl font-bold tracking-tight ${isLight ? 'text-zinc-900' : 'text-white'}`}>
            9. Contact Us
          </h2>
          <p>
            If you have questions, suggestions, or feedback regarding this Privacy Policy or Yemini Share, please reach out to us:
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
          <p>© 2026 STF Ecosystem (Sphere Tech Foundation). All rights reserved.</p>
          <p className="italic max-w-2xl mx-auto">
            Yemini Share • Standalone In-App Privacy Document
          </p>
        </footer>

      </article>
    </div>
  );
};

export default ShareAppPrivacyPage;
