
export interface Review {
  customer: string;
  review: string;
  score: number;
}

export interface WeeklySalesData {
  weekEnding: Date;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  brand: string;
  retailer: string;
  reviews: Review[];
  details: string[];
  tags: string[];
  sales: WeeklySalesData[];
}