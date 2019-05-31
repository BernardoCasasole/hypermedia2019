setUpLoginForm();


//code performed by this js is down the constants functions


const loginAction = async () => {
    let loginEl = document.getElementById('HEADER_LOGIN')
    let login = await fetch("v2/user")
    let json = await login.json();
    //if login is not already done, return and leave it as it is
    if(json[0] === undefined) {
        return
    }
    
    fillLoginElement(loginEl, json);
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
    console.log(uname+", "+pwd)

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


//Code performed by this js

loginAction();


function setUpLoginForm() {
    let formD = document.getElementById("LOGIN_FORM_D")
    formD.setAttribute("action", "javascript:onLoginDesktopSubmit()")
}


function fillLoginElement(loginEl, json) {
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



function assignBtns() {
    
    let logoutBtn = document.getElementById("LOGOUT_BTN")
    console.log(logoutBtn)
    logoutBtn.onclick = function() {
        logout()
    }
}


function onLoginDesktopSubmit() {
    let uname = document.getElementById("unameD")
    let pwd = document.getElementById("pwdD")
    login(uname.value, pwd.value)
}