// Toggle cart
const cartContainer = document.querySelector(".cartoverlay");
const cartBtn = document.querySelector(".snk-header__cart-box");
const cartBox = document.querySelector(".shopping-cart");

const cartDetails = document.querySelector(".cart-details");
const notificationMsg = document.querySelector(".cart-notification");

// cart toggling
cartBtn.addEventListener("click", () => {
  cartContainer.classList.toggle("active");
  cartBox.classList.toggle("active");
});
document.body.addEventListener("click", (event) => {
  const target = event.target;

  if (target.matches("section.cartoverlay.active")) {
    cartContainer.classList.remove("active");
    cartBox.classList.remove("active");
  }
});

/**
 * {
 * name: "item heading (Fall Limited Edition Sneakers)",
 * image: "item image",
 * delete: "delete icon",
 * price: "item price",
 * qty: "item quantity",
 * total: "total summary"
 * }
 */

// Cart functionalities

cartDetails.addEventListener("click", (event) => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const target = event.target;

  if (target.matches("img.delete")) {
    const rowToRemove = target.parentElement.parentElement;

    const newCart = cart.filter(
      (item) => item.name !== rowToRemove.querySelector(".details").textContent
    );
    localStorage.setItem("cart", JSON.stringify(newCart));
    if (newCart.length === 0) {
        cartDetails.innerHTML = `<p class="empty-cart">Your cart is empty.</p>`;
        notificationMsg.innerHTML = 0;
    } else {
        rowToRemove.remove();
    }
  } else if (target.matches("button.checkout")) {
    window.location.href = "/";
  }
});

export function displayCartItem(item) {
  return `
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
    `;
}
