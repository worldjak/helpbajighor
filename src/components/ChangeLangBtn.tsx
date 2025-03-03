import React from "react";
import { useTranslation } from "react-i18next";
import { useLanguageStore } from "@/store/useLanguageStore";

function ChangeLangBtn() {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguageStore((state) => state);

  const handleLanguageChange = () => {
    const newLanguage = language === "en" || language === "en-GB" ? "bn" : "en";
    setLanguage(newLanguage);
  };

  return (
    <div>
      <button
        onClick={handleLanguageChange}
        className="w-[200px] bg-[#6c757d] text-white flex justify-between items-center py-[6px] px-3 rounded"
      >
        <span>{t("languageSwitch")}</span>
        <i className="fa-solid fa-caret-down"></i>
      </button>
    </div>
  );
}

export default ChangeLangBtn;
