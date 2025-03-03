import FAQ from "@/components/FAQ";
import Search from "@/components/Search";
import React from "react";
import data from "@/lib/data.json";
import getTranslatedArray from "@/hooks/getTranslatedArray";
import { useLanguageStore } from "@/store/useLanguageStore";
import { useTranslation } from "next-i18next";

function Account() {
  const { language } = useLanguageStore();
  const { t } = useTranslation();
  const faqData: FAQItem[] = data.accountFaq;
  return (
    <div>
      <Search />
      <FAQ
        title={t("topics.items.account")}
        faqData={getTranslatedArray(faqData, language)}
      />
    </div>
  );
}

export default Account;
