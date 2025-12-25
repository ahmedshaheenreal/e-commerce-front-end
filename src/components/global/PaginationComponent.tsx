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
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
function PaginationComponent({
  number_of_pages,
  pagenationPath,
}: {
  number_of_pages: number;
  pagenationPath: string;
}) {
  const currPage = useSearchParams().get("page") || "1";
  return (
    <div>
      <Pagination className="text-primary">
        <PaginationPrevious
          className="cursor-pointer"
          href={`${pagenationPath}?page=${
            Number(currPage) > 1 ? Number(currPage) - 1 : 1
          }`}
          aria-disabled={Number(currPage) <= 1}
        />

        <PaginationContent>
          {Array.from({ length: 3 }, (_, i) => (
            <PaginationItem
              key={i + 1}
              className="cursor-pointer"
              aria-activedescendant=""
            >
              <PaginationLink
                href={`${pagenationPath}?page=${i + 1}`}
                isActive={Number(currPage) === i + 1}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationEllipsis />
        </PaginationContent>
        <PaginationNext
          onClick={(e) => {
            if (Number(currPage) >= number_of_pages) {
              e.preventDefault();
              return;
            }
          }}
          className="cursor-pointer"
          href={`${pagenationPath}?page=${
            Number(currPage) >= number_of_pages
              ? number_of_pages
              : Number(currPage) + 1
          }`}
          aria-disabled={Number(currPage) >= number_of_pages}
        />
      </Pagination>
    </div>
  );
}

export default PaginationComponent;

/*

"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Props {
  totalItems: number;   // e.g. 120
  itemsPerPage: number; // e.g. 10
  currentPage: number;  // e.g. 1
}

export function PaginatedList({ totalItems, itemsPerPage, currentPage }: Props) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const start = (currentPage - 1) * itemsPerPage + 1;
  const end = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="space-y-4">
  
      <p className="text-sm text-muted-foreground">
        Showing {start}–{end} of {totalItems}
      </p>

 
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href={`?page=${currentPage - 1}`} />
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                href={`?page=${i + 1}`}
                isActive={i + 1 === currentPage}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext href={`?page=${currentPage + 1}`} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
*/
