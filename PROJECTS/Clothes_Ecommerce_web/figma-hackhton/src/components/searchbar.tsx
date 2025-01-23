"use client";
import { client } from "@/sanity/lib/client";
import { fetchAndUploadProducts } from "@/services/api";
import { useEffect, useState } from "react";

// Define the CardItem interface to include price and category
interface CardItem {
  imageUrl: string;
  name: string;
  rating: number;
  price: number;
  _id: string;
  isNew: boolean;
  category: string; // Add category field
}

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Initialize the state as an array of CardItem
  const [Cardapi, setCard] = useState<CardItem[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch product data from Sanity
        const products = await client.fetch(`*[_type=="products"]{
          _id,
          name,
          description,
          price,
          "imageUrl" : image.asset->url,
          category,
          discountPercent,
          "isNew": new,
          colors,
          sizes
        }`);

        setCard(products);

        // If products are empty, fetch and upload more
        if (!products || products.length === 0) {
          await fetchAndUploadProducts();

          const moreProducts = await client.fetch(`*[_type == "product"][]{
            _id,
            name,
            description,
            "isNew": new,
            price,
            discountPercentage,
            priceWithoutDiscount,
            rating,
            ratingCount,
            category,
            sizes,
            "imageUrl": image.asset->url
          }`);

          setCard(moreProducts);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on the search query
  const filteredProducts = Cardapi.filter((product) => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.price.toString().includes(searchQuery) // Filter by price as well
  );

  return (
    <div className="max-w-md mx-auto mt-10">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search products..."
        className="w-full p-2 border rounded-lg text-lg"
      />

      <div id="productList" className="mt-6 space-y-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div key={index} className="product p-4 border rounded-lg">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-500">Category: {product.category}</p>
              <p className="text-gray-500">Price: ${product.price}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
