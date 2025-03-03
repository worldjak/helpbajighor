import FAQ from "@/components/FAQ";
import Search from "@/components/Search";
import React from "react";
import data from "@/lib/data.json";
import getTranslatedArray from "@/hooks/getTranslatedArray";
import { useLanguageStore } from "@/store/useLanguageStore";
import { useTranslation } from "next-i18next";

function AllFaqs() {
  const { language } = useLanguageStore();
  const { t } = useTranslation();
  const allFaqs: FAQItem[] = [
    ...data.accountFaq,
    ...data.casinoFaq,
    ...data.paymentFaq,
    ...data.promotionFaq,
    ...data.bajighor88TipsFaq,
    ...data.sportsFaq,
  ];

  const allTranslatedFaqs = getTranslatedArray(allFaqs, language);
  return (
    <div>
      <Search />
      <FAQ title={t("allFaqs")} faqData={allTranslatedFaqs} />
    </div>
  );
}

export default AllFaqs;
