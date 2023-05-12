const CartBtns = document.querySelectorAll('.cart-btn');
CartBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    console.log('Button clicked!');
    AddToCart();
  })
});

function AddToCart() {
  alert('Successfully added to cart!');

};
