//code performed by this js is down the constants functions
var isLogged = false; //used by other jss
var stdFadeTime = 500;

//do the passive login and fill the fields to make visible to the user that he's logged 
const passiveLogin = async () => {
    let loginElD = document.getElementById('HEADER_LOGIN_D')
    let loginElM = document.getElementById('HEADER_LOGIN_M')
    let iconElD = document.getElementById('USER_ICON_D')
    let iconElM = document.getElementById('USER_ICON_M')
    let login = await fetch("v2/user")
    let json = await login.json();
    //if login is not already done, return and leave it as it is
    if(json[0] === undefined) {
        return
    }
    isLogged = true;
    fillLoginElementDesktop(loginElD, iconElD, json);
    fillLoginElementMobile(loginElM, iconElM, json);
    assignBtns();
    
}

/**
 * Update all the carts element in the page (the header ones and if present the cart page one)
 */
const updateCart = async () => {
    let cartListD = document.getElementById("CART_LIST_D")
    let cartTotalD = document.getElementById("CART_TOTAL_D")
    let popNumberD = document.getElementById("POP_NUM_ITEMS_D")
    let cartListM = document.getElementById("CART_LIST_M")
    let cartTotalM = document.getElementById("CART_TOTAL_M")
    let popNumberM = document.getElementById("POP_NUM_ITEMS_M")

    let cartContent = await fetch("v2/cart")
    cartContent = await cartContent.json()

    fillHeaderCart(cartListD, cartTotalD, popNumberD, cartContent)
    fillHeaderCart(cartListM, cartTotalM, popNumberM, cartContent)

    if(typeof fillPageCart === "function")
        fillPageCart(cartContent)
}


//Ask for the REST logout
const logout = async () => {
    let answer = await fetch("/v2/user/logout", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: {}
    })
    
    answer = await answer.json()
    
    if(answer.success === true) {
        window.location.replace("index.html")
    } else {
        alert(answer.error+'!')
    }
}


//ask for the REST login with specified username and password
const login = async (uname, pwd) => {

    let details = {
        'username': uname,
        'password': pwd
      };
    
    let formBody = [];
    for (var property in details) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    let answer = await fetch("/v2/user/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody
    })
    
    answer = await answer.json()
    
    if(answer.success === true) {
        window.location.replace("index.html")
    } else {
        alert(answer.error+'!')
    }
}

const removeCartElement = async (bookId) => {
    let details = {
        'bookId': bookId,
        'qty': 0
      };
    
    let formBody = [];
    for (var property in details) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    let answer = await fetch("/v2/cart/updateQty", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody
    })
    
    answer = await answer.json()
    
    if(answer.success === true) {
        cartsRemoveElementAndUpdateCart(bookId)
    } else {
        alert(answer.error+'!')
    }
}

/////////////////////////////////////////////////////////////////
//Code performed by this js

passiveLogin();
updateCart();
//////////////////////////////////

//other functions

function fillLoginElementDesktop(loginEl, iconEl, json) {
    iconEl.setAttribute("src", "images/icons/icon-header-01-logged.png")
    loginEl.innerHTML = '<ul class="header-cart-wrapitem">'+
    '<li><b>Welcome, '+json[0].name+'!</b></li>'+
    '<li>'+json[0].username+'</li>'+
    '</ul><br>'+
    '<div class="header-cart-buttons">'+
        '<div class="header-cart-wrapbtn">'+
                '<!-- Button -->'+
                '<button id="LOGOUT_BTN" class="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">'+
                    'Logout'+
                '</button>'+
            '</div>'+

            '<div class="header-cart-wrapbtn">'+
                '<!-- Button -->'+
                '<a href="#" class="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">'+
                    'User Profile'+
                '</a>'+
            '</div>'+
        '</div>'+
    '</div>'
}


function fillLoginElementMobile(el, iconEl, json) {
    iconEl.setAttribute("src", "images/icons/icon-header-01-logged.png")
    el.innerHTML = '<ul class="header-cart-wrapitem">'+
    '<li><b>Welcome, '+json[0].name+'!</b></li>'+
    '<li>'+json[0].username+'</li>'+
    '</ul><br>'+
    '<div class="header-cart-buttons">'+
        '<div class="header-cart-wrapbtn">'+
                '<!-- Button -->'+
                '<button id="LOGOUT_BTN_M" class="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">'+
                    'Logout'+
                '</button>'+
            '</div>'+

            '<div class="header-cart-wrapbtn">'+
                '<!-- Button -->'+
                '<a href="#" class="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">'+
                    'User Profile'+
                '</a>'+
            '</div>'+
        '</div>'+
    '</div>'
}



function assignBtns() {
    
    let logoutBtn = document.getElementById("LOGOUT_BTN")
    logoutBtn.onclick = function() {
        logout()
    }
    let logoutBtnM = document.getElementById("LOGOUT_BTN_M")
    logoutBtnM.onclick = function() {
        logout()
    }
}


