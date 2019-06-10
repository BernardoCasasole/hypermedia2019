let booksPath = "../../v2/books/";
let imgPath = "../images/books/"
let bookHtmlPath = "../book.html"
let authorHtmlPath = "../author.html"
let cartPath = "../../v2/cart/"
let genrePath = "../../v2/books/byGenre/"

var isLogged;

let bookId

let title = "This book";


const userAction = async () => {
    let args = getURLArgs();
    let id = args.id;

    //if the id of a book is undefined, return error 404 and a link to the home
  if (id === undefined) {
    writeErrorPage();
    return;
  }
  let response = await fetch(booksPath+id+'');
  
  let bookJson = await response.json(); //extract JSON from the http response

  //if the id is valid but does not exist a book with that id return error 404 page
  if(bookJson[0] === undefined || bookJson[0].author === undefined) {
      console.log("a book with specified id does not exist, or has no author!")
      writeErrorPage();
      return;
  }

  response = await fetch(genrePath+bookJson[0].genres+'');
  let genreJson = await response.json();
  console.log(genreJson);
  //load the data from json to html file's fields
  loadData(bookJson, genreJson);
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


//CODE EXECUTED BY THIS JS //////////////////////////////////////
userAction();


//OTHER FUNCTIONS ///////////////////////////////////////// 

function loadData(json, genreJson) {
  document.title = json[0].title + " - Booky"
  let books = "";
    for(i=0; i<genreJson.length; i++){
        if(genreJson[i].id !== json[0].id){
        books = books + '<div class="col-sm-3 col-md-3 col-md-3 col-lg-3 p-b-50">'+
                '<div class="block2">'+
                    '<div class="block2-img wrap-pic-w of-hidden pos-relative">'+
                        '<img src="images/books/first-'+genreJson[i].id +'.jpg" alt="IMG-PRODUCT">'+

                        '<div class="block2-overlay trans-0-4">'+
                          '<a class="block2-overlay trans-0-4" href="book.html?id='+genreJson[i].id+'"></a>'+
                            '<div class="block2-btn-addcart w-size1 trans-0-4">'+
                              '<!-- Button -->'+
                              '<button class="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4" onclick="bookBtnClick('+genreJson[i].id+',\''+genreJson[i].title+'\',1)">'+
                                'Add to Cart'+
                              '</button>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+

                    '<div class="block2-txt p-t-20">'+
                        '<a href="book.html?id='+genreJson[i].id +'" class="block2-name dis-block s-text3 p-b-5">'+
                           genreJson[i].title+
                        '</a>'+

                        '<span class="block2-price m-text6 p-r-5">'+
                           genreJson[i].price.toFixed(2) + ' '+genreJson[i].currency +
                        '</span>'+
                    '</div>'+
                '</div>'+
            '</div>';
        }
    }

  bookId = json[0].id
  document.getElementById("FIRST").src = imgPath+"first-"+json[0].id+".jpg"
  document.getElementById("SECOND").src = imgPath+"second-"+json[0].id+".jpg"
  let minipic1 = document.getElementById("MINPIC_PARENT2").firstChild.firstChild.firstChild;
  let minipic2 = document.getElementById("MINPIC_PARENT2").firstChild.lastChild.firstChild;

  minipic1.src = imgPath+"first-"+json[0].id+".jpg"
  minipic2.src = imgPath+"second-"+json[0].id+".jpg"

  document.getElementById("TITLE").innerText = json[0].title;
  title = json[0].title;
  document.getElementById("TITLE_LINK").setAttribute('href', bookHtmlPath+"?id="+json[0].id)
  let authorsHtml = '<a href="'+authorHtmlPath+'?id='+json[0].author+'">'+ json[0].name + '</a>'
  //if author 2 to 4 are not undefined, add them to the authors list of the book
  for(i=2; i<=4; i++) {
    if(json[0]["author"+i] !== undefined) {
      authorsHtml += '<br><a href="'+authorHtmlPath+'?id='+json[0]["author"+i]+'">'+ json[0]['name'+i] + '</a>'
    }
  }
  document.getElementById("AUTHORS").innerHTML = authorsHtml
  
  document.getElementById("PRICE").innerText = json[0].price.toFixed(2) + " " + json[0].currency
  document.getElementById("CAPTION").innerText = json[0].caption
  document.getElementById("ISBN").innerText = "ISBN: " + json[0].isbn
  document.getElementById("GENRES").innerText = "Genre: "+ json[0].genres
  document.getElementById("DESCRIPTION").innerText = json[0].description
  document.getElementById("REVIEWS").innerText = reviewsParser(json[0].reviews)
  let themes = ""
  if(json[0].theme1 !== null)
    themes += json[0].theme1 + '\n'
  if(json[0].theme2 !== null)
    themes += json[0].theme2 + '\n'
  if(json[0].theme3 !== null)
    themes += json[0].theme3 

  document.getElementById("BOOK_NAME").innerText = json[0].title;
  document.getElementById("THEMES").innerText = themes;
  document.getElementById("SIMILAR_BOOKS").innerHTML = books;
  /*
  document.getElementById("BTN_ADDED_SCRIPT").innerText = 
  '$(\'.block2-btn-addcart\').each(function(){' +
      'var nameProduct = '+ json[0].title +';'+
			'$(this).on(\'click\', function(){'+
				'swal(nameProduct, "is added to cart !", "success");'+
			'});'+
		'});'+

		'$(\'.btn-addcart-product-detail\').each(function(){'+
			'var nameProduct = '+ json[0].title +';'+
			'$(this).on(\'click\', function(){'+
				'swal(nameProduct, "is added to cart!", "success");'+
			'});'+
		'});';  
  */
  document.getElementById("BTN_ADD_TO_CART").onclick = function() {
    let qty = document.getElementById("BOOK_QTY").value
    bookBtnClick(bookId, title, qty)
  }
}

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


function reviewsParser(reviews) {
  let arrayReviews = reviews.split(";");
  let fixedReviews = ""
  for(i=0; i<arrayReviews.length; i++){
    fixedReviews = fixedReviews + '\n' + arrayReviews[i];
  }
  return fixedReviews;
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


