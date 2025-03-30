const product = [
  {
    id: 0,
    image: '../Velvet_Vogue/img/products/02.jpg',
    title: 'Classic Oxford Shirt',
    price: 100,
  },
  {
    id: 1,
    image: '../Velvet_Vogue/img/products/04.jpg',
    title: 'Slim-Fit Chinos',
    price: 100,
  },
  {
    id: 2,
    image: '../Velvet_Vogue/img/products/06.jpg',
    title: 'Polo T-Shirt',
    price: 100,
  },
  {
    id: 3,
    image: '../Velvet_Vogue/img/products/08.jpg',
    title: 'Tailored Blazer',
    price: 100,
  },
  {
    id: 4,
    image: '../Velvet_Vogue/img/products/10.jpg',
    title: 'Denim Jacket',
    price: 100,
  },
  {
    id: 5,
    image: '../Velvet_Vogue/img/products/01.jpg',
    title: 'Wrap Dress',
    price: 100,
  },
  {
    id: 6,
    image: '../Velvet_Vogue/img/products/03.jpg',
    title: 'High-Waisted Jeans',
    price: 100,
  },
  {
    id: 7,
    image: '../Velvet_Vogue/img/products/05.jpg',
    title: 'Peplum Top',
    price: 100,
  },
  {
    id: 8,
    image: '../Velvet_Vogue/img/products/07.jpg',
    title: 'A-Line Skirt',
    price: 100,
  },
  {
    id: 9,
    image: '../Velvet_Vogue/img/products/09.jpg',
    title: 'Maxi Dress',
    price: 100,
  }
];
const categories = [...new Set(product.map((item) => { return item }))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
  var { image, title, price } = item;
  return (
    `<div class='box'>
      <div class='img-box'>
        <img class='images' src=${image}></img>
      </div>
      <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>` +
        "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
      `</div>
    </div>`
  )
}).join('')

var cart = [];

function addtocart(a) {
  cart.push({ ...categories[a] });
  displaycart();
}
function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}

function displaycart() {
  let j = 0, total = 0;
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById('cartItem').innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "$ " + 0 + ".00";
  }
  else {
    document.getElementById("cartItem").innerHTML = cart.map((items) => {
      var { image, title, price } = items;
      total = total + price;
      document.getElementById("total").innerHTML = "$ " + total + ".00";
      return (
	    <tr>
			<td class="table-remove"><button><i class="material-icons">delete</i></button></td>
			<td class="table-image"><a href="product-details.html"><img src=${image} alt=""></a></td>
			<td class="table-p-name text-capitalize"><a href="product-details.html">${title}</a></td>
			<td class="table-p-price"><p>$100.00</p></td>
			<td class="table-p-qty"><input value="1" name="cart-qty" type="number"></td>
			<td class="table-total"><p>$ ${price}.00</p></td>
		</tr>
        `<div class='cart-item'>
          <div class='row-img'>
            <img class='rowimg' src=${image}>
          </div>
          <p style='font-size:12px;'>${title}</p>
          <h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
        "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
      );
    }).join('');
  }
}