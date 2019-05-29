    let pwd1 = document.getElementById("pwd1")
    let pwd2 = document.getElementById("pwd2")
    let fullname = document.getElementsByName("fullname")[0]
    let username = document.getElementsByName("username")[0]
    let email = document.getElementsByName("email")[0]
    let ccn = document.getElementsByName("ccn")[0]
    let cch = document.getElementsByName("cch")[0]

function submitUserRegForm() {
    if(pwd1.value !== pwd2.value) {
        alert("Passwords inserted are different! Please reinsert password")
        pwd1.value=""
        pwd2.value=""
        return
    }
    
    if(username.value.length >= 20 || username.value.length < 3) {
        alert("username must be from 3 to 20 characters long!")
        return
    }

    //here all is ok, so sent the post request
    let details = {
        'name': fullname.value,
        'username': username.value,
        'password': pwd1.value,
        'email': email.value,
        'ccn': ccn.value,
        'cch': cch.value
      };
    
    let formBody = [];
    for (var property in details) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    getResponse(formBody);
    
}

const getResponse = async (body) => {
    let answer = await fetch("/v2/user/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: body
    })
    
    answer = await answer.json()
    
    if(answer.success === true) {
        window.location.replace("index.html")
    } else {
        alert(answer.error+'!')
    }

}