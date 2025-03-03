/* eslint-disable @typescript-eslint/no-explicit-any, react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import LiveChat from "./LiveChat";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import { useLanguageStore } from "@/store/useLanguageStore";
import i18n from "./i18n";
import { useTranslation } from "react-i18next";

function Layout({ children }: { children: any }) {
  const { language } = useLanguageStore((state) => state); // Use Zustand store
  const { t } = useTranslation();

  useEffect(() => {
    // Sync the language with i18next
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [language, i18n]);

  return (
    <>
      <Head>
        <title>{t("websiteTitle")}</title>
        <meta name="description" content={t("websiteDescription")} />
        <meta
          name="keywords"
          content="Bajighor88 support, Bajighor88 সাপোর্ট, Help Bajighor88 Live, Bajighor88 লাইভ হেল্প, Betting support, বেটিং সাপোর্ট, Online gaming help, অনলাইন গেমিং সহায়তা, Account assistance, অ্যাকাউন্ট সহায়তা, Customer service, গ্রাহক সেবা, Live chat support, লাইভ চ্যাট সাপোর্ট, Betting inquiries, বেটিং প্রশ্নাবলী"
        />
      </Head>
      <div className="w-full h-full">
        <Header />
        {children}
        <Footer />
        {/* <LiveChat /> */}
      </div>
    </>
  );
}

export default Layout;
