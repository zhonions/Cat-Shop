import { Cat } from "../../components/CatsData";


export const CartStorage = {
    getCartItems(): Cat[] {
      const cartItemsJson = sessionStorage.getItem("cartItems");
      return cartItemsJson ? JSON.parse(cartItemsJson) : [];
    },
  
    setCartItems(cartItems: Cat[]): void {
      const cartItemsJson = JSON.stringify(cartItems);
      sessionStorage.setItem("cartItems", cartItemsJson);
    }
  };
  