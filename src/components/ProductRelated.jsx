// import redHeartFillIcon from "../assets/redHeart-fill.svg";
import redHeartEmptyIcon from "../assets/redHeart-empty.svg";
import Promotion from "./Boxes/Promotion";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
export default function ProductRelated() {
  const { product } = useContext(AppContext);
  if (product && product.length > 0) {
    return (
      <>
        <div className="mx-auto hidden md:block xl:w-full xl:pb-20">
          <h2 className="pb-5 pl-4 font-bold xl:pb-11 xl:pl-14 xl:text-[20px]">
            Podobne produkty
          </h2>
          <div className="flex w-full flex-row flex-wrap justify-start gap-4 xl:flex-nowrap xl:gap-14">
            {product[0].related.map((item) => {
              return (
                <div
                  key={item.image}
                  className="relative mx-auto ml-4 flex w-[300px] cursor-pointer gap-4 md:w-[400px] lg:w-[500px] xl:w-auto xl:flex-col xl:gap-0"
                >
                  <div className="flex flex-col justify-center">
                    {item.promotion && (
                      <div className="absolute left-1 top-3 xl:left-2 xl:top-2">
                        <Promotion text="Promocja" visible={item.promotion} />
                      </div>
                    )}
                    <img
                      src={item.image}
                      className="h-[120px] min-h-[120px] min-w-[120px] rounded-md xl:h-[234px] xl:w-[243px] xl:rounded-none"
                    />
                  </div>
                  <div className="md:w-full">
                    <div className="flex flex-wrap items-center justify-between gap-4 pb-1 pt-6 xl:gap-0">
                      <h4 className="w-fit">{item.tittle}</h4>
                      <img
                        src={redHeartEmptyIcon}
                        className="h-[16px] w-[16px]"
                      />
                    </div>
                    <span className="break-all">{item.color}</span>
                    <div className="flex items-end gap-3 pt-1">
                      <span>{item.price}</span>
                      <span className="line-through xl:text-[13px]">
                        {item.lastprice}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="md:hidden">
          <h2 className="pb-5 pl-4 text-[16px] font-bold">Podobne produkty</h2>
          <div className="flex max-w-[400px] flex-col gap-10 px-4">
            {product[0].related.map((item) => {
              return (
                <div key={item.image} className="flex">
                  <div className="relative flex min-h-[120px] w-fit min-w-[120px] flex-col gap-2">
                    <img
                      src={item.image}
                      className="h-[130px] w-[120px] rounded-md"
                    />
                    {item.promotion && (
                      <div className="absolute left-1 top-2">
                        <Promotion text="Promocja" visible={item.promotion} />
                      </div>
                    )}
                  </div>
                  <div className="flex h-[130px] w-full flex-col gap-2 pl-2">
                    <div className="flex items-center justify-between">
                      <h4 className="w-fit">{item.tittle}</h4>
                      <img
                        src={redHeartEmptyIcon}
                        className="h-[16px] w-[16px]"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="break-all pb-2">{item.color}</span>
                      <div className="flex gap-5">
                        <span>{item.price}</span>
                        <span className="line-through xl:text-[13px]">
                          {item.lastprice}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
