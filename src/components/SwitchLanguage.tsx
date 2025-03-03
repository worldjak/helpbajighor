import { useLanguageStore } from "@/store/useLanguageStore";
import { useTranslation } from "next-i18next";
import React from "react";

function SwitchLanguage() {
  const { t } = useTranslation();
  const { setLanguage } = useLanguageStore((state) => state);
  return (
    <div className="mx-auto flex w-full items-center justify-center">
      <div className="group relative cursor-pointer">
        <div className="flex items-center justify-between space-x-2 bg-[#2c6952] pr-2 rounded">
          <button className="menu-hover py-1 text-base font-medium text-white lg:mx-4">
            {t("languageSwitch")}
          </button>
          <i className="fa-solid fa-caret-down"></i>
        </div>
        <div className="invisible absolute z-50 flex w-full flex-col bg-[#245743] py-1 px-4 text-white shadow-xl group-hover:visible">
          <button
            onClick={() => setLanguage("en")}
            className="my-2 block border-b border-gray-300 py-1 font-semibold text-gray-100 hover:text-gray-400 md:mx-2"
          >
            English
          </button>
          <button
            onClick={() => setLanguage("bn")}
            className="my-2 block border-b border-gray-300 py-1 font-semibold text-gray-100 hover:text-gray-400 md:mx-2"
          >
            বাংলা
          </button>
        </div>
      </div>
    </div>
  );
}

export default SwitchLanguage;
