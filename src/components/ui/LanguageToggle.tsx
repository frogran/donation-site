interface LanguageToggleProps {
  language: string;
  onToggle: () => void;
}

export default function LanguageToggle({ language, onToggle }: LanguageToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="fixed top-4 right-4 px-4 py-2 rounded-full border hover:bg-gray-100"
    >
      {language === 'en' ? 'עברית' : 'English'}
    </button>
  );
}
