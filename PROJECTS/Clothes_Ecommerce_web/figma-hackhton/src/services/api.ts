"use server"

import { client } from "@/sanity/lib/client";


async function uploadImageToSanity(imageUrl: string) {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error(`Failed to fetch image: ${response.statusText}`);
    const blob = await response.blob();
    const asset = await client.assets.upload('image', blob);

    return asset;
  } catch (error) {
    console.error('Image upload failed:', error);
    throw error;
  }
}

export async function fetchAndUploadProducts() {
  try {
  
    const response = await fetch('https://template1-neon-nu.vercel.app/api/products');
    
    if (!response.ok) throw new Error(`Failed to fetch products: ${response.statusText}`);
    const products = await response.json();
    

    for (const product of products) {
      const imageAsset = await uploadImageToSanity(product.imageUrl);

      const sanityProduct = {
        _id: `products_${product._id}`,
        _type: 'products',
        name: product.name,
        description: product.description,
        price: product.price,
        image: {
          _type: 'image',
          asset: {
            _ref: imageAsset._id,
          },
        },
        category: product.category,
        discountPercent: product.discountPercent,
        new: product.isNew,
        colors: product.colors,
        sizes: product.sizes
      };

      await client.createOrReplace(sanityProduct);
    }

   

  } catch (error) {
    console.error("Data fetching failed:", error);
    throw error;
  }
}

