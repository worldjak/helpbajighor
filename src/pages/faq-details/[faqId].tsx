/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from "next/router";
import data from "@/lib/data.json";
import Search from "@/components/Search";
import { useLanguageStore } from "@/store/useLanguageStore";
import getTranslatedArray from "@/hooks/getTranslatedArray";

const FAQDetailPage = () => {
  const { language } = useLanguageStore();
  const router = useRouter();
  const { id } = router.query;

  const allFaqs: FAQItem[] = [
    ...data.accountFaq,
    ...data.casinoFaq,
    ...data.paymentFaq,
    ...data.promotionFaq,
    ...data.bajighor88TipsFaq,
    ...data.sportsFaq,
  ];

  const getFilteredFAQ = (faqId: any) => {
    const filteredFAQ = getTranslatedArray(allFaqs, language).filter(
      (item: TranslatedFAQItem) => item.id === faqId
    );
    return filteredFAQ;
  };

  // Handle cases where fallback pages are loading
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Search />
      <div className="container max-w-6xl m-auto mb-10">
        {id &&
          getFilteredFAQ(id).map((item: TranslatedFAQItem, index: number) => (
            <div
              key={index}
              className="flex flex-col w-full items-center gap-5"
            >
              <h2 className="text-[30px] leading-[45px] text-[#fee300] font-light">
                {item.question}
              </h2>
              <p className="text-gray-200">{item.answer}</p>
              <div className="w-full bg-red-500">
                <h2>{item.content?.fullDescription.en}</h2>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FAQDetailPage;