function fillHeaderCart(cartlistEl, carttotalEl, popNumberEl, json) {
    //if the json is not empty, fill the cart
    if(json.length > 0) {

        let cartlistHtml = ''
        let total = 0.0;
        let totalElements = 0;
        let currency = json[0].currency;
        for(let i=0; i<json.length; i++) {
            cartlistHtml += htmlCartElementString(json[i])
            total += json[i].price*json[i].qty
            totalElements += json[i].qty
        }
        cartlistEl.innerHTML = cartlistHtml;
        carttotalEl.innerHTML = "Total: " + total.toFixed(2) + ' ' +  currency
        popNumberEl.setAttribute('class', 'header-icons-noti')
        popNumberEl.innerText = totalElements
    }//else notify that the cart is empty, also remove total and pop up number
    else {
        cartlistEl.innerHTML = "Your cart is empty"
        popNumberEl.setAttribute('class', '')
        popNumberEl.innerText = ""
        carttotalEl.innerHTML = ""
    }
}

//get an html part of the dynamic cart for a single cart object
function htmlCartElementString(cartObject) {
    return '<li class="header-cart-item booky-fade-out" name="HEADER_CART_ROW_'+cartObject.id+'">'+
        '<div class="header-cart-item-img" onclick="javascript:removeCartElement('+cartObject.id+')">'+
            '<img src="images/cart/item-'+cartObject.id+'.jpg" alt="IMG">'+
        '</div>'+

        '<div class="header-cart-item-txt">'+
            '<a href="book.html?id='+cartObject.id+'" class="header-cart-item-name">'+
                cartObject.title+
            '</a>'+

            '<span class="header-cart-item-info">'+
                '' + cartObject.qty+' x '+cartObject.price.toFixed(2)+' '+cartObject.currency+
            '</span>'+
        '</div>'+
    '</li>'
}

/**
 * Remove graphically element with id specified from header cart
 * @param {the id of element to remove} bookId 
 */
function headerCartRemove(bookId) {
    let rows = document.getElementsByName("HEADER_CART_ROW_"+bookId)
    for(i = 0; i < rows.length; i++) {
        rows[i].style.opacity = '0'
    }
    setTimeout(function(){
        for(i = 0; i < rows.length; i++) {
            rows[i].remove();
        }
    }, stdFadeTime);
}



//BUTTON FUNCTIONS /////////////////////////////////////////////


function onLoginDesktopSubmit() {
    let uname = document.getElementById("unameD")
    let pwd = document.getElementById("pwdD")
    login(uname.value, pwd.value)
}

function onLoginMobileSubmit() {
    let uname = document.getElementById("unameM")
    let pwd = document.getElementById("pwdM")
    login(uname.value, pwd.value)
}

var updateDynamicCart = function updateDynamicCart() {
    updateCart();
}

function onSearchEnterDesktop() {
    let rsBook = document.getElementById("RADIO_SEARCH_BOOK_D")
    let rsAuthor = document.getElementById("RADIO_SEARCH_AUTHOR_D")
    let rsEvent = document.getElementById("RADIO_SEARCH_EVENT_D")
    let stringSearched = document.getElementById("SEARCH_LABEL_D").value
    if(stringSearched === undefined || stringSearched.length===0) 
        stringSearched = '*'

    let nextUrl = '/search.html?search='+stringSearched

    //if all checkbox are off, actually search for everything
    if(rsBook.checked === false && rsAuthor.checked === false && rsEvent.checked===false) {
        nextUrl += '&books=true&authors=true&events=true'
    } else {//else build the normal string
        if(rsBook.checked === true) 
            nextUrl+='&books=true'
        if(rsAuthor.checked===true)
            nextUrl+='&authors=true'
        if(rsEvent.checked===true)
            nextUrl+='&events=true'
    }

    window.location.href = nextUrl

}

function onSearchEnterMobile() {
    let rsBook = document.getElementById("RADIO_SEARCH_BOOK_M")
    let rsAuthor = document.getElementById("RADIO_SEARCH_AUTHOR_M")
    let rsEvent = document.getElementById("RADIO_SEARCH_EVENT_M")
    let stringSearched = document.getElementById("SEARCH_LABEL_M").value
    if(stringSearched === undefined || stringSearched.length===0) 
        stringSearched = '*'

    let nextUrl = '/search.html?search='+stringSearched

    //if all checkbox are off, actually search for everything
    if(rsBook.checked === false && rsAuthor.checked === false && rsEvent.checked===false) {
        nextUrl += '&books=true&authors=true&events=true'
    } else {//else build the normal string
        if(rsBook.checked === true) 
            nextUrl+='&books=true'
        if(rsAuthor.checked===true)
            nextUrl+='&authors=true'
        if(rsEvent.checked===true)
            nextUrl+='&events=true'
    }

    window.location.href = nextUrl

}

/**
 * Remove graphically elements from carts, both header and in the page, if exists, then reupdate the carts
 * @param {The id of the element to be removed} id 
 */
function cartsRemoveElementAndUpdateCart(id) {
    headerCartRemove(id)
    //in cart page, call also the function to remove item from page
    if(typeof activeCartRemove === "function") {
        activeCartRemove(id)
    }

    setTimeout(function(){
        updateCart()
    }, stdFadeTime);

}