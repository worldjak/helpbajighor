import Search from "@/components/Search";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

function Homepage() {
  const { t } = useTranslation();
  const topicCards: topicCard[] = [
    {
      title: t("topics.items.account"),
      image: "/assets/icons/account.png",
      href: "/category/account",
    },
    {
      title: t("topics.items.payment"),
      image: "/assets/icons/payment.png",
      href: "/category/payment",
    },
    {
      title: t("topics.items.tips"),
      image: "/assets/icons/tips.png",
      href: "/category/bajighor-tips",
    },
    {
      title: t("topics.items.promotions"),
      image: "/assets/icons/promotion.png",
      href: "/category/promotion",
    },
    {
      title: t("topics.items.sports"),
      image: "/assets/icons/sport.png",
      href: "/category/sports",
    },
    {
      title: t("topics.items.casino"),
      image: "/assets/icons/casino.png",
      href: "/category/casino",
    },
  ];

  return (
    <div className="w-full h-full">
      <div className="container m-auto">
        {/* Search section */}
        <Search />
        {/* Topics section */}
        <div className="w-full h-full">
          <div
            id="topicSection"
            className="flex justify-between items-center border-b border-b-[#5ba68a] px-3 py-1"
          >
            <h2 className="font-bold text-[20px] leading-[30px] text-white">
              {t("topics.title")}
            </h2>
            <Link href={"/all-faqs"} className="text-[#dedede] hover:underline">
              {t("topics.viewAllBtn")}
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-5 gap-5">
            {topicCards.map((item: topicCard, index: number) => (
              <Link
                className="bg-[#3d9172] border border-[#5ba68a] rounded-md py-[30px]"
                href={item.href}
                key={index}
              >
                <div className="w-full h-full flex items-center justify-center gap-5">
                  <img src={item.image} alt={`${item.title} image`} />
                  <p className="text-[18px] leading-[27px] text-white font-bold">
                    {item.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
