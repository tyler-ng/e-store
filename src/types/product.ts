export interface Product {
    id: string;
    name: string;
    brand: string;
    description: string;
    price: number;
    originalPrice: number;
    image: string;
    category: string;
    rating: number;
    reviewCount: number;
    inventory: number;
    discount?: {
      type: 'percentage' | 'fixed' | 'upto';
      amount: number;
    };
    hasOptions: boolean;
    slug: string;
    createdAt: Date;
    options?: ProductOption[];
}
  
export interface ProductOption {
    id: string;
    name: string;
    values: OptionValue[];
}
  
export interface OptionValue {
    id: string;
    name: string;
    swatch?: string;
}
  
export interface ProductFilter {
    id: string;
    name: string;
    options: ProductFilterOption[];
}
  
export interface ProductFilterOption {
    id: string;
    name: string;
    count: number;
}