/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import data from "@/lib/data.json";
import { useLanguageStore } from "@/store/useLanguageStore";
import { useTranslation } from "react-i18next";
import getTranslatedArray from "@/hooks/getTranslatedArray";

function Search({}: searchProps) {
  const { language } = useLanguageStore();
  const { t } = useTranslation();
  const [showResultModal, setShowResultModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const modalRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const allFaqs: FAQItem[] = [
    ...data.accountFaq,
    ...data.casinoFaq,
    ...data.paymentFaq,
    ...data.promotionFaq,
    ...data.bajighor88TipsFaq,
    ...data.sportsFaq,
  ];

  const allTranslatedFaqs = getTranslatedArray(allFaqs, language);

  const filteredFaqs = allTranslatedFaqs.filter((item: TranslatedFAQItem) =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleClickOutside = (event: MouseEvent) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target as Node) &&
      inputRef.current &&
      !inputRef.current.contains(event.target as Node)
    ) {
      setShowResultModal(false);
    }
  };

  function generateSlug(text: string) {
    return text
      .toLowerCase() // Convert to lowercase
      .replace(/\s+/g, "-") // Replace spaces with dashes
      .replace(/[^a-z0-9\-]+/g, "") // Remove non-alphanumeric characters except dashes
      .replace(/--+/g, "-") // Replace multiple dashes with a single dash
      .replace(/^-+|-+$/g, ""); // Remove leading or trailing dashes
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full h-full px-5">
      <section className="my-16 lg:my-[150px] flex justify-center flex-col items-center">
        {language === "bn" ? (
          <h1 className="search-title text-center">
            হাই। আমরা আপনাকে কিভাবে{" "}
            <span className="text-[#ffdf18]">সাহায্য</span> করতে পারি?
          </h1>
        ) : (
          <h1 className="search-title text-center">
            Hi. How can we <span className="text-[#ffdf18]">help</span> you?
          </h1>
        )}

        <div className="w-full max-w-[1100px] relative">
          <div className="w-full flex items-center bg-white rounded-xl p-5">
            <input
              className="w-full outline-none text-lg"
              type="text"
              placeholder={t("searchBox.placeholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowResultModal(true)}
              ref={inputRef}
            />
            <div className="px-1">
              <i className="fa-solid fa-magnifying-glass text-xl"></i>
            </div>
          </div>
          {showResultModal && (
            <div
              className="w-full h-full overflow-auto min-h-[500px] bg-[#2c6952] absolute top-full mt-1 p-3 rounded-md shadow-md animate__animated animate__fadeIn"
              ref={modalRef}
            >
              {filteredFaqs.length > 0 && searchQuery !== "" ? (
                filteredFaqs.map((item: TranslatedFAQItem, index: number) => (
                  <div key={index} className="mb-4 w-full flex">
                    <Link
                      onClick={() => setShowResultModal(false)}
                      href={{
                        pathname: `/faq-details/${generateSlug(item.question)}`,
                        query: { id: item.id },
                      }}
                      className="w-full text-left bg-[#234d41] text-white font-semibold px-4 py-2 rounded-md focus:outline-none hover:bg-[#1e3d36]"
                    >
                      {item.question}
                    </Link>
                  </div>
                ))
              ) : searchQuery === "" ? (
                <p className="text-white">{t("searchBox.searchStartText")}</p>
              ) : (
                <p className="text-white">
                  {t("searchBox.searchNoResultText")} "{searchQuery}"
                </p>
              )}
            </div>
          )}
        </div>
        <div className="w-full max-w-[1100px] flex gap-5 items-center mt-5 text-[#8abba8]">
          <Link href={"/"}>{t("home")}</Link>
          <p>{">"}</p>
          <Link className="text-white" href={"/"}>
            {t("helpCenter")}
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Search;
