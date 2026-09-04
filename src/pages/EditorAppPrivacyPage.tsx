import React from 'react';

export const EditorAppPrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#070709] text-zinc-300 py-10 px-4 sm:px-8 lg:px-12 font-sans selection:bg-[#5b0000] selection:text-[#ff8585]">
      <article className="max-w-4xl mx-auto space-y-10 text-sm sm:text-base leading-relaxed">
        
        {/* Document Header */}
        <header className="space-y-4 pb-8 border-b border-zinc-800/80">
          <div className="inline-block px-3 py-1 bg-zinc-900 border border-zinc-800 text-xs font-mono text-[#ff8585]">
            Official Privacy Policy • Android Application
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Privacy Policy for Yemini Code Editor
          </h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-zinc-500">
            <span><strong>Effective Date:</strong> January 1, 2026</span>
            <span>•</span>
            <span><strong>Application:</strong> Yemini Code Editor (Android)</span>
            <span>•</span>
            <span><strong>Provider:</strong> STF Ecosystem (Sphere Tech Foundation)</span>
          </div>
        </header>

        {/* Introduction */}
        <section className="space-y-4">
          <p className="text-zinc-200 text-base sm:text-lg">
            STF Ecosystem (Sphere Tech Foundation) built the <strong>Yemini Code Editor</strong> application (including its official runtime modules and plugins: Yemini Mobile Compiler Plugin, Yemini Terminal Plugin, and Yemini Permissions Plugin) as a Free and Ad-Supported developer application with optional cloud synchronization services. This SERVICE is provided by STF Ecosystem at no cost and is intended for use as is.
          </p>
          <p>
            This page is used to inform users and visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decides to use our Service.
          </p>
          <p>
            If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used strictly for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
          </p>
          <p>
            The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible within the Yemini Code Editor application settings unless otherwise defined in this Privacy Policy.
          </p>
        </section>

        {/* Section: Account Registration and Sign-Up */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            1. Account Registration &amp; Sign-Up
          </h2>
          <p>
            You can use core editing and local offline compilation features in Yemini Code Editor without creating an account. However, when you choose to register for an optional Yemini Account to enable cross-device cloud sync, we collect the following registration details:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-300">
            <li><strong>Account Identifiers:</strong> Your email address and chosen display username.</li>
            <li><strong>Authentication Credentials:</strong> Securely salted and hashed passwords, or OAuth authentication tokens if signing in via authorized third-party authentication providers.</li>
            <li><strong>User Profile Settings:</strong> Editor preferences (e.g., color themes, keybinding configs, default compiler flags, and font sizing) associated with your user ID.</li>
          </ul>
          <p>
            We use this information strictly to authenticate your identity, secure your workspace sessions, and manage your cloud preferences.
          </p>
        </section>

        {/* Section: GitHub Integration */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            2. GitHub Integration &amp; Git Version Control
          </h2>
          <p>
            Yemini Code Editor provides an optional integration with <strong>GitHub</strong> to enable cloning repositories, staging commits, pulling remote branches, and pushing code changes directly from your Android device.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-300">
            <li><strong>OAuth Access Tokens:</strong> When you connect your GitHub account, Yemini uses industry-standard OAuth 2.0 authorization. Your GitHub password is never seen, stored, or transmitted to our servers. OAuth access tokens are stored securely in Android EncryptedSharedPreferences on your local device.</li>
            <li><strong>Repository Access:</strong> Yemini only accesses the specific repositories and branches that you explicitly clone or open in the editor.</li>
            <li><strong>Zero Source Code Harvesting:</strong> We do NOT analyze, index, harvest, or utilize your proprietary GitHub repositories or source code to train public machine learning or AI foundation models. Your source code remains your exclusive property.</li>
          </ul>
        </section>

        {/* Section: Offline-First Architecture & Online Capabilities */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            3. Offline-First Architecture &amp; Online Services
          </h2>
          <p>
            Yemini Code Editor is architected with a strict <strong>offline-first philosophy</strong>:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-300">
            <li><strong>Complete Offline Operation:</strong> You can create files, write code, run local shell commands, and compile programs (C/C++, Python, Rust, Node.js) 100% offline on your device without an active internet connection. In offline mode, zero files or code snippets are transmitted over the network.</li>
            <li><strong>Online Operations:</strong> Network connectivity is only utilized when you explicitly trigger cloud actions (e.g., syncing with Yemini Cloud, pushing/pulling from GitHub, downloading package manager updates via pip/npm/cargo, or when loading non-intrusive banner ads and crash telemetry).</li>
          </ul>
        </section>

        {/* Section: Yemini Cloud & Workspace Sync */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            4. Yemini Cloud Storage &amp; Workspace Sync
          </h2>
          <p>
            Users who opt-in to <strong>Yemini Cloud</strong> can save and backup their development projects, active workspaces, and custom settings to our secure cloud infrastructure:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-300">
            <li><strong>Encrypted in Transit &amp; at Rest:</strong> All project files saved to Yemini Cloud are encrypted in transit using TLS 1.3 and encrypted at rest using AES-256 standards.</li>
            <li><strong>Selective Sync:</strong> You maintain full control over which projects are saved locally on-device versus synchronized with the cloud.</li>
            <li><strong>Data Deletion &amp; Purge:</strong> You may at any time delete individual cloud projects or request complete deletion of all cloud-stored workspaces through the in-app account settings.</li>
          </ul>
        </section>

        {/* Section: Information Collection and Use */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            5. Information Collection &amp; Use
          </h2>
          <p>
            For a better experience while using our Service, we may require you to provide us with certain personally identifiable information (such as your account email or device identifiers). The information that we request will be retained by us and used as described in this privacy policy.
          </p>
          <p>
            The app may also collect anonymized statistics regarding application crashes, feature adoption, and package installation requests (e.g., pip/npm package names requested for sandbox optimization).
          </p>
        </section>

        {/* Section: Third-Party Service Providers */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            6. Third-Party Service Providers &amp; SDKs
          </h2>
          <p>
            The application utilizes third-party services that may collect information used to identify your device, serve advertisements, and analyze app stability. Below are links to the privacy policies of the third-party service providers used by Yemini Code Editor:
          </p>
          <ul className="space-y-2.5 pl-2 font-mono text-xs sm:text-sm">
            <li className="p-2.5 bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
              <span className="text-white font-semibold">Google Play Services</span>
              <a 
                href="https://policies.google.com/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#ff8585] hover:underline"
              >
                Privacy Policy ↗
              </a>
            </li>
            <li className="p-2.5 bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
              <span className="text-white font-semibold">Google AdMob</span>
              <a 
                href="https://support.google.com/admob/answer/6128543?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#ff8585] hover:underline"
              >
                Privacy Policy ↗
              </a>
            </li>
            <li className="p-2.5 bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
              <span className="text-white font-semibold">Google Analytics for Firebase</span>
              <a 
                href="https://firebase.google.com/policies/analytics" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#ff8585] hover:underline"
              >
                Privacy Policy ↗
              </a>
            </li>
            <li className="p-2.5 bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
              <span className="text-white font-semibold">Firebase Crashlytics</span>
              <a 
                href="https://firebase.google.com/support/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#ff8585] hover:underline"
              >
                Privacy Policy ↗
              </a>
            </li>
            <li className="p-2.5 bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
              <span className="text-white font-semibold">GitHub API Services</span>
              <a 
                href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#ff8585] hover:underline"
              >
                Privacy Statement ↗
              </a>
            </li>
          </ul>
        </section>

        {/* Section: Log Data */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            7. Log Data &amp; Crash Diagnostics
          </h2>
          <p>
            We want to inform you that whenever you use our Service, in the case of an error or unhandled exception in the app, we collect diagnostic data and telemetry on your phone (through third-party products) called <strong>Log Data</strong>.
          </p>
          <p>
            This Log Data may include information such as your device Internet Protocol (&ldquo;IP&rdquo;) address, device manufacturer and model, operating system version (e.g., Android 13/14), CPU architecture (e.g., aarch64, armv7a, x86_64), the internal configuration and state of the app when utilizing our Service, the timestamp of the event, compiler error exit codes, and other operational diagnostics.
          </p>
        </section>

        {/* Section: Cookies & Local Storage */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            8. Cookies &amp; Local On-Device Storage
          </h2>
          <p>
            Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are stored on your device&apos;s internal memory.
          </p>
          <p>
            This Service does not use traditional browser cookies explicitly in native app code. However, the app utilizes local on-device key-value storage (Android SharedPreferences and SQLite databases) to maintain your active session token, editor preferences, open tabs, and offline cache.
          </p>
          <p>
            Third-party SDKs (such as Google AdMob and Google Play Services) may use mobile advertising identifiers and internal caching to serve personalized or non-personalized advertisements and ensure compliance with Google Play store policies.
          </p>
        </section>

        {/* Section: Android Permissions */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            9. Device Permissions &amp; Scoped Storage
          </h2>
          <p>
            To perform its functional duties as a code editor and terminal emulator, Yemini Code Editor may request specific Android runtime permissions:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-300">
            <li><strong>Storage / Media Access:</strong> To open, edit, create, and save code files within your designated project folders via Android Scoped Storage (Storage Access Framework).</li>
            <li><strong>Internet Access:</strong> To synchronize with Yemini Cloud, perform Git operations, fetch compiler updates, and display ads.</li>
            <li><strong>Foreground Service:</strong> To allow long-running compilation tasks or package installations to finish executing without being terminated by Android battery optimizations.</li>
            <li><strong>Notifications:</strong> To notify you when a background compiler build or git clone operation completes.</li>
          </ul>
        </section>

        {/* Section: Service Providers */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            10. Service Providers
          </h2>
          <p>
            We may employ third-party companies and individuals due to the following reasons:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-zinc-300">
            <li>To facilitate our Service;</li>
            <li>To provide the Service on our behalf;</li>
            <li>To perform Service-related tasks (such as cloud hosting, authentication, and database replication); or</li>
            <li>To assist us in analyzing how our Service is used and diagnosing technical errors.</li>
          </ul>
          <p>
            We want to inform users of this Service that these third parties have access to your Personal Information strictly to perform the tasks assigned to them on our behalf. They are contractually obligated not to disclose or use the information for any other purpose.
          </p>
        </section>

        {/* Section: Security */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            11. Security
          </h2>
          <p>
            We value your trust in providing us your Personal Information, and we strive to use commercially acceptable means of protecting it. On Android, runtime compilers and user processes execute inside isolated application sandbox boundaries. All cloud transmissions utilize TLS 1.3 encryption. However, please remember that no method of transmission over the internet or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
          </p>
        </section>

        {/* Section: User Rights & Account Deletion */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            12. User Rights &amp; Data Deletion
          </h2>
          <p>
            You have the right to access, export, or delete your personal data at any time:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-zinc-300">
            <li><strong>Local Data:</strong> You can delete local projects, cached packages, and app data by clearing the app storage within Android Settings.</li>
            <li><strong>Cloud Data &amp; Account Deletion:</strong> You can delete individual Yemini Cloud projects or submit an immediate account deletion request directly from the app&apos;s Account Settings screen, or by emailing our privacy team. Upon deletion, all associated cloud projects, tokens, and profile data will be permanently purged from our servers.</li>
          </ul>
        </section>

        {/* Section: Links to Other Sites */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            13. Links to Other Sites &amp; External Repositories
          </h2>
          <p>
            This Service may contain links to external sites, third-party package registries, documentation links, or external Git hosts. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
          </p>
        </section>

        {/* Section: Children's Privacy */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            14. Children&apos;s Privacy
          </h2>
          <p>
            These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us immediately so that we will be able to take the necessary actions.
          </p>
        </section>

        {/* Section: Changes to This Privacy Policy */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            15. Changes to This Privacy Policy
          </h2>
          <p>
            We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any material changes by posting the updated Privacy Policy on this page and updating the effective date at the top. Changes are effective immediately once posted.
          </p>
        </section>

        {/* Section: Contact Us */}
        <section className="space-y-3 pt-6 border-t border-zinc-800/80">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            16. Contact Us
          </h2>
          <p>
            If you have any questions, suggestions, or data deletion requests regarding our Privacy Policy or the Yemini Code Editor Android app, do not hesitate to contact us:
          </p>
          <div className="p-4 bg-zinc-900/90 border border-zinc-800 space-y-1 font-mono text-xs sm:text-sm text-zinc-300">
            <p><strong>Organization:</strong> STF Ecosystem (Sphere Tech Foundation)</p>
            <p><strong>Privacy Inquiries:</strong> <a href="mailto:privacy@spheretech.org" className="text-[#ff8585] hover:underline">privacy@spheretech.org</a></p>
            <p><strong>Developer Support:</strong> <a href="mailto:support@yemini.dev" className="text-[#ff8585] hover:underline">support@yemini.dev</a></p>
            <p><strong>Official Portal:</strong> <a href="https://spheretech.org" target="_blank" rel="noopener noreferrer" className="text-[#ff8585] hover:underline">spheretech.org</a></p>
          </div>
        </section>

        {/* Footer Notice */}
        <footer className="pt-8 pb-12 border-t border-zinc-800/60 text-xs font-mono text-zinc-500 text-center">
          <p>© 2026 STF Ecosystem (Sphere Tech Foundation). All rights reserved.</p>
          <p className="mt-1">Yemini Code Editor • Standalone In-App Privacy Document</p>
        </footer>

      </article>
    </div>
  );
};

export default EditorAppPrivacyPage;
