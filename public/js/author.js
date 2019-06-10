let authorPath = "../../v2/author/"
let imgPath = "../images/authors/"
let booksPath = "../../v2/books/byAuthor/"
let cartPath = "../../v2/cart/"



const userAction = async () => {
    let args = getURLArgs();
    let id = args.id;
    //if the id of a book is undefined, return error 404 and a link to the home
  if (id === undefined) {
    writeErrorPage();
    return;
  }
  let response = await fetch(authorPath+id+'');
  
  let authorJson = await response.json(); //extract JSON from the http response

  //if the id is valid but does not exist a book with that id return error 404 page
  if(authorJson[0] === undefined || authorJson[0].name === undefined) {
      console.log("an author with specified id does not exist")
      writeErrorPage();
      return;
  }

  response = await fetch(booksPath+authorJson[0].id+'');
  let booksJson = await response.json();
  response = await fetch('../../v2/books/sponsored');
  let sponsoredJson = await response.json();
  loadData(authorJson, booksJson, sponsoredJson);
}

const postAddToCart = async (bookId, qty) => {
  let details = {
    'bookId': bookId,
    'qty' : qty,
  };

let formBody = [];
for (var property in details) {
  let encodedKey = encodeURIComponent(property);
  let encodedValue = encodeURIComponent(details[property]);
  formBody.push(encodedKey + "=" + encodedValue);
}
formBody = formBody.join("&");

let ans = await fetch(cartPath+'addBook', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  },
  body: formBody
})

  updateCart()
}

//code of this js/////////////////////////////

userAction();


//other fuctions////////////////////////////

function loadData(json,  booksJson, sponsoredJson) {
  document.title = json[0].name + " - Booky"
  document.getElementById("AUTHOR_NAME").innerText = json[0].name
  let books = "";
    for(i=0; i<sponsoredJson.length; i++){
        books = books + '<div class="col-sm-3 col-md-3 col-md-3 col-lg-3 p-b-50">'+
                '<div class="block2">'+
                    '<div class="block2-img wrap-pic-w of-hidden pos-relative">'+
                        '<img src="images/books/first-'+sponsoredJson[i].id +'.jpg" alt="IMG-PRODUCT">'+

                        '<div class="block2-overlay trans-0-4">'+
                            '<div class="block2-btn-addcart w-size1 trans-0-4">'+
                                '<!-- Button -->'+
                                '<button class="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4" onclick="bookBtnClick('+sponsoredJson[i].id+',\''+sponsoredJson[i].title+'\',1)">'+
                                    'Add to Cart'+
                                '</button>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+

                    '<div class="block2-txt p-t-20">'+
                        '<a href="book.html?id='+sponsoredJson[i].id +'" class="block2-name dis-block s-text3 p-b-5">'+
                           sponsoredJson[i].title+
                        '</a>'+

                        '<span class="block2-price m-text6 p-r-5">'+
                           sponsoredJson[i].price.toFixed(2) + ' '+sponsoredJson[i].currency +
                        '</span>'+
                    '</div>'+
                '</div>'+
            '</div>';
    }
 
  let booksHtml = "";
  for(i=0;i<booksJson.length && i<3;i++){
  booksHtml = booksHtml + '<a href="../book.html?id='+booksJson[i].id+'" class="dis-block wrap-pic-w w-size22 m-r-20 trans-0-4 hov4">'+
                                    '<img src="../images/books/first-'+booksJson[i].id+'.jpg" alt="IMG-PRODUCT">'+
                                  '</a>'+
                                  '<div class="p-t-5">'+
                                      '<a href="../book.html?id='+booksJson[i].id+'" class="s-text20">'+
                                      booksJson[i].title +
                                      '</a>'+
                                      '<a class="dis-block s-text17 p-t-6">'+
                                      booksJson[i].price.toFixed(2) + ' ' + booksJson[i].currency  +
                                      '</a>'+
                                  '</div>'}
  document.getElementById("AUTHOR_PHOTO").src = imgPath+"author-"+json[0].id+".jpg"

  document.getElementById("NAME").innerText = json[0].name
  document.getElementById("AUTHOR_DESCRIPTION").innerText = json[0].description
  document.getElementById("BIOGRAPHY").innerText = json[0].biography
  document.getElementById("AUTHOR_BOOKS").innerHTML = booksHtml;
  document.getElementById("SPONSORED").innerHTML = books;
}


//No error checking as now. Parse the url
function parseTopURL() {
  let query = window.location.search.substring(1);
  console.log("window.location.search.substring(1) = '" + query + "'");
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
    console.log(query_string)
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


//buttons functions


//the function of a button add to cart
function bookBtnClick(btn_id, title, qty) {
  if(isLogged) {
      postAddToCart(btn_id, qty)
      swal(title, "is added to cart !", "success");
  }
  else {
      window.location.href = "../register.html"
  }
}