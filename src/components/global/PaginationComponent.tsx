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
  const router = useRouter();
  return (
    <div>
      <Pagination>
        <PaginationPrevious
          className="cursor-pointer"
          href={`${pagenationPath}?page=${
            Number(currPage) > 1 ? Number(currPage) - 1 : 1
          }`}
          aria-disabled={Number(currPage) <= 1}
        />

        <PaginationContent>
          {Array.from({ length: number_of_pages }, (_, i) => (
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
