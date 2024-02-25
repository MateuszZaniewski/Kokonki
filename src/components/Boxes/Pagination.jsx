import { useEffect, useState, useRef } from "react";
import ReactPaginate from "react-paginate";
import Opinion from "./Opinion";

export default function Pagination({ opinions }) {
  const items = [...Array(opinions.length).keys()];
  const refList = useRef(null);

  function Items({ currentItems, opinions }) {
    return (
      <div className="items" ref={refList}>
        {currentItems &&
          currentItems.map((item) =>
            opinions.map((opinion, index) => {
              if (index === item) {
                return (
                  <div key={index}>
                    <Opinion value={opinion} />
                  </div>
                );
              }
            }),
          )}
      </div>
    );
  }

  function PaginatedItems({ itemsPerPage }) {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      setItemOffset(newOffset);
      refList.current.scrollIntoView({
        behavior: "smooth",
      });
    };

    return (
      <>
        <Items currentItems={currentItems} opinions={opinions} />
        <ReactPaginate
          className="mx-auto flex items-center justify-center gap-3 py-4 md:w-[450px] lg:w-[600px] lg:gap-5 xl:py-14"
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </>
    );
  }

  return <PaginatedItems itemsPerPage={4} />;
}
