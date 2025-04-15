import { Product } from '../types/product';
// import prisma from './prisma';

// If using a database, replace mockProducts with actual DB query
const mockProducts: Product[] = [
  {
    id: 'bossy-gel-supershine',
    brand: 'BOSSY',
    name: 'Bossy Gel Supershine No Wipe Top Coat',
    description: 'A high-shine, no-wipe top coat that seals and protects nail designs.',
    price: 13.00,
    originalPrice: 15.00,
    image: '/sample-2.jpg',
    category: 'top-coat',
    rating: 5,
    reviewCount: 36,
    inventory: 42,
    discount: {
      type: 'percentage',
      amount: 20,
    },
    hasOptions: true,
    slug: 'bossy-gel-supershine-no-wipe-top-coat',
    createdAt: new Date('2024-01-15'),
  },
  {
    id: 'bossy-gel-base',
    brand: 'BOSSY',
    name: 'Bossy Gel Base Coat',
    description: 'Professional quality gel base coat for longer lasting manicures.',
    price: 12.50,
    originalPrice: 15.00,
    image: '/sample-2.jpg',
    category: 'base-coat',
    rating: 5,
    reviewCount: 13,
    inventory: 28,
    discount: {
      type: 'percentage',
      amount: 20,
    },
    hasOptions: true,
    slug: 'bossy-gel-base-coat',
    createdAt: new Date('2024-01-20'),
  },
  {
    id: 'bossy-gel-polish',
    brand: 'BOSSY',
    name: 'Bossy Gel Polish BS 183 White',
    description: 'Pure white gel polish for clean, bright nail designs.',
    price: 10.00,
    originalPrice: 10.00,
    image: '/sample-2.jpg',
    category: 'gel-polish',
    rating: 3,
    reviewCount: 1,
    inventory: 15,
    hasOptions: false,
    slug: 'bossy-gel-polish-bs-183-white',
    createdAt: new Date('2024-02-05'),
  }
];

// Add more mock products for testing purposes
for (let i = 0; i < 10; i++) {
  mockProducts.push({
    id: `product-${i + 4}`,
    brand: 'BOSSY',
    name: `Bossy Gel Polish Color #${100 + i}`,
    description: 'Professional gel polish for salon-quality nails.',
    price: 9.99 + i,
    originalPrice: 9.99 + i,
    image: '/sample-2.jpg',
    category: 'gel-polish',
    rating: Math.min(5, 3 + (i % 3)),
    reviewCount: i * 2,
    inventory: 10 + i,
    hasOptions: i % 2 === 0,
    slug: `bossy-gel-polish-color-${100 + i}`,
    createdAt: new Date(`2024-03-${i + 1}`),
  });
}

interface GetProductsParams {
  category?: string | null;
  brand?: string | null;
  sort?: string;
  page?: number;
  limit?: number;
}

export async function getProducts(params: GetProductsParams) {
  const { category, brand, sort = 'best-selling', page = 1, limit = 12 } = params;
  
  // In a real app, you'd query your database here
  // For example with Prisma:
  // const products = await prisma.product.findMany({
  //   where: {
  //     ...(category ? { category } : {}),
  //     ...(brand ? { brand } : {})
  //   },
  //   orderBy: getSortOption(sort),
  //   skip: (page - 1) * limit,
  //   take: limit,
  // });
  
  // Filter products
  let filteredProducts = [...mockProducts];
  console.log('Products:', filteredProducts);
  if (category) {
    // filteredProducts = filteredProducts.filter(p => p.category === category);
  }
  
  if (brand) {
    filteredProducts = filteredProducts.filter(p => p.brand === brand);
  }
  
  // Sort products
  switch (sort) {
    case 'price-low-high':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high-low':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'newest':
      filteredProducts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      break;
    case 'best-selling':
    default:
      filteredProducts.sort((a, b) => b.reviewCount - a.reviewCount);
      break;
  }
  
  // Paginate
  const total = filteredProducts.length;
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginatedProducts = filteredProducts.slice(start, end);

  return {
    products: paginatedProducts,
    total
  };
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  // In a real app:
  // return prisma.product.findUnique({
  //   where: { slug }
  // });
  
  const product = mockProducts.find(p => p.slug === slug);
  return product || null;
}

export async function getFeaturedProducts(limit = 4): Promise<Product[]> {
  // In a real app:
  // return prisma.product.findMany({
  //   where: { featured: true },
  //   take: limit
  // });
  
  return mockProducts
    .sort((a, b) => b.reviewCount - a.reviewCount)
    .slice(0, limit);
}