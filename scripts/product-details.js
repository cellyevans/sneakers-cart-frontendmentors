// product-details
import { displayCartItem } from "./cart.js";

const product = document.querySelector(".snk-main__product-details--summary");
// const addToCart = document.querySelector(".add-to-cart");

const quantityBlock = document.querySelector(".add-quantity");

let quantity = 0;

// Product details
const notificationMsg = document.querySelector(".cart-notification");
const cartDetails = document.querySelector(".cart-details");

const productName = document.querySelector(".heading-title").textContent.trim();
const image = "./resources/images/image-product-1-thumbnail.jpg";
const imgAlt = "sneakers added to cart";
const cartContainer = document.createElement("div");
cartContainer.classList.add("cart-container");
const itemContainer = document.createElement("div");
itemContainer.classList.add("container");

renderCartItems();

product.addEventListener("click", (event) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const target = event.target;
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
      const item = {};
      item.name = productName;
      item.image = image;
      item.alt = imgAlt;
      item.qty = quantity;
      item.price = 125;
      item.total = item.qty * item.price;

      if (quantity > 0) {
        if (cart.length <= 0) {
          const cartItem = document.createElement("div");
          cartItem.classList.add("cart-item");
          cartItem.innerHTML = displayCartItem(item);
          itemContainer.appendChild(cartItem);
          cartContainer.appendChild(itemContainer);
          cartContainer.innerHTML += `<button class="checkout">Checkout</button>`;
          cartDetails.removeChild(document.querySelector(".empty-cart"));
          cartDetails.appendChild(cartContainer);
        } else {
          const itemAdded = cart.find((val) => (val.name = item.name));
          if (!itemAdded) {
            document.querySelector(".container").innerHTML += `
            <div class="cart-item">
            <div class="img-thumbnail">
                <img
                src=${item.image}
                alt=${item.alt}
                />
            </div>
            <div class="text-block">
                <p class="details">${item.name}</p>
                <div class="price-summary">
                <span class="calc">${item.price} x ${item.qty}</span>
                <span class="total">${item.total}</span>
                </div>
            </div>
            <div class="delete-icon">
                <img
                class="delete"
                src="./resources/images/icon-delete.svg"
                alt="delete item from cart"
                />
            </div>
            </div>
        `;
          }
        }
        const itemAdded = cart.find((val) => (val.name = item.name));

        if (!itemAdded) {
          cart.push(item);
          localStorage.setItem("cart", JSON.stringify(cart));
        } else {
          incrementItemQty(cart, item);
          upDateTotal(cart, item);
          localStorage.setItem("cart", JSON.stringify(cart));
        }

        notificationMsg.innerHTML = getTotalQuantities(cart);
        document.querySelector(".calc").innerHTML = `${
          item.price
        } x ${getTotalQuantities(cart)}`;

        document.querySelector(".total").innerHTML =
          item.price * getTotalQuantities(cart);
        quantity = 0;
      }
    }
  }

  quantityBlock.querySelector(".value").innerHTML = quantity;
});

function renderCartItems() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const cartContainer = document.createElement("div");
  cartContainer.classList.add("cart-container");
  const itemContainer = document.createElement("div");
  itemContainer.classList.add("container");

  if (cart.length > 0) {
    cart.forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = displayCartItem(item);
      itemContainer.appendChild(cartItem);
    });

    cartContainer.appendChild(itemContainer);
    cartContainer.innerHTML += `<button class="checkout">Checkout</button>`;
    cartDetails.appendChild(cartContainer);
  } else {
    cartDetails.innerHTML = `<p class="empty-cart">Your cart is empty.</p>`;
  }
  notificationMsg.innerHTML = getTotalQuantities(cart);
}

function getTotalQuantities(cartArr) {
  return cartArr.reduce((prev, next) => prev + next.qty, 0);
}

function incrementItemQty(cartArr, item) {
  const itemInCart = cartArr.findIndex((val) => val.name === item.name);
  cartArr[itemInCart].qty += item.qty;
}

function upDateTotal(cartArr, item) {
  const itemInCart = cartArr.findIndex((val) => val.name === item.name);
  cartArr[itemInCart].total = cartArr[itemInCart].qty * cartArr[itemInCart].price;
}
