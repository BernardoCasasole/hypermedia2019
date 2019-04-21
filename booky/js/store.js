updateCartDesktopTotal()
var removeCartItemButtons = document.getElementsByClassName('header-cart-item-img')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', function(event) {
        	var buttonClicked = event.target
        	buttonClicked.parentElement.remove()
        	updateCartDesktopTotal()
        	updateCartMobileTotal()
        })
    }

 function updateCartDesktopTotal(){
 	var total = 0
 	var desktopContainer = document.getElementsByClassName('wrap_header')[0]
 	var infoCartItems = desktopContainer.getElementsByClassName('header-cart-item-info')
    for (var i = 0; i < infoCartItems.length; i++) {
        var info = infoCartItems[i]
        var infoText = info.innerText
        var qtyAndPrice = infoText.split(" x $") 
        var qty = qtyAndPrice[0]
        var price = qtyAndPrice[1]
        total = total + qty*price
    }
    desktopContainer.getElementsByClassName('header-cart-total')[0].innerText="Total: $" + total.toFixed(2)
 }

 function updateCartMobileTotal(){
 	var total = 0
 	var mobileContainer = document.getElementsByClassName('wrap_header_mobile')[0]
 	var infoCartItems = mobileContainer.getElementsByClassName('header-cart-item-info')
    for (var i = 0; i < infoCartItems.length; i++) {
        var info = infoCartItems[i]
        var infoText = info.innerText
        var qtyAndPrice = infoText.split(" x $") 
        var qty = qtyAndPrice[0]
        var price = qtyAndPrice[1]
        total = total + qty*price
    }
    mobileContainer.getElementsByClassName('header-cart-total')[0].innerText="Total: $" + total.toFixed(2)
 }
