//code performed by this js is down the constants functions


const loginAction = async () => {
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

loginAction();
//////////////////////////////////

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

//get an html part of the dynamic cart for a single element
function htmlCartElementString(element) {
    return '<li class="header-cart-item">'+
        '<div class="header-cart-item-img">'+
            '<img src="images/cart/item-2.jpg" alt="IMG">'+
        '</div>'+

        '<div class="header-cart-item-txt">'+
            '<a href="#" class="header-cart-item-name">'+
                'The Old Man and the Sea'+
            '</a>'+

            '<span class="header-cart-item-info">'+
                '1 x $19.00'+
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