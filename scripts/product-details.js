// product-details
const quantityBlock = document.querySelector(".add-quantity");
let quantity = 0;

quantityBlock.addEventListener("click", event => {
    const target = event.target;

    if(quantity >= 0) {
        if (target.matches("span.decrease")) {
            if(quantity > 0) {
                quantity -= 1;
            }
        } else if(target.matches("span.increase")) {
            quantity += 1
        }
    }

    quantityBlock.querySelector(".value").innerHTML = quantity;
})


// Add to cart
