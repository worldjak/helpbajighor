/* eslint-disable react-hooks/exhaustive-deps */
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "animate.css";
import type { AppProps } from "next/app";
import { I18nextProvider } from "react-i18next";
import i18n from "@/components/i18n";
import { useEffect, useState } from "react";
import { useLanguageStore } from "@/store/useLanguageStore";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function App({ Component, pageProps }: AppProps) {
  const { setLanguage } = useLanguageStore();
  const [loadState, setLoadState] = useState(true);

  useEffect(() => {
    const localLang = localStorage.getItem("i18nextLng");
    if (localLang) {
      setLanguage(localLang);
    }
    setLoadState(false);
  }, []);

  if (loadState) {
    return null;
  }

  return (
    <I18nextProvider i18n={i18n}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
      <SpeedInsights />
    </I18nextProvider>
  );
}
