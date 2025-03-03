import FAQ from "@/components/FAQ";
import Search from "@/components/Search";
import React from "react";
import data from "@/lib/data.json";
import { useLanguageStore } from "@/store/useLanguageStore";
import getTranslatedArray from "@/hooks/getTranslatedArray";
import { useTranslation } from "next-i18next";

function Sports() {
  const { language } = useLanguageStore();
  const { t } = useTranslation();
  const faqData: FAQItem[] = data.sportsFaq;
  return (
    <div>
      <Search />
      <FAQ
        title={t("topics.items.sports")}
        faqData={getTranslatedArray(faqData, language)}
      />
    </div>
  );
}

export default Sports;
