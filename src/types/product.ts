export interface ProductCardProps {
  product_id: number;
  name: string;
  price: number;
  brand_name: string;
  discount_percentage: number;
  product_image_url: string;
  price_after_discount: number;
}

export interface Product {
  product_id: number;
  name: string;
  price: number;
  brand_name: string;
  discount_percentage: number;
  product_image_url: string;
  averageRating: number;
  NumberOfRatings: number;
  totalCount: number;
  price_after_discount: number;
}
