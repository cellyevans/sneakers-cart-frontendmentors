// Toggle cart
const cartContainer = document.querySelector(".cartoverlay");
const cartBtn = document.querySelector(".snk-header__cart-box");
const cartBox = document.querySelector(".shopping-cart");

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


export function displayCartItem(item) {
    return `
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
            src="./resources/images/icon-delete.svg"
            alt="delete item from cart"
            />
        </div>
    </div>
    `;
}