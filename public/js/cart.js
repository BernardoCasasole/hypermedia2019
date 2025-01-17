

const userAction = async () => {
    let cartContent = await fetch("v2/cart")
    cartContent = await cartContent.json()
    fillPageCart(cartContent);
  }

//code performed ////////////////////////////////////////////

userAction();
  
//other functions////////////////////////////////////////////


function fillPageCart(cartContent) {

  let cartHtml = '<div class="wrap-table-shopping-cart bgwhite">'+
  '<div id="TABLE_ROWS">'+
    '</div>'+'<table class="table-shopping-cart">'+
    '<tbody>'+'<tr class="table-head">'+
      '<th class="column-1">'+'</th>'+
      '<th class="column-2">'+'Product'+'</th>'+
      '<th class="column-3">'+'Price'+'</th>'+
      '<th class="column-3">'+'Quantity'+'</th>'+
      '<th class="column-5">'+'Total'+'</th>'+
      '<th class="column-3">'+'Remove'+'</th>'+
    '</tr>';
  var totalCart = 0;
  for(i=0; i<cartContent.length;i++){
    let totalPrice =  cartContent[i].qty*cartContent[i].price;
    totalCart = totalCart + totalPrice;
    cartHtml = cartHtml + 
                          '<tr class="table-row booky-fade-out" id="CART_FULL_ROW_'+cartContent[i].id+'">'+
                            '<td class="column-1">'+
                                '<a class="cart-img-product1" href="book.html?id='+ cartContent[i].id +'">'+
                                    '<img src="images/books/first-'+ cartContent[i].id +'.jpg" alt="IMG-PRODUCT">'+
                                '</a>'+
                            '</td>'+
                            '<td class="column-2">'+
                                '<a href="book.html?id='+ cartContent[i].id +'">'+
                                    cartContent[i].title +
                                '</a>'+
                            '</td>'+
                            '<td class="column-3">'+ cartContent[i].price.toFixed(2) + " "+  cartContent[i].currency + '</td>'+
                            '<td class="column-3">'+
                                    cartContent[i].qty +
                            '</td>'+
                            '<td class="column-5">'+ totalPrice.toFixed(2) + " "+  cartContent[i].currency +'</td>'+
                            '<td class="column-3">'+ 
                            '<!-- Button -->'+
                            '<button class="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4" onclick="removeCartElement('+cartContent[i].id+')">'+
                              'Remove'+
                            '</button>'+
                            '</td>'+
                          '</tr>';
  }

  cartHtml = cartHtml + 	'</tbody>'+'</table>'+ '</div>';

  document.getElementById("TABLE_ROWS").innerHTML = cartHtml;
  document.getElementById("CART_TOTAL1").innerText = totalCart.toFixed(2) + " €";
  document.getElementById("CART_TOTAL2").innerText = totalCart.toFixed(2) + " €";
  document.getElementById("CART_TOTAL3").innerText = totalCart.toFixed(2) + " €";
    
}
  
  
  //No error checking as now. Parse the url
  function parseTopURL() {
    let query = window.location.search.substring(1);
    let args = query.split('&');
    for(let i=0; i<args.length; i++) {
      let pair = args[i].split('=');
      if(pair[0] === 'id') {
        return pair[1]
      }
    }
    return undefined;
  }
  
  //Function needed to get the arguments contained in the URL
  function getURLArgs() {
      var query_string = {};
      let query = window.location.search.substring(1);
      let vars = query.split("&");
    
      for (let i=0;i<vars.length;i++) {
        let pair = vars[i].split("=");
        //if is the first entry with that name
        if (typeof query_string[pair[0]] === "undefined") {
          query_string[pair[0]] = decodeURIComponent(pair[1]);
        //if is the second entry with that name
        } else if (typeof query_string[pair[0]] === "string") {
          let arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
          query_string[pair[0]] = arr;
        //if is the third or more entry with that name
        } else {
          query_string[pair[0]].push(decodeURIComponent(pair[1]));
        }
      } 
      return query_string;
    }
  
  
  function writeErrorPage() {
      document.body.innerText = "Error 404 page not found!"
      let a = document.createElement("a")
      a.innerText = "Return to home"
      a.href = "./"
      document.body.appendChild(document.createElement("br"))
      document.body.appendChild(a)
  }
  

/**
 * Remove element with id specified from table cart in the cart page
 * @param {the id of element to remove} id
 */
function activeCartRemove(id) {
  let row = document.getElementById('CART_FULL_ROW_'+id)
    row.style.opacity = '0'
    setTimeout(function(){
      row.remove()
    }, stdFadeTime);
}