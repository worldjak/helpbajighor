interface topicCard {
  title: string;
  image: string;
  href: string;
}

interface searchProps {}

interface FAQItem {
  id: string;
  question: {
    en: string;
    bn: string;
  };
  answer: {
    en: string;
    bn: string;
  };
  content?: {
    fullDescription: {
      en: string;
      bn: string;
    };
    images: string[];
    video: {
      title: string;
      source: string;
    };
  };
}

interface TranslatedFAQItem {
  id: string;
  question: string;
  answer: string;
  content?: {
    fullDescription: {
      en: string;
      bn: string;
    };
    images: string[];
    video: {
      title: string;
      source: string;
    };
  };
}
