import React from 'react';
import { PageRoute } from '../../types';
import { useTheme } from '../../context/ThemeContext';

interface SectionGetStartedProps {
  onNavigate: (route: PageRoute) => void;
}

interface GetStartedLink {
  kicker: string;
  title: string;
  body: string;
  cta: string;
  route: PageRoute;
}

const links: GetStartedLink[] = [
  {
    kicker: 'For app owners',
    title: 'Sell your app',
    body: 'Built an Android app you want to hand over? Tell us about it. We acquire apps that treat their users well.',
    cta: 'Talk to our team',
    route: 'sell-your-app',
  },
  {
    kicker: 'Insights',
    title: 'Blog',
    body: 'Release news, engineering write-ups, and guides on building software that works offline.',
    cta: 'Read the blog',
    route: 'resources',
  },
  {
    kicker: 'Join us',
    title: 'Careers',
    body: 'Help us build privacy-first tools for people everywhere. See how we work and how to reach us.',
    cta: 'Work with us',
    route: 'careers',
  },
  {
    kicker: 'Under the hood',
    title: 'Technologies',
    body: 'The on-device tech, security design, and tooling that power every Yemini app.',
    cta: 'Explore the stack',
    route: 'technologies',
  },
];

export const SectionGetStarted: React.FC<SectionGetStartedProps> = ({ onNavigate }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section id="get-started" className="px-4 sm:px-6 max-w-7xl mx-auto w-full pb-24 pt-4">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className={`text-3xl sm:text-5xl tracking-tighter font-semibold mb-4 ${
          isLight ? 'text-black' : 'text-[#fadcd9]'
        }`}>
          Get started with Yemini.
        </h2>
        <p className={`text-lg sm:text-xl tracking-tight max-w-2xl mx-auto ${
          isLight ? 'text-gray-600' : 'text-[#ab8986]'
        }`}>
          Whether you build apps, write about them, or want to build with us, there is a place to begin.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {links.map((item) => (
          <button
            key={item.route}
            onClick={() => onNavigate(item.route)}
            className={`group text-left rounded-2xl border p-7 sm:p-9 flex flex-col gap-10 sm:gap-14 transition-colors cursor-pointer ${
              isLight
                ? 'bg-white border-gray-200 hover:border-[#580c14]'
                : 'bg-[#120506] border-[#381618] hover:border-[#ff8585]'
            }`}
          >
            <div className="space-y-3">
              <span className={`text-[11px] font-mono uppercase tracking-wider font-semibold ${
                isLight ? 'text-[#580c14]' : 'text-[#ff8585]'
              }`}>
                {item.kicker}
              </span>
              <h3 className={`text-3xl sm:text-4xl font-semibold tracking-tight ${
                isLight ? 'text-gray-900' : 'text-white'
              }`}>
                {item.title}
              </h3>
              <p className={`text-sm sm:text-base leading-relaxed max-w-md ${
                isLight ? 'text-gray-600' : 'text-[#ab8986]'
              }`}>
                {item.body}
              </p>
            </div>

            <span className={`inline-flex items-center gap-2 text-sm font-semibold ${
              isLight ? 'text-[#580c14]' : 'text-[#ff8585]'
            }`}>
              {item.cta}
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </span>
          </button>
        ))}
      </div>

      <p className={`mt-10 text-center text-sm ${isLight ? 'text-gray-600' : 'text-[#ab8986]'}`}>
        Just here for the apps?{' '}
        <button
          onClick={() => onNavigate('download')}
          className={`font-semibold underline underline-offset-4 cursor-pointer ${
            isLight ? 'text-[#580c14]' : 'text-[#ff8585]'
          }`}
        >
          Download Yemini
        </button>
      </p>
    </section>
  );
};
