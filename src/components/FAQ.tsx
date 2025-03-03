import { useLanguageStore } from "@/store/useLanguageStore";
import Link from "next/link";
import React from "react";

const FAQ = ({
  title,
  faqData,
}: {
  title: string;
  faqData: TranslatedFAQItem[];
}) => {
  const { language } = useLanguageStore();
  function generateSlug(text: string): string {
    return text
      .normalize("NFC") // Normalize Unicode characters
      .toLowerCase() // Convert to lowercase
      .replace(/\s+/g, "-") // Replace spaces with dashes
      .replace(/[^ঀ-৿a-z0-9\-]+/g, "") // Keep Bangla, Latin, numbers, and dashes only
      .replace(/--+/g, "-") // Replace multiple dashes with a single dash
      .replace(/^-+|-+$/g, ""); // Remove leading or trailing dashes
  }
  return (
    <div className="bg-[#357d61] py-10 px-6 sm:px-10 lg:px-20">
      <div className="w-full mx-auto bg-transparent shadow-md rounded-lg p-8 border border-gray-400">
        <h1 className="text-2xl font-bold text-white mb-6">
          {language === "bn" ? `${title} প্রশ্নোত্তর` : `${title} FAQ`}
        </h1>
        {faqData.map((item, index) => (
          <div key={index} className="mb-4 w-full flex">
            <Link
              href={{
                pathname: `/faq-details/${generateSlug(item.question)}`,
                query: { id: item.id },
              }}
              className="w-full text-left bg-[#234d41] text-white font-semibold px-4 py-2 rounded-md focus:outline-none hover:bg-[#1e3d36]"
            >
              {item.question}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
