export type PropertyCategory = "buy" | "rent";
export type PropertyType = "house" | "apartment" | "land";

export interface Property {
  id: number;
  title: string;
  type: PropertyType;
  category: PropertyCategory;
  location: string;
  price: number;
  popularity: number;

  petFriendly?: boolean;
  balcony?: boolean;
  swimmingPool?: boolean;
  proximity?: string;
  acres?: number;
}
