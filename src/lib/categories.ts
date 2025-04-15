import { Category } from '../types/category';

// Mock categories - replace with database query in production
const mockCategories: Category[] = [
  {
    id: 'bossygel',
    name: 'BOSSYGEL',
    slug: 'bossygel',
    productCount: 1030,
    image: '/sample-2.jpg',
    children: [
      {
        id: 'gel-polish',
        name: 'Gel Polish',
        slug: 'gel-polish',
        productCount: 450,
        parentId: 'bossygel'
      },
      {
        id: 'base-coat',
        name: 'Base Coat',
        slug: 'base-coat',
        productCount: 4,
        parentId: 'bossygel'
      },
      {
        id: 'top-coat',
        name: 'Top Coat',
        slug: 'top-coat',
        productCount: 8,
        parentId: 'bossygel'
      },
      {
        id: 'builder-gel',
        name: 'Builder Gel',
        slug: 'builder-gel',
        productCount: 19,
        parentId: 'bossygel'
      },
      {
        id: 'cat-eye-gel',
        name: 'Cat Eye Gel',
        slug: 'cat-eye-gel',
        productCount: 113,
        parentId: 'bossygel'
      }
    ]
  },
  {
    id: 'dnd',
    name: 'DND',
    slug: 'dnd',
    productCount: 780,
    image: '/api/placeholder/400/400'
  },
  {
    id: 'apres',
    name: 'APRES',
    slug: 'apres',
    productCount: 95,
    image: '/api/placeholder/400/400'
  },
  {
    id: 'notpolish',
    name: 'NOTPOLISH',
    slug: 'notpolish',
    productCount: 120,
    image: '/api/placeholder/400/400'
  },
  {
    id: 'opi',
    name: 'OPI',
    slug: 'opi',
    productCount: 330,
    image: '/api/placeholder/400/400'
  },
  {
    id: 'nevermind',
    name: 'NEVERMIND',
    slug: 'nevermind',
    productCount: 42,
    image: '/api/placeholder/400/400'
  },
  {
    id: 'lamps',
    name: 'LAMPS',
    slug: 'lamps',
    productCount: 25,
    image: '/api/placeholder/400/400'
  },
  {
    id: 'e-files',
    name: 'E-FILES',
    slug: 'e-files',
    productCount: 18,
    image: '/api/placeholder/400/400'
  },
  {
    id: 'cnd',
    name: 'CND',
    slug: 'cnd',
    productCount: 240,
    image: '/api/placeholder/400/400'
  }
];

export async function getCategories(): Promise<Category[]> {
  // In a real application, fetch from database
  // For example with Prisma:
  // const categories = await prisma.category.findMany({
  //   include: {
  //     children: true
  //   }
  // });
  
  return mockCategories;
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  // In a real app:
  // return prisma.category.findUnique({
  //   where: { slug },
  //   include: { children: true }
  // });
  
  const category = mockCategories.find(c => c.slug === slug);
  
  if (!category) {
    // Try to find in subcategories
    for (const parentCategory of mockCategories) {
      if (parentCategory.children) {
        const childCategory = parentCategory.children.find(c => c.slug === slug);
        if (childCategory) {
          return {
            ...childCategory,
            parent: {
              id: parentCategory.id,
              name: parentCategory.name,
              slug: parentCategory.slug
            }
          };
        }
      }
    }
    return null;
  }
  
  return category;
}

export async function getPopularCategories(limit = 8): Promise<Category[]> {
  // In a real app:
  // return prisma.category.findMany({
  //   orderBy: { productCount: 'desc' },
  //   take: limit
  // });
  
  return mockCategories
    .sort((a, b) => b.productCount - a.productCount)
    .slice(0, limit);
}