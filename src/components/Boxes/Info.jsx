import arrowUpIcon from "../../assets/arrow-up.svg";
import arrowDownIcon from "../../assets/arrow-down.svg";
import { useRef } from "react";
export default function Info({ visiblePage, setVisiblePage, product }) {
  const myRef = useRef(null);
  const handleClick = async () => {
    await setVisiblePage(1);
    myRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div
      onClick={handleClick}
      className="border-b-2 border-black py-4 xl:w-[538px]"
    >
      <div ref={myRef} className="flex cursor-pointer justify-between">
        <span className="font-bold uppercase xl:text-[13px]">
          Opis produktu
        </span>
        <img src={visiblePage === 1 ? arrowUpIcon : arrowDownIcon} />
      </div>

      <div className={`${visiblePage === 1 ? "block" : "hidden"} pl-5 pt-3`}>
        <p className=" whitespace-pre-wrap">{product[0].description}</p>
      </div>
    </div>
  );
}
