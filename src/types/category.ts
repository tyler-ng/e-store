export interface Category {
    id: string;
    name: string;
    slug: string;
    productCount: number;
    image?: string;
    description?: string;
    children?: Category[];
    parentId?: string;
    parent?: {
      id: string;
      name: string;
      slug: string;
    };
}