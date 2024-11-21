interface SectionProps {
  content: any;
  language: string;
}

export default function JourneySection({ content, language }: SectionProps) {
  return (
    <div className="mb-12">
      <h1 className="text-4xl font-bold mb-6">{content.title}</h1>
      <ImageDisplay 
        src="/images/journey.jpg" 
        alt="Gal Dancing" 
        priority 
        height="h-[400px]"
      />
      <p className="text-xl leading-relaxed">{content.intro}</p>
    </div>
  );
}
