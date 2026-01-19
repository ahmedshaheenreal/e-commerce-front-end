import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
function BreadCumber({ name }: { name: string }) {
  return (
    <Breadcrumb className="hidden md:flex font-medium py-4 text-base">
      <BreadcrumbList>
        <BreadcrumbLink href="/" className="text-primary">
          Home
        </BreadcrumbLink>
        <BreadcrumbSeparator />
        <BreadcrumbPage className="text-low-emphasis">{name}</BreadcrumbPage>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default BreadCumber;
