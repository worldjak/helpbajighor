import moment from "moment";
import Link from "next/link";
import React from "react";
import ChangeLangBtn from "./ChangeLangBtn";
import { useTranslation } from "react-i18next";

interface footerLinksProps {
  title: string;
  href: string;
}
interface footerIconsProps {
  name: string;
  href: string;
}

function Footer() {
  const { t } = useTranslation();
  const footerLinks: footerLinksProps[] = [
    { title: t("privacypolicy"), href: "/privacy-policy" },
    { title: t("termsconditions"), href: "/terms-and-conditions" },
    { title: t("kyc"), href: "/kyc" },
    { title: t("responsiblegaming"), href: "/responsible-gaming" },
    { title: t("rulesregulations"), href: "/rules-and-regulations" },
  ];
  const footerIcons: footerIconsProps[] = [
    {
      name: "fa-solid fa-envelope",
      href: "mailto:support@bajighor88.com",
    },
    {
      name: "fa-brands fa-facebook",
      href: "https://www.facebook.com/bajighor88",
    },
    {
      name: "fa-brands fa-telegram",
      href: "https://t.me/bajighor88",
    },
    {
      name: "fa-brands fa-whatsapp",
      href: "https://www.whatsapp.com/channel/0029Vb1ySPgEquiUAJfTOi2F",
    },
  ];
  return (
    <>
      <div className="w-full h-full">
        <img src="/assets/home-banner.jpg" alt="Home Banner" />
      </div>
      <div className="w-full h-full bg-[#353535] text-[#dedede] text-sm">
        <div className="container m-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 py-12 px-[15px] gap-5 lg:gap-0">
            <div className="flex flex-col justify-center items-center">
              <Link href={"/"}>
                <img
                  className="w-full max-w-40"
                  src="/assets/logo.png"
                  alt="Logo"
                />
              </Link>
              <p className="text-[#606060]">
                {t("copyright")} {moment().year()}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {footerLinks.map((item: footerLinksProps, index: number) => (
                <div
                  className="flex justify-center lg:justify-start"
                  key={index}
                >
                  <Link className="hover:underline" href={item.href}>
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center lg:justify-start items-center">
              <ChangeLangBtn />
              <div className="mt-5 flex items-center gap-2">
                {footerIcons.map((item: footerIconsProps, index: number) => (
                  <Link
                    target="_blank"
                    className="social-circle"
                    href={item.href}
                    key={index}
                    aria-label={item.name}
                    title={item.href}
                  >
                    <i className={item.name}></i>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
