'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { content } from '../lib/content';
import ShareButton from '@/components/ui/ShareButton';

const PAYPAL_URL = "https://www.paypal.com/donate/?hosted_button_id=YOUR_BUTTON_ID";

function DonateButton({ text }: { text: string }) {
  return (
    <button
      onClick={() => window.open(PAYPAL_URL, '_blank', 'noopener,noreferrer')}
      className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
    >
      {text}
    </button>
  );
}

// Hero Image Component (language-specific)
function HeroImage({ language }: { language: string }) {
  return (
    <div className="relative w-full aspect-auto mb-6">
      <div className="relative w-full bg-gray-50 rounded-lg overflow-hidden">
        <Image
          src={`/images/hero-${language}.png`}
          alt="Gal dancing"
          width={800}
          height={600}
          priority
          className="mx-auto"
          style={{
            maxHeight: '600px',
            width: 'auto',
            height: 'auto',
          }}
        />
      </div>
    </div>
  );
}

// Regular Section Image Component (shared between languages)
function SectionImage({ 
  imageName, 
  alt 
}: { 
  imageName: string; 
  alt: string; 
}) {
  return (
    <div className="relative w-full aspect-auto my-6">
      <div className="relative w-full bg-gray-50 rounded-lg overflow-hidden">
        <Image
          src={`/images/${imageName}.jpg`}
          alt={alt}
          width={800}
          height={600}
          className="mx-auto"
          style={{
            maxHeight: '600px',
            width: 'auto',
            height: 'auto',
          }}
        />
      </div>
    </div>
  );
}



export default function Home() {
  const [language, setLanguage] = useState('en');
  const [pageUrl, setPageUrl] = useState('');
  const t = content[language];

  // Set the page URL after component mounts
  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  const renderSupportSection = () => {
    if (language === 'en') {
      return (
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">{t.sections.support.title}</h2>
          <ul className="list-disc list-inside mb-6">
            {t.sections.support.expenses?.map((expense, index) => (
              <li key={index} className="mb-2">{expense}</li>
            ))}
          </ul>
          <SectionImage 
            imageName="support" 
            alt="Supporting Gal"
          />
          <p>{t.sections.support.impact}</p>
        </section>
      );
    } else {
      return (
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">{t.sections.support.title}</h2>
          <p className="mb-6">{t.sections.support.content}</p>
          <SectionImage 
            imageName="support" 
            alt="Supporting Gal"
          />
          <p className="mt-6">{t.sections.support.treatment}</p>
        </section>
      );
    }
  };
  
  return (
    <div className={`min-h-screen p-8 ${language === 'he' ? 'text-right' : 'text-left'}`}>
        {/* Language Toggle */}
        <div className="flex justify-center mb-4">
          <button
            onClick={() => setLanguage(lang => lang === 'en' ? 'he' : 'en')}
            className="px-6 py-3 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors font-semibold"
          >
            {language === 'en' ? 'עברית' : 'English'}
          </button>
        </div>
  
        {/* Credits */}
        <div className="text-center text-sm text-gray-600 mb-8">
          This website was created with the help of{' '}
          <a 
            href="https://claude.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Claude
          </a>
          ,{' '}
          <a 
            href="https://vercel.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Vercel
          </a>
          , and{' '}
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
        </div>
  
      <main className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-6">{t.title}</h1>
          <HeroImage language={language} />
          <p className="text-xl leading-relaxed mb-8">{t.intro}</p>
          <div className="flex justify-center mb-8">
            <DonateButton text={t.donateButton} />
          </div>
        </div>
  
        {/* Journey Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">{t.sections.journey.title}</h2>
          <p className="mb-6">{t.sections.journey.content}</p>
          <SectionImage 
            imageName="journey" 
            alt="Gal's journey"
          />
          {t.sections.journey.diagnosis && <p>{t.sections.journey.diagnosis}</p>}
        </section>
  
        {/* Need Help Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">{t.sections.need.title}</h2>
          <p className="mb-6">{t.sections.need.content}</p>
          <SectionImage 
            imageName="need" 
            alt="Medical treatment"
          />
        </section>
  
        {/* Support Section - Conditionally rendered */}
        {renderSupportSection()}
  
        {/* Thanks Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">{t.sections.thanks.title}</h2>
          <p>{t.sections.thanks.content}</p>
        </section>
  
        {/* Bottom Call to Action */}
        <div className="flex gap-4 justify-center mb-12">
          <DonateButton text={t.donateButton} />
          <ShareButton 
            text={t.shareButton}
            shareData={{
              title: t.title,
              text: t.intro,
              url: pageUrl,
            }}
          />
        </div>
      </main>
    </div>
  );
  }