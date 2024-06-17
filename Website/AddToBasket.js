var cart = [];
var totalCost = 0;

function AddToBasket(productName, price) {
    var quantity = prompt("Enter the quantity for " + productName);
    if (quantity !== null && !isNaN(quantity) && quantity > 0 && quantity % 1 === 0) {
        var itemTotal = price * quantity;
        totalCost += itemTotal;
        cart.push({ productName, price, quantity, itemTotal });
        updateCartIcon();
        console.log('Total cost:', totalCost);
    }
}

function updateCartIcon() {
    var cartCount = document.getElementById("cart-count");
    var totalCount = 0;

    for (var i = 0; i < cart.length; i++) {
        totalCount += parseInt(cart[i].quantity);
    }
    cartCount.textContent = totalCount;
}

function openCartDetails() {
    var cartDetails = document.getElementById("cart-details");
    cartDetails.textContent = getcartcontents();
    var popout = document.getElementById("popout");
    popout.style.display = "block";
}

function closePopout(){
    var popout = document.getElementById("popout");
    popout.style.display = "none";
}

function getcartcontents() {
    var cartcontents = "";

    for (var i = 0; i < cart.length; i++) {
        var item = cart[i];
        cartcontents += item.productName + "-$" + item.price + " x " + item.quantity + " = $" + item.itemTotal.toFixed(2) + "\n";
    }
    cartcontents += "Total cost: $" + totalCost.toFixed(2);
    return cartcontents;
}
function checkout() {
    var customerName = prompt("Enter the name of the customer:");
    
    if (customerName !== null && customerName.trim() !== "") {
        var cartContents = getcartcontents();
        var hst = totalCost * 0.13;
        var totalPriceWithHST = totalCost + hst;

        var receipt = "Customer Name: " + customerName + "\n\n";
        receipt += "Cart Contents:\n" + cartContents + "\n";
        receipt += "Subtotal: $" + totalCost.toFixed(2) + "\n";
        receipt += "HST (13%): $" + hst.toFixed(2) + "\n";
        receipt += "Total Price (including HST): $" + totalPriceWithHST.toFixed(2) + "\n";

        alert(receipt);
    }
}

