import { NextRequest, NextResponse } from 'next/server';
import { getProducts } from '../../../lib/products';
// import { Product } from '../../../types/product';

export async function GET(request: NextRequest) {
  try {
    // Get query parameters
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const brand = searchParams.get('brand');
    const sort = searchParams.get('sort') || 'best-selling';
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '12');

    // Get products with filters
    const { products, total } = await getProducts({
      category,
      brand,
      sort,
      page,
      limit
    });

    // Return products with pagination info
    return NextResponse.json({
      products,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}