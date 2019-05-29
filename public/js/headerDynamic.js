

const loginAction = async () => {
    let loginEl = document.getElementById('HEADER_LOGIN')
    let login = await fetch("v2/user")
    let json = await login.json();
    //if login is not already done, return and leave it as it is
    if(json[0] === undefined) {
        return
    }
    
    loginEl.innerHTML = '<ul class="header-cart-wrapitem">'+
    '<li><b>Welcome, '+json[0].name+'!</b></li>'+
    '<li>'+json[0].username+'</li>'+
    '</ul><br>'+
    '<div class="header-cart-buttons">'+
        '<div class="header-cart-wrapbtn">'+
                '<!-- Button -->'+
                '<a href="index.html" class="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">'+
                    'Logout'+
                '</a>'+
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

loginAction();