let booksPath = "../../v2/books/";
let imgPath = "../images/books/"
let bookHtmlPath = "../book.html"
let authorHtmlPath = "../author.html"
let cartPath = "../../v2/cart/"

let bookId


const userAction = async () => {
    let args = getURLArgs();
    let id = args.id;

    //if the id of a book is undefined, return error 404 and a link to the home
  if (id === undefined) {
    writeErrorPage();
    return;
  }
  console.log(booksPath+id);
  let response = await fetch(booksPath+id+'');
  
  let bookJson = await response.json(); //extract JSON from the http response

  //if the id is valid but does not exist a book with that id return error 404 page
  if(bookJson[0] === undefined || bookJson[0].author === undefined) {
      console.log("a book with specified id does not exist, or has no author!")
      writeErrorPage();
      return;
  }
  console.log('retrieving ../../v2/author/'+bookJson[0].author+'')

  response = await fetch('../../v2/author/'+bookJson[0].author+'');
  let authorJson = await response.json();


  //load the data from json to html file's fields
  loadData(bookJson, authorJson);
}

userAction();

function loadData(json, authorJson) {
  bookId = json[0].id
  console.log("logging jsons")
  console.log(json);
  //console.log(authorJson);
  document.getElementById("FIRST").src = imgPath+"first-"+json[0].id+".jpg"
  document.getElementById("SECOND").src = imgPath+"second-"+json[0].id+".jpg"
  let minipic1 = document.getElementById("MINPIC_PARENT2").firstChild.firstChild.firstChild;
  let minipic2 = document.getElementById("MINPIC_PARENT2").firstChild.lastChild.firstChild;

  minipic1.src = imgPath+"first-"+json[0].id+".jpg"
  minipic2.src = imgPath+"second-"+json[0].id+".jpg"

  document.getElementById("TITLE").innerText = json[0].title;
  document.getElementById("TITLE_LINK").setAttribute('href', bookHtmlPath+"?id="+json[0].id)
  document.getElementById("AUTHOR").innerText = authorJson[0].name;
  document.getElementById("AUTHOR_LINK").setAttribute('href', authorHtmlPath+"?id="+json[0].author)

  document.getElementById("PRICE").innerText = json[0].price.toFixed(2) + " " + json[0].currency
  document.getElementById("CAPTION").innerText = json[0].caption
  document.getElementById("ISBN").innerText = "ISBN: " + json[0].isbn
  document.getElementById("GENRES").innerText = "Genre: "+ json[0].genres
  document.getElementById("DESCRIPTION").innerText = json[0].description
  document.getElementById("REVIEWS").innerText = reviewsParser(json[0].reviews)
  document.getElementById("THEMES").innerText = json[0].theme1 + '\n' + json[0].theme2 + '\n' + json[0].theme3

  
  document.getElementById("BTN_ADD_TO_CART").onclick = function() {
    postAddToCart(bookId)
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


function postAddToCart(bookId) {
  let qty = document.getElementById("BOOK_QTY").value
  console.log("clicked add to cart button, with id: "+bookId+", qty: "+qty)
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

fetch(cartPath+'addBook/'+bookId, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  },
  body: formBody
})
}