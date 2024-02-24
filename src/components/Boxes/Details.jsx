import arrowUpIcon from "../../assets/arrow-up.svg";
import arrowDownIcon from "../../assets/arrow-down.svg";
import DetailsSingleRow from "./DetailsSingleRow";
import { useRef } from "react";
export default function Details({ visiblePage, setVisiblePage, product }) {
  const myRef = useRef(null);
  const handleClick = async () => {
    await setVisiblePage(2);
    myRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div
      onClick={handleClick}
      className="border-b-2 border-black py-4 xl:w-[538px]"
    >
      <div className="flex cursor-pointer justify-between">
        <span ref={myRef} className="font-bold uppercase xl:text-[13px]">
          Szczególy
        </span>
        <img src={visiblePage === 2 ? arrowUpIcon : arrowDownIcon} />
      </div>

      <div className={`${visiblePage === 2 ? "block" : "hidden"} px-5 pt-3`}>
        <div className="flex-col">
          <DetailsSingleRow category="Materiał: " text={product[0].material} />
          <DetailsSingleRow
            category="Grupa włóczek: "
            text={product[0].group}
          />
          <DetailsSingleRow
            category="Waga/długość motka: "
            text={product[0].wage}
          />
          <DetailsSingleRow
            category="Zalecany rozmiar drutów: "
            text={product[0].recomended}
          />
          <DetailsSingleRow category="Próbka: " text={product[0].case} />
          <DetailsSingleRow
            category="Pielęgnacja: "
            text={product[0].wash}
            wash={true}
          />
          <DetailsSingleRow
            category="Superwash: "
            text={product[0].superwash}
          />
          <DetailsSingleRow category="Made in: " text={product[0].madein} />
          <DetailsSingleRow
            category="Pochodzenie surowca: "
            text={product[0].source}
          />
        </div>
      </div>
    </div>
  );
}
