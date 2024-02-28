import logo from "../assets/logo.svg";
import downArrowIcon from "../assets/arrow-down.svg";
import upArrowIcon from "../assets/arrow-up.svg";
import { useState } from "react";
import { useVisibilityStore } from "../store/store";
export default function Footer() {
  const [openShopLinks, setOpenShopLinks] = useState(true);
  const [openHelpLinks, setOpenHelpLinks] = useState(false);
  const [openAccountLinks, setOpenAccountLinks] = useState(false);
  const [openInfoLinks, setOpenInfoLinks] = useState(false);
  const toggleShowDemo = useVisibilityStore((state) => state.toggleShowDemo);
  const listClass =
    "xl:pb-[10px] lg:pb-[8px] md:pb-[6px] pb-[5px] cursor-pointer hover:text-[#F6C48F]";

  const shopLinks = [
    "Dostawa",
    "Dostępność",
    "Formy płatności",
    "Czas realizacji zamówienia",
    "Zwroty i reklamacje",
    "Program lojalnościowy",
    "Hurt",
  ];
  const helpLinks = [
    "Blog",
    "FAQ - częste pytania",
    "Polityka prywatności",
    "Regulaminy",
    "CAL/KAL - wspólne dzierganie",
    "Tester kolorów chust",
    "Konfigurator motków",
  ];
  const accountLinks = [
    "Logowanie",
    "Newsletter",
    "Moje zamówienia",
    "Przechowalnia",
    "Ustawienia konta",
  ];
  const infoLinks = [
    "O nas",
    "Kontakt",
    "Facebook",
    "Instagram",
    "Pomagamy",
    "Opinie Trustmate",
  ];

  return (
    <div className="xl:py-10 ">
      <div className="md:hidden">
        <div className="pl-2 xl:pl-16">
          <img
            src={logo}
            className="h-[10vw] max-h-[60px] w-[18.7wv] max-w-[340px] md:h-[5vw] lg:h-[4vw] xl:h-[4.2vw]"
          />
        </div>
        <div className="mx-auto flex flex-col gap-4 px-[4vw] pt-10 text-[#222220] md:flex-row md:flex-wrap md:gap-8 md:px-[7vw] lg:flex-nowrap lg:justify-around lg:gap-10 lg:px-[10vw] xl:gap-20 xl:px-[13.6vw]">
          <ul>
            <div
              className="flex justify-between pb-4 text-[14px] font-bold"
              onClick={() => setOpenShopLinks(!openShopLinks)}
            >
              <span>ZAKUPY</span>
              <img src={openShopLinks ? downArrowIcon : upArrowIcon} />
            </div>
            {openShopLinks &&
              shopLinks.map((link) => (
                <li
                  onClick={() => toggleShowDemo()}
                  className={listClass}
                  key={link}
                >
                  {link}
                </li>
              ))}
          </ul>
          <ul>
            <div
              className="flex justify-between pb-4 text-[14px] font-bold"
              onClick={() => setOpenHelpLinks(!openHelpLinks)}
            >
              <span>POMOC</span>
              <img src={openHelpLinks ? downArrowIcon : upArrowIcon} />
            </div>
            {openHelpLinks &&
              helpLinks.map((link) => (
                <li
                  onClick={() => toggleShowDemo()}
                  className={listClass}
                  key={link}
                >
                  {link}
                </li>
              ))}
          </ul>
          <ul>
            <div
              className="flex justify-between pb-4 text-[14px] font-bold"
              onClick={() => setOpenAccountLinks(!openAccountLinks)}
            >
              <span>MOJE KONTO</span>
              <img src={openAccountLinks ? downArrowIcon : upArrowIcon} />
            </div>
            {openAccountLinks &&
              accountLinks.map((link) => (
                <li
                  onClick={() => toggleShowDemo()}
                  className={listClass}
                  key={link}
                >
                  {link}
                </li>
              ))}
          </ul>
          <ul>
            <div
              className="flex justify-between pb-4 text-[14px] font-bold"
              onClick={() => setOpenInfoLinks(!openInfoLinks)}
            >
              <span>INFORMACJE</span>
              <img src={openInfoLinks ? downArrowIcon : upArrowIcon} />
            </div>
            {openInfoLinks &&
              infoLinks.map((link) => (
                <li
                  onClick={() => toggleShowDemo()}
                  className={listClass}
                  key={link}
                >
                  {link}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="pl-2 xl:pl-16">
          <img
            src={logo}
            className="h-[10vw] max-h-[60px] w-[18.7wv] max-w-[340px] md:h-[5vw] lg:h-[4vw] xl:h-[4.2vw]"
          />
        </div>
        <div className="mx-auto flex flex-col gap-4 px-[4vw] pt-10 text-[#222220] md:flex-row md:flex-wrap md:gap-8 md:px-[7vw] lg:flex-nowrap lg:justify-around lg:gap-10 lg:px-[10vw] xl:gap-20 xl:px-[13.6vw]">
          <ul>
            <div className="flex pb-4 font-bold">
              <span>ZAKUPY</span>
            </div>
            {shopLinks.map((link) => (
              <li
                onClick={() => toggleShowDemo()}
                className={listClass}
                key={link}
              >
                {link}
              </li>
            ))}
          </ul>
          <ul>
            <div className="flex pb-4 font-bold">
              <span>POMOC</span>
            </div>
            {helpLinks.map((link) => (
              <li
                onClick={() => toggleShowDemo()}
                className={listClass}
                key={link}
              >
                {link}
              </li>
            ))}
          </ul>
          <ul>
            <div className="flex pb-4 font-bold">
              <span>MOJE KONTO</span>
            </div>
            {accountLinks.map((link) => (
              <li
                onClick={() => toggleShowDemo()}
                className={listClass}
                key={link}
              >
                {link}
              </li>
            ))}
          </ul>
          <ul>
            <div className="flex pb-4 font-bold">
              <span>INFORMACJE</span>
            </div>
            {infoLinks.map((link) => (
              <li
                onClick={() => toggleShowDemo()}
                className={listClass}
                key={link}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
