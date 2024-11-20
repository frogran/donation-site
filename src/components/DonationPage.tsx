import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Language content
const content = {
  en: {
    title: "Support Our Cause",
    description: "Your donation helps us make a difference",
    donateButton: "Donate via PayPal",
    mission: "Our Mission",
    missionText: "Here we can describe the mission and impact...",
  },
  he: {
    title: "תמכו במטרה שלנו",
    description: "התרומה שלכם עוזרת לנו ליצור שינוי",
    donateButton: "תרומה דרך פייפאל",
    mission: "המשימה שלנו",
    missionText: "כאן נוכל לתאר את המשימה וההשפעה...",
  }
};

const DonationPage = () => {
  const [language, setLanguage] = useState('en');
  const t = content[language];
  
  return (
    <div className={`min-h-screen p-8 ${language === 'he' ? 'text-right' : 'text-left'}`}>
      <div className="max-w-4xl mx-auto">
        {/* Language Toggle */}
        <div className="flex justify-end mb-8">
          <Button 
            onClick={() => setLanguage(lang => lang === 'en' ? 'he' : 'en')}
            variant="outline"
          >
            {language === 'en' ? 'עברית' : 'English'}
          </Button>
        </div>

        {/* Hero Section */}
        <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
          <Image
            src="/api/placeholder/800/400"
            alt="Hero image"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Main Content */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold mb-4">{t.title}</h1>
            <p className="text-lg mb-6">{t.description}</p>
            
            {/* Donation Button */}
            <Button 
              className="mb-8"
              size="lg"
              onClick={() => window.open('YOUR_PAYPAL_LINK', '_blank')}
            >
              {t.donateButton}
            </Button>

            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/api/placeholder/400/300"
                  alt="Impact image 1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/api/placeholder/400/300"
                  alt="Impact image 2"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>

            {/* Mission Section */}
            <h2 className="text-2xl font-bold mb-4">{t.mission}</h2>
            <p className="text-lg">{t.missionText}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DonationPage;
