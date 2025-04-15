'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { getProducts } from '../lib/products';
import { redirect } from 'next/navigation';

export async function fetchHomePageData() {
    // Fetch featured products for the homepage
    const { products: featuredProducts } = await getProducts({
        limit: 6,
        sort: 'best-selling'
    });
    
    // Fetch new arrivals
    const { products: newArrivals } = await getProducts({
        limit: 4,
        sort: 'newest'
    });
    
    // Fetch sale items
    const { products: saleItems } = await getProducts({
        limit: 4
    });
    
    return {
        featuredProducts,
        newArrivals,
        saleItems
    };
}

export async function searchProducts(formData: FormData) {
    const searchQuery = formData.get('query') as string;
    
    // Store the search query for analytics purposes (optional)
    if (searchQuery && searchQuery.trim().length > 0) {
        // You could log this to your analytics platform
        console.log(`Search query: ${searchQuery}`);
    }
    
    // Redirect to search results page
    redirect(`/search?q=${encodeURIComponent(searchQuery)}`);
}

export async function addToCart(formData: FormData) {
    const productId = formData.get('productId') as string;
    const quantity = parseInt(formData.get('quantity') as string || '1');
    const options = formData.get('options') as string; // JSON string of selected options
    
    // Get current cart from cookies - need to await the cookies() function
    const cookieStore = await cookies();
    const cartCookie = cookieStore.get('cart')?.value;
    const cart = cartCookie ? JSON.parse(cartCookie) : { items: [] };
    
    // Check if item already exists in cart
    const existingItemIndex = cart.items.findIndex(
      (item: any) => item.productId === productId && item.options === options
    );
    
    if (existingItemIndex >= 0) {
      // Update quantity if item exists
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      // Add new item to cart
      cart.items.push({
        productId,
        quantity,
        options,
        addedAt: new Date().toISOString()
      });
    }
  
    // Update cart cookie (expires in 30 days)
    // Also need to await here
    await cookieStore.set('cart', JSON.stringify(cart), {
      expires: Date.now() + 30 * 24 * 60 * 60 * 1000,
      path: '/'
    });
    
    // Revalidate cart-related pages
    revalidatePath('/cart');
    revalidatePath('/checkout');
    
    return { success: true };
}

export async function toggleWishlist(productId: string) {
    // Get current wishlist from cookies
    const cookieStore = await cookies();
    const wishlistCookie = cookieStore.get('wishlist')?.value;
    let wishlist = wishlistCookie ? JSON.parse(wishlistCookie) : { items: [] };
    
    // Check if product is already in wishlist
    const existingIndex = wishlist.items.indexOf(productId);
    
    if (existingIndex >= 0) {
        // Remove from wishlist
        wishlist.items.splice(existingIndex, 1);
    } else {
        // Add to wishlist
        wishlist.items.push(productId);
    }
    
    // Update wishlist cookie (expires in 365 days)
    cookieStore.set('wishlist', JSON.stringify(wishlist), {
        expires: Date.now() + 365 * 24 * 60 * 60 * 1000,
        path: '/'
    });
    
    // Revalidate wishlist page
    revalidatePath('/wishlist');
    
    return { inWishlist: existingIndex < 0 };
}