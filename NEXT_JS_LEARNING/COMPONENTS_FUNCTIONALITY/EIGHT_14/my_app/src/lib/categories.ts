// Function to get all product categories
export async function getCategories() {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300))
  
    // Return mock categories
    return [
      "Electronics",
      "Wearables",
      "Photography",
      "Furniture",
      "Clothing",
      "Books",
      "Home & Kitchen",
      "Sports & Outdoors",
    ]
  }
  
  