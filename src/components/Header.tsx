import Hamburger from "hamburger-react";
import Link from "next/link";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import SwitchLanguage from "./SwitchLanguage";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="container m-auto relative">
      {isOpen && (
        <>
          <div
            onClick={() => setOpen(false)}
            className="w-full h-screen bg-transparent fixed"
          />
          <div className="flex flex-col items-center fixed top-0 left-0 h-screen w-full max-w-[70%] bg-green-800 z-10 animate__animated animate__fadeInLeft">
            <div className="flex justify-center items-center flex-col border-b w-full pb-5 border-b-gray-400">
              <Link href={"/"}>
                <img
                  className="w-full max-w-40"
                  src="/assets/logo.png"
                  alt="Logo image"
                />
              </Link>
              <Link
                href={"https://www.bajighor88.com/register"}
                target="_blank"
                className="signup-btn"
              >
                {t("signup")}
              </Link>
            </div>
            <ul className="mobile-menu-ul flex flex-col items-start w-full gap-10 text-gray-300 text-sm font-semibold p-5">
              <li>
                <p>
                  <Link onClick={() => setOpen(false)} href={"/"}>
                    {t("helphome")}
                  </Link>
                </p>
              </li>
              <li>
                <p>
                  <Link onClick={() => setOpen(false)} href={"/#topicSection"}>
                    {t("helptopic")}
                  </Link>
                </p>
              </li>
              <li>
                <p>
                  <Link
                    onClick={() => setOpen(false)}
                    href={"/terms-and-conditions"}
                  >
                    {t("termsconditions")}
                  </Link>
                </p>
              </li>
              <li>{t("livestreaming")}</li>
              <li>
                <p>
                  <Link
                    onClick={() => setOpen(false)}
                    href={"/category/sports"}
                  >
                    {t("bajighor88sports")}
                  </Link>
                </p>
              </li>
              <li>
                <SwitchLanguage />
              </li>
            </ul>
          </div>
        </>
      )}
      {/* Mobile Menu */}
      <div className="flex md:hidden justify-between items-center px-5">
        <Hamburger toggled={isOpen} toggle={setOpen} color="#ffffff" />
        <Link href={"/"}>
          <img className="w-full max-w-40" src="/assets/logo.png" alt="Logo" />
        </Link>
        <Link
          href={"https://www.bajighor88.com/register"}
          target="_blank"
          className="signup-btn"
        >
          {t("signup")}
        </Link>
      </div>
      {/* Desktop Menu*/}
      <div className="hidden md:flex flex-row justify-between items-center">
        <Link href={"/"}>
          <img className="w-full max-w-40" src="/assets/logo.png" alt="Logo" />
        </Link>
        <ul className="flex flex-row items-center gap-10 text-gray-300 text-sm font-semibold menu-ul">
          <li>
            <p>
              <Link href={"/"}>{t("helphome")}</Link>
            </p>
          </li>
          <li>
            <p>
              <Link href={"/#topicSection"}>{t("helptopic")}</Link>
            </p>
          </li>
          <li>
            <p>
              <Link href={"/terms-and-conditions"}>{t("termsconditions")}</Link>
            </p>
          </li>
          <li>
            <p>{t("livestreaming")}</p>
          </li>
          <li>
            <p>
              <Link href={"/category/sports"}>{t("bajighor88sports")}</Link>
            </p>
          </li>
          <li>
            <SwitchLanguage />
          </li>
          <li className="block xl:hidden">
            <div>
              <Hamburger toggled={isOpen} toggle={setOpen} color="#ffffff" />
            </div>
          </li>
          <li>
            <Link
              href={"https://www.bajighor88.com/register"}
              target="_blank"
              className="signup-btn"
            >
              {t("signup")}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
