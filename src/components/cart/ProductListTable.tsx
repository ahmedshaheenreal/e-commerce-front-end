import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableHeader,
  TableCaption,
  TableFooter,
} from "@/components/ui/table";

import CartTableRows from "./CartTableRows";
import FooterData from "./FooterData";
import ProductListTableMobile from "./ProductListTableMobile";
import MobileFooterData from "@/components/cart/MobileFooterData";

async function ProductListTable() {
  return (
    <>
      {/* Desktop Table - Hidden on small/medium screens */}
      <div className="hidden lg:block w-full">
        <Table className="table-fixed w-full ">
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader className="">
            <TableRow>
              <TableHead className="w-50  ">Product Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Qty</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <CartTableRows />
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableHead className="w-50">Total</TableHead>
              <TableHead className=" "></TableHead>
              <TableHead className=" "></TableHead>

              <FooterData />
            </TableRow>
          </TableFooter>
        </Table>
      </div>

      {/* Mobile/Tablet Card Layout - Visible on small/medium screens */}
      <div className="lg:hidden w-full">
        <ProductListTableMobile />
        <MobileFooterData />
      </div>
    </>
  );
}

export default ProductListTable;
