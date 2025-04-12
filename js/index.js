// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  // Select the price and quantity from the product
  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');

  // Convert these values to numbers for calculation
  const price = parseFloat(priceElement.innerText);
  const quantity = parseInt(quantityElement.value);

  // Calculate the subtotal
  const subtotal = price * quantity;

  // Select and update the subtotal field
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerText = subtotal.toFixed(2); // Format subtotal to 2 decimal places

  return subtotal;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  const products = document.querySelectorAll('.product');
  Array.from(products).forEach((product) => {
    updateSubtotal(product);
  });

  // ITERATION 3
  //... your code goes here

  let totalPrice = 0;
  Array.from(products).forEach((product) => {
    const subtotalElement = product.querySelector('.subtotal span');
    const subtotal = parseFloat(subtotalElement.innerText);
    totalPrice += subtotal;
  });
  const totalPriceElement = document.querySelector('#total-value span');
  totalPriceElement.innerText = totalPrice.toFixed(2);
}

// Forma más cimple y clara
// function calculateAll() {
//   const multipleProducts = document.querySelectorAll('.product');
//   let total = 0;
//   for (let product of multipleProducts) {
//     total += updateSubtotal(product);
//   }
//   const totalPriceElement = document.querySelector('#total-value span');
//   totalPriceElement.innerText = total;
// }

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const productRow = target.closest('.product');
  productRow.parentNode.removeChild(productRow);
  calculateAll();
}
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });
});

// ITERATION 5

function createProduct() {
  //... your code goes here

  const nameInput = document.querySelector(
    '.create-product input[type="text"]'
  );
  const priceInput = document.querySelector(
    '.create-product input[type="number"]'
  );

  const name = nameInput.value.trim();
  const price = Number(priceInput.value).toFixed(2);

  if (name === '' || isNaN(price) || price <= 0) {
    alert('Please enter a valid name and a positive price.');
    return;
  }
  const newProductRow = document.createElement('tr');
  newProductRow.classList.add('product');
  newProductRow.innerHTML = `
    <td class="name">
      <span>${name}</span>
    </td>
    <td class="price">$<span>${price}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  const tbody = document.querySelector('#cart tbody');
  tbody.appendChild(newProductRow);

  const removeButton = newProductRow.querySelector('.btn-remove');
  removeButton.addEventListener('click', removeProduct);

  nameInput.value = '';
  priceInput.value = '';
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

   //... your code goes here
   
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });
});
