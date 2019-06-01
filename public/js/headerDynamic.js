//code performed by this js is down the constants functions


//do the passive login and fill the fields to make visible to the user that he's logged 
const passiveLogin = async () => {
    let loginElD = document.getElementById('HEADER_LOGIN_D')
    let loginElM = document.getElementById('HEADER_LOGIN_M')
    let login = await fetch("v2/user")
    let json = await login.json();
    //if login is not already done, return and leave it as it is
    if(json[0] === undefined) {
        return
    }
    
    fillLoginElementDesktop(loginElD, json);
    fillLoginElementMobile(loginElM, json);
    assignBtns();
    
}

//do the passive dynamic cart filling
const passiveCartFill = async () => {
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

/////////////////////////////////////////////////////////////////
//Code performed by this js

passiveLogin();
passiveCartFill();
//////////////////////////////////

//other functions

function fillLoginElementDesktop(loginEl, json) {
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


function fillLoginElementMobile(el, json) {
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
    }//else notify that the cart is empty
    else {
        cartlistEl.innerHTML = "Your cart is empty"
    }
}

//get an html part of the dynamic cart for a single cart object
function htmlCartElementString(cartObject) {
    return '<li class="header-cart-item">'+
        '<div class="header-cart-item-img">'+
            '<img src="images/cart/item-'+cartObject.id+'.jpg" alt="IMG">'+
        '</div>'+

        '<div class="header-cart-item-txt">'+
            '<a href="#" class="header-cart-item-name">'+
                cartObject.title+
            '</a>'+

            '<span class="header-cart-item-info">'+
                '' + cartObject.qty+' x '+cartObject.price.toFixed(2)+' '+cartObject.currency+
            '</span>'+
        '</div>'+
    '</li>'
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
    passiveCartFill();
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