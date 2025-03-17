"use client" // Ensure this runs on the client-side in Next.js

import { create } from "zustand" // Zustand ko import kar rahe hain for state management
import { persist } from "zustand/middleware" // Persist middleware import kiya for localStorage support
import type { Product } from "./data" // Product type import kiya taake hum define kar sakein ke product ka structure kya hoga

// 🛒 Cart item ka type define kar rahe hain
// Har cart item ek product aur uski quantity rakhta hai
type CartItem = {
  product: Product;
  quantity: number;
};

// 📦 Store ka structure define kar rahe hain
// Yeh batata hai ke humare store me kaunsa data aur functions honge
type StoreState = {
  cart: CartItem[]; // Cart ka array jo products store karega
  wishlist: Product[]; // Wishlist ka array jo products store karega
  
  addToCart: (product: Product) => void; // Function jo cart me product add karega
  removeFromCart: (productId: string) => void; // Function jo cart se product hatayega
  updateQuantity: (productId: string, quantity: number) => void; // Function jo cart item ki quantity update karega
  clearCart: () => void; // Function jo cart ko completely empty karega
  addToWishlist: (product: Product) => void; // Function jo product wishlist me add karega
  removeFromWishlist: (productId: string) => void; // Function jo wishlist se product remove karega
  getCartTotal: () => number; // Function jo cart ka total price calculate karega
};

// 🏪 Zustand ka global store bana rahe hain
export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({ // set function state update karne ke liye hai, get function current state lene ke liye hai
      
      // 🛒 Cart aur Wishlist initially empty hain
      cart: [],
      wishlist: [],

      // ➕ Cart me item add karne ka function
      addToCart: (product: Product) => {
        const currentCart = get().cart; // Current cart ko get kar rahe hain
        const existingItem = currentCart.find((item) => item.product.id === product.id); // Check kar rahe hain ke product already cart me hai ya nahi

        if (existingItem) {
          // Agar product cart me already hai, to quantity increase karni hai
          set({
            cart: currentCart.map((item) =>
              item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
            ),
          });
        } else {
          // Agar product cart me nahi hai, to naya item add karte hain
          set({ cart: [...currentCart, { product, quantity: 1 }] });
        }
      },

      // 🗑 Cart se item remove karne ka function
      removeFromCart: (productId: string) => {
        set({
          cart: get().cart.filter((item) => item.product.id !== productId), // Filter karke item ko remove kar rahe hain
        });
      },

      // 🔄 Cart item ki quantity update karne ka function
      updateQuantity: (productId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeFromCart(productId); // Agar quantity 0 ho jaye to item remove ho jaye
          return;
        }

        set({
          cart: get().cart.map((item) => 
            item.product.id === productId ? { ...item, quantity } : item // Jo item match kare uski quantity update ho jaye
          ),
        });
      },

      // 🧹 Cart ko completely empty karne ka function
      clearCart: () => {
        set({ cart: [] }); // Cart ko empty array se replace kar rahe hain
      },

      // ❤️ Wishlist me product add karne ka function
      addToWishlist: (product: Product) => {
        const currentWishlist = get().wishlist; // Current wishlist ko get kar rahe hain
        const exists = currentWishlist.some((item) => item.id === product.id); // Check kar rahe hain ke product already wishlist me hai ya nahi

        if (!exists) {
          set({ wishlist: [...currentWishlist, product] }); // Agar product wishlist me nahi hai to add kar rahe hain
        }
      },

      // 💔 Wishlist se product remove karne ka function
      removeFromWishlist: (productId: string) => {
        set({
          wishlist: get().wishlist.filter((product) => product.id !== productId), // Filter karke item ko remove kar rahe hain
        });
      },

      // 💰 Cart ka total price calculate karne ka function
      getCartTotal: () => {
        return get().cart.reduce((total, item) => total + item.product.price * item.quantity, 0); // Har item ka price * quantity karke total nikal rahe hain
      },
    }),
    {
      name: "ecommerce-store", // Persist middleware ke liye ek unique name, jo localStorage me store hoga
    },
  ),
);
