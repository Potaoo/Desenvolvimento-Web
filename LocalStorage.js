document.addEventListener('DOMContentLoaded', function () {
    loadSavedProducts();
  });
  
  function saveProduct() {
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const quantity = document.getElementById('quantity').value;
    const code = document.getElementById('code').value;
    const category = document.getElementById('category').value;
  
    const product = {
      name,
      price,
      quantity,
      code,
      category
    };
  
    let savedProducts = JSON.parse(localStorage.getItem('productData')) || [];
    savedProducts.push(product);
  
    localStorage.setItem('productData', JSON.stringify(savedProducts));
  
    loadSavedProducts();
    clearForm();
  }
  
  function loadSavedProducts() {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
  
    const savedProducts = JSON.parse(localStorage.getItem('productData')) || [];
  
    savedProducts.forEach((product, index) => {
      const row = productList.insertRow();
      row.innerHTML = `
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.quantity}</td>
        <td>${product.code}</td>
        <td>${product.category}</td>
        <td><button class="delete-btn" onclick="deleteProduct(${index})">Excluir</button></td>
      `;
    });
  }
  
  function deleteProduct(index) {
    let savedProducts = JSON.parse(localStorage.getItem('productData')) || [];
    savedProducts.splice(index, 1);
    localStorage.setItem('productData', JSON.stringify(savedProducts));
    loadSavedProducts();
  }
  
  function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('price').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('code').value = '';
    document.getElementById('category').value = '';
  }
  
