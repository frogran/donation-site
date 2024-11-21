export interface SectionContent {
  title: string;
  content: string;
  diagnosis?: string;
  expenses?: string[];
  impact?: string;
  treatment?: string;
}

export interface SectionProps {
  content: SectionContent;
  language: string;
}
