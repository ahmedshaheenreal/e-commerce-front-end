"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useWishList } from "@/stores/wishlist.sstore";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
function PaginationComponent({
  number_of_pages,
  pagenationPath,
}: {
  number_of_pages: number;
  pagenationPath: string;
}) {
  const isWishlist = usePathname().includes("wishlist");
  const fetchPage = useWishList((s) => s.fetchPage);
  const currPage = useSearchParams().get("page") || "1";
  const getPageNumbers = () => {
    const pages = [];
    let currentPage = Number(currPage);
    if (number_of_pages <= 5) {
      for (let i = 1; i <= number_of_pages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("ellipsis");

      if (currentPage > 2 && currentPage < number_of_pages - 1) {
        pages.push(currentPage - 1, currentPage, currentPage + 1);
      } else if (currentPage <= 2) {
        pages.push(2, 3);
      } else {
        pages.push(number_of_pages - 2, number_of_pages - 1);
      }

      if (currentPage < number_of_pages - 2) pages.push("ellipsis");
      pages.push(number_of_pages);
    }
    return pages;
  };
  return (
    <div className="flex justify-center flex-col my-8 px-4 ">
      <Pagination className="text-primary max-w-3/4 space-x-2">
        <PaginationPrevious
          className="cursor-pointer  bg-grey "
          onClick={(e) => {
            if (Number(currPage) <= 1) {
              e.preventDefault();
              return;
            }
            if (isWishlist)
              fetchPage(Number(currPage) > 1 ? Number(currPage) - 1 : 1);
          }}
          href={`${pagenationPath}?page=${
            Number(currPage) > 1 ? Number(currPage) - 1 : 1
          }`}
          aria-disabled={Number(currPage) <= 1}
        />
        <PaginationContent>
          {getPageNumbers().map((page, i) => (
            <PaginationItem
              key={i + 1}
              className="hidden md:flex items-center gap-1 cursor-pointer"
              aria-activedescendant=""
            >
              {page === "ellipsis" ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink
                  href={`${pagenationPath}?page=${i + 1}`}
                  isActive={Number(currPage) === i + 1}
                  onClick={() => {
                    if (isWishlist) fetchPage(Number(currPage) + 1);
                  }}
                >
                  {i + 1}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}
        </PaginationContent>
        <PaginationNext
          onClick={(e) => {
            if (Number(currPage) >= number_of_pages) {
              e.preventDefault();
              return;
            }
            if (isWishlist)
              fetchPage(
                Number(currPage) < number_of_pages ? Number(currPage) + 1 : 1,
              );
          }}
          className="cursor-pointer  bg-grey "
          href={`${pagenationPath}?page=${
            Number(currPage) >= number_of_pages
              ? number_of_pages
              : Number(currPage) + 1
          }`}
          aria-disabled={Number(currPage) >= number_of_pages}
        />
      </Pagination>

      <p className="text-primary mt-4 md:hidden mx-auto">
        Page {currPage} of {number_of_pages}
      </p>
    </div>
  );
}

export default PaginationComponent;
