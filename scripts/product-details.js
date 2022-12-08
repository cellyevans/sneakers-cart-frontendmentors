// product-details
import { displayCartItem } from "./cart.js";

const product = document.querySelector(".snk-main__product-details--summary");

const quantityBlock = document.querySelector(".add-quantity");
const cart = [];
let quantity = 0;
const item = {};

// Product details
const notificationMsg = document.querySelector(".cart-notification");
const cartDetails = document.querySelector(".cart-details");

const productName = document.querySelector(".heading-title").textContent.trim();
const image = "./resources/images/img-product1-thumbnail.jpg";
const imgAlt = "sneakers added to cart";

notificationMsg.innerHTML = cart.length;

if (cart.length === 0) {
    cartDetails.innerHTML = `<p class="empty-cart">Your cart is empty.</p>`;
}

product.addEventListener("click", (event) => {
  const target = event.target;
  console.log(target);
  if (quantity >= 0) {
    if (target.matches("span.decrease")) {
      if (quantity > 0) {
        quantity -= 1;
      }
    } else if (target.matches("span.increase")) {
      quantity += 1;
    } else if (
      target.matches("button.add-to-cart") ||
      target.parentElement.matches("button.add-to-cart")
    ) {
      item.name = productName;
      item.image = image;
      item.alt = imgAlt;
      item.qty = quantity;
      item.price = 125;
      item.total = item.qty * item.price;

      cart.push(item);

      notificationMsg.innerHTML = cart.length;
      // Display item in cart
      const cartContainer = document.createElement("div");
      cartContainer.classList.add("cart-container");
      cart.forEach((item) => {
        cartContainer.innerHTML += displayCartItem(item);
      });
      cartContainer.innerHTML += `<button class="checkout">Checkout</button>`;
      cartDetails.appendChild(cartContainer);
    }
  }

  quantityBlock.querySelector(".value").innerHTML = quantity;
});

// Add to cart
console.log(quantity);
