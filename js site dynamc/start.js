
const btn = document.getElementById("btnsu");

btn.onclick = function(){

    let user = document.getElementById("username").value;
    let mail = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let confpass = document.getElementById("confirm_password").value;

    console.log(user);
    console.log(mail);
    //console.log(pass);
    //console.log(confpass);

}

// корзина

// Показать выплывающее окно с корзиной товаров
function showCart() {
    var cart = document.getElementById("cart");
    cart.style.display = "block";
  }

  // Скрыть выплывающее окно с корзиной товаров
  function hideCart() {
    var cart = document.getElementById("cart");
    cart.style.display = "none";
  }

  // Добавить товар в корзину
  function addToCart(itemName, itemPrice) {
    var cartItems = document.getElementById("cart-items");

    // Создаем новый элемент для товара
    var div = document.createElement("div");
    div.className = "cart-item";

    // Создаем текстовый узел с названием товара
    var itemNameNode = document.createTextNode(itemName);
    div.appendChild(itemNameNode);

    // Создаем текстовый узел с ценой товара
    var itemPriceNode = document.createTextNode('$' + itemPrice);
    div.appendChild(itemPriceNode);

    // Создаем кнопку удаления товара
    var removeButton = document.createElement("button");
    removeButton.className = "remove-item";
    removeButton.textContent = "Удалить";
    removeButton.onclick = function() {
      cartItems.removeChild(div);
    };

    // Добавляем кнопку удаления к товару
    div.appendChild(removeButton);

    // Добавляем товар в корзину
    cartItems.appendChild(div);
  }