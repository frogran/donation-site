'use client';

import { useState } from 'react';
import { content } from '@/lib/content';
import LanguageToggle from '@/components/ui/LanguageToggle';
import HeroSection from '@/components/sections/HeroSection';
import JourneySection from '@/components/sections/JourneySection';
import NeedSection from '@/components/sections/NeedSection';
import SupportSection from '@/components/sections/SupportSection';
import ThanksSection from '@/components/sections/ThanksSection';
import DonationButton from '@/components/ui/DonationButton';
import ShareButton from '@/components/ui/ShareButton';

export default function Home() {
  const [language, setLanguage] = useState('en');
  const t = content[language];

  return (
    <div className={`min-h-screen p-8 ${language === 'he' ? 'text-right' : 'text-left'}`}>
      <LanguageToggle 
        language={language} 
        onToggle={() => setLanguage(lang => lang === 'en' ? 'he' : 'en')} 
      />

      <main className="max-w-4xl mx-auto">
        <HeroSection content={t} language={language} />
        <JourneySection content={t.sections.journey} language={language} />
        <NeedSection content={t.sections.need} language={language} />
        <SupportSection content={t.sections.support} language={language} />
        <ThanksSection content={t.sections.thanks} language={language} />
        
        <div className="flex gap-4 justify-center mb-12">
          <DonationButton text={t.donateButton} url="YOUR_PAYPAL_LINK" />
          <ShareButton text={t.shareButton} shareData={{
            title: t.title,
            text: t.intro,
            url: window.location.href,
          }} />
        </div>
      </main>
    </div>
  );
}
