import React from 'react';

export const NotepadAppPrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#070709] text-zinc-300 py-10 px-4 sm:px-8 lg:px-12 font-sans selection:bg-[#5b0000] selection:text-[#ff8585]">
      <article className="max-w-4xl mx-auto space-y-10 text-sm sm:text-base leading-relaxed">
        
        {/* Document Header */}
        <header className="space-y-4 pb-8 border-b border-zinc-800/80">
          <div className="inline-block px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-[#ff8585]">
            Official Privacy Policy • Android Application
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Privacy Policy for Yemini Notepad
          </h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-zinc-500">
            <span><strong>Effective Date:</strong> January 1, 2026</span>
            <span>•</span>
            <span><strong>Application:</strong> Yemini Notepad (Android)</span>
            <span>•</span>
            <span><strong>Provider:</strong> STF Ecosystem (Sphere Tech Foundation)</span>
          </div>
        </header>

        {/* Introduction & Summary */}
        <section className="space-y-4">
          <p className="text-zinc-200 text-base sm:text-lg">
            <strong>Yemini Notepad</strong> (&ldquo;the App,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), provided by <strong>STF Ecosystem (Sphere Tech Foundation)</strong>, is committed to protecting your privacy. This Privacy Policy explains how we handle information when you use our mobile application.
          </p>
          
          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Executive Summary
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed">
              By default, Yemini Notepad works <strong>fully offline</strong>, with all notes, checklists, formatting, and voice recordings stored only on your device. The App also offers an <strong>optional account and cloud backup feature</strong> — if you choose not to create an account, none of your data ever leaves your device. If you do create an account and enable cloud backup, the information described below is collected solely to provide that syncing and backup functionality.
            </p>
          </div>

          <p>
            This page is used to inform users and visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decides to use our Service.
          </p>
          <p>
            If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used strictly for providing, synchronizing, and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
          </p>
        </section>

        {/* Section 1: Information We Collect */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            1. Information We Collect
          </h2>
          
          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-semibold text-zinc-100">
              A. If You Do Not Create an Account (Offline-First Mode)
            </h3>
            <p>
              When using Yemini Notepad in default offline mode without creating an account:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              <li><strong>Zero User Content Leaves Your Device:</strong> All text notes, checklists, Markdown files, audio memos, voice recordings, reminder dates, tags, and category folders are stored strictly on your local device storage.</li>
              <li><strong>No Profile Data:</strong> We do not ask for or collect your name, email address, phone number, or contacts.</li>
            </ul>
          </div>

          <div className="space-y-3 pt-2">
            <h3 className="text-base sm:text-lg font-semibold text-zinc-100">
              B. If You Create an Account &amp; Enable Cloud Backup (Optional)
            </h3>
            <p>
              If you choose to register for an optional Yemini Account to enable cross-device cloud synchronization and automated backup:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              <li><strong>Account Identifiers:</strong> Your email address and display name for authentication and account security.</li>
              <li><strong>Note &amp; Checklist Content:</strong> Titles, text body, rich text formats, checklist items, completion statuses, tags, color labels, and folder hierarchies you choose to back up.</li>
              <li><strong>Audio &amp; Voice Recordings:</strong> Voice notes and audio memo attachments associated with your synced notes.</li>
              <li><strong>Sync Metadata:</strong> Last-modified timestamps, device identifiers, and version markers used solely to resolve conflict resolution between multiple devices.</li>
            </ul>
          </div>
        </section>

        {/* Section 2: How Your Data Is Stored & Protected */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            2. How Your Data Is Stored &amp; Protected
          </h2>
          <p>
            We take data protection and privacy seriously:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-300">
            <li><strong>Local Storage:</strong> On-device data is kept in the app&apos;s sandboxed SQLite database and internal storage directory, inaccessible to other applications under Android security policies.</li>
            <li><strong>Transit Encryption:</strong> All communications with cloud backup services use TLS 1.3 encryption.</li>
            <li><strong>At-Rest Encryption:</strong> Cloud backup storage volumes are encrypted using industry-standard AES-256 encryption.</li>
            <li><strong>Zero Data Selling:</strong> We do NOT sell, rent, or trade your personal information, notes, or voice recordings to third-party data brokers or marketing firms.</li>
            <li><strong>Zero Machine Learning Scraping:</strong> We do NOT read, index, or use the contents of your private notes, checklists, or voice memos to train public AI or language foundation models.</li>
          </ul>
        </section>

        {/* Section 3: Your Choices and Control */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            3. Your Choices and Control
          </h2>
          <p>
            You retain complete sovereignty over your data at all times:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-300">
            <li><strong>Export Your Data:</strong> You can export your notes at any time to standard open formats (Plain Text .txt, Markdown .md, JSON, or audio files).</li>
            <li><strong>Selective Sync:</strong> You can choose which specific note categories or folders are synced to the cloud.</li>
            <li><strong>Local Data Deletion:</strong> Deleting a note in the app removes it immediately from your device. You can also clear all local data via Android App Settings.</li>
            <li><strong>Cloud Backup &amp; Account Deletion:</strong> You can delete all cloud backups and delete your Yemini Account permanently from within the app settings or by contacting our privacy team. Deletion immediately purges all synced data from our servers.</li>
          </ul>
        </section>

        {/* Section 4: Device Permissions */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            4. Device Permissions
          </h2>
          <p>
            To provide its core note-taking and voice recording features, Yemini Notepad may request the following Android permissions:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-300">
            <li><strong>Microphone (RECORD_AUDIO):</strong> Required strictly when you choose to record voice notes or attach audio memos. Audio is captured only while the recording interface is actively triggered by you.</li>
            <li><strong>Storage / Media Access:</strong> Required to import text files, export backups, and attach images or audio files to notes via Android Scoped Storage.</li>
            <li><strong>Internet Access:</strong> Required only for optional cloud backup, account login, and diagnostic crash reporting. The app functions completely without internet access in offline mode.</li>
            <li><strong>Notifications &amp; Alarms:</strong> Required to trigger reminder alerts and schedule notifications for your task checklists and time-sensitive notes.</li>
          </ul>
        </section>

        {/* Section 5: Third-Party Services & SDKs */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            5. Third-Party Service Providers &amp; SDKs
          </h2>
          <p>
            The application utilizes trusted third-party service providers for core platform functionality, crash diagnostics, and optional non-intrusive advertising. Below are links to their privacy policies:
          </p>
          <ul className="space-y-2.5 pl-2 font-mono text-xs sm:text-sm">
            <li className="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
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
            <li className="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
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
            <li className="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
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
            <li className="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
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
          </ul>
        </section>

        {/* Section 6: Log Data & Diagnostics */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            6. Log Data &amp; Crash Diagnostics
          </h2>
          <p>
            In the event of an unhandled crash or application exception, we collect diagnostic telemetry called <strong>Log Data</strong> through third-party services like Firebase Crashlytics.
          </p>
          <p>
            This Log Data may include your device model, Android OS version, app configuration at the time of the error, stack traces, and operational error codes. This diagnostic data is anonymized and used solely to identify and resolve software bugs.
          </p>
        </section>

        {/* Section 7: Cookies & Local Storage */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            7. Cookies &amp; Local On-Device Storage
          </h2>
          <p>
            The native Android application does not use traditional browser tracking cookies. The app uses Android SharedPreferences and local SQLite databases to store your display preferences (dark/light themes, typography scale, sorting order) and authentication session tokens locally on your device.
          </p>
        </section>

        {/* Section 8: Data Retention */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            8. Data Retention
          </h2>
          <p>
            We retain your data according to the following principles:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-300">
            <li><strong>Local Device Data:</strong> Retained indefinitely on your physical device until you delete the notes or uninstall the application.</li>
            <li><strong>Cloud Backup Data:</strong> Retained as long as your Yemini Account remains active. If you delete a note or request account deletion, the data is permanently purged from our cloud storage.</li>
            <li><strong>Diagnostic Crash Logs:</strong> Automatically purged on a rolling 90-day retention schedule.</li>
          </ul>
        </section>

        {/* Section 9: Security */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            9. Security
          </h2>
          <p>
            We value your trust in choosing Yemini Notepad and strive to use commercially acceptable means to protect your information. Cloud backups are transmitted over TLS 1.3 and stored with AES-256 encryption. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        {/* Section 10: Children's Privacy */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            10. Children&apos;s Privacy
          </h2>
          <p>
            These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. If we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and become aware that your child has provided us with personal information, please contact us immediately.
          </p>
        </section>

        {/* Section 11: Changes to This Privacy Policy */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            11. Changes to This Privacy Policy
          </h2>
          <p>
            We may update our Privacy Policy from time to time. We encourage you to review this page periodically for any updates. We will notify you of any material changes by updating the effective date at the top of this policy and posting the revision on this page.
          </p>
        </section>

        {/* Section 12: Contact Us */}
        <section className="space-y-3 pt-6 border-t border-zinc-800/80">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            12. Contact Us
          </h2>
          <p>
            If you have questions, feedback, or data deletion inquiries regarding this Privacy Policy or Yemini Notepad, please contact us:
          </p>
          <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-1 font-mono text-xs sm:text-sm text-zinc-300">
            <p><strong>Organization:</strong> STF Ecosystem (Sphere Tech Foundation)</p>
            <p><strong>Privacy Inquiries:</strong> <a href="mailto:privacy@spheretech.org" className="text-[#ff8585] hover:underline">privacy@spheretech.org</a></p>
            <p><strong>Developer Support:</strong> <a href="mailto:support@yemini.dev" className="text-[#ff8585] hover:underline">support@yemini.dev</a></p>
            <p><strong>Official Portal:</strong> <a href="https://spheretech.org" target="_blank" rel="noopener noreferrer" className="text-[#ff8585] hover:underline">spheretech.org</a></p>
          </div>
        </section>

        {/* Footer Notice */}
        <footer className="pt-8 pb-12 border-t border-zinc-800/60 text-xs font-mono text-zinc-500 text-center">
          <p>© 2026 STF Ecosystem (Sphere Tech Foundation). All rights reserved.</p>
          <p className="mt-1">Yemini Notepad • Standalone In-App Privacy Document</p>
        </footer>

      </article>
    </div>
  );
};
