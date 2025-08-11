import { defineStore } from "pinia";

export const useCartStore = defineStore("Cart", {
  state: () => ({
    cartItems: [],
  }),
  getters: {
    // getting the cartcount // totalquantity of products
    cartCount: (state) => {
      return state.cartItems.reduce((sum, item) => sum + item.quantity, 0);
    },
    // sum up all prices (and * by quantity)
    priceCount: (state) => {
      return state.cartItems.reduce((sum, item) => {
        const priceValue = parseFloat(item.price.replace("£", ""));
        return sum + priceValue * item.quantity;
      }, 0);
    },
  },
  actions: {
    //addtocart
    addtocart(product) {
      const existing = this.cartItems.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity += product.quantity;
      }
      // updating existing price
      else {
        this.cartItems.push(product);
      }
    },

    // remove from cart
    removeFromcart(productId) {
      console.log(productId);
      const Id = productId.productId;
      this.cartItems = this.cartItems.filter((item) => item.id !== Id);
      console.log("after removel:", this.cartItems);
    },
  },
});
