let bookPath = "../../v2/books/"
let imgPath = "../images/books/"
let themePath = "../../v2/books/byTheme/"
let genrePath = "../../v2/books/byGenre/"







const fillBooksPage = async () => {
  let args = getURLArgs();
  if(args.theme !== undefined){
    let response = await fetch(themePath+args.theme+'');
        
    let themeJson = await response.json(); //extract JSON from the http response

    //if the id is valid but does not exist a book with that id return error 404 page
    if(themeJson[0] === undefined) {
        console.log("a book with specified theme does not exist!")
        writeErrorPage();
        return;
    }
    loadData(themeJson);
  }else if(args.genre !== undefined){
    console.log(genrePath+args.genre+'')
    let response = await fetch(genrePath+args.genre+'');
        
    let genreJson = await response.json(); //extract JSON from the http response

    //if the id is valid but does not exist a book with that id return error 404 page
    if(genreJson[0] === undefined) {
        console.log("a book with specified genre does not exist!")
        writeErrorPage();
        return;
    }
    loadData(genreJson);
    }else if(args.sponsored !== undefined){
        response = await fetch('../../v2/books/sponsored');
        sponsoredJson = await response.json();
    
        //if the id is valid but does not exist a book with that id return error 404 page
        if(sponsoredJson[0] === undefined) {
            console.log("no sponsored books found!")
            writeErrorPage();
            return;
        }
        loadData(sponsoredJson)
    }else if(args.bestsellers !== undefined){
        var today = new Date();
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        var currentMonth = mm + '/' + yyyy;
        console.log('../../v2/books/bySoldCopiesInMonth/'+currentMonth+'?limit=9')
        response = await fetch('../../v2/books/bySoldCopiesInMonth/'+currentMonth+'?limit=9');
        bestsellersJson = await response.json();
    
        //if the id is valid but does not exist a book with that id return error 404 page
        if(bestsellersJson[0] === undefined) {
            console.log("no book found!")
            writeErrorPage();
            return;
        }
        loadData(bestsellersJson)
    } else {
        let response = await fetch(bookPath+'');
        
        let booksJson = await response.json(); //extract JSON from the http response

        //if the id is valid but does not exist a book with that id return error 404 page
        if(booksJson[0] === undefined) {
            console.log("a book with specified id does not exist, or has no author!")
            writeErrorPage();
            return;
        }
        loadData(booksJson);
    }
}
//JS ACTIONS/////////////////////////////

fillBooksPage();

//OTHER FUNCTIONS ///////////////////////////////

function loadData(json) {
    let books = "";
    for(i=0; i<json.length; i++){
        books = books + '<div class="col-sm-12 col-md-6 col-lg-4 p-b-50">'+
                '<div class="block2">'+
                    '<div class="block2-img wrap-pic-w of-hidden pos-relative">'+
                        '<img src="images/books/first-'+ json[i].id +'.jpg" alt="IMG-PRODUCT">'+

                        '<div class="block2-overlay trans-0-4">'+
                        '<a class="block2-overlay trans-0-4" href="book.html?id='+json[i].id+'"></a>'+
                            '<div class="block2-btn-addcart w-size1 trans-0-4">'+
                                '<!-- Button -->'+
                                '<button class="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4" onclick="javascript:bookBtnClick('+json[i].id+',\''+json[i].title.toString()+'\')">'+
                                    'Add to Cart'+
                                '</button>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+

                    '<div class="block2-txt p-t-20">'+
                        '<a href="book.html?id='+ json[i].id +'" class="block2-name dis-block s-text3 p-b-5">'+
                            json[i].title+
                        '</a>'+
                        '<a href="author.html?id='+ json[i].author +'" class="block2-name dis-block s-text3 p-b-5">'+
                            json[i].name+
                        '</a>'
        //add the extra authors if any
        for (j=2; j<=4;j++) {
          if(json[i]["name"+j] !== null)
          books += '<a href="author.html?id='+ json[i]["author"+j] +'" class="block2-name dis-block s-text3 p-b-5">'+
                    json[i]["name"+j]+
                    '</a>'
        }
        books +=        '<span class="block2-price m-text6 p-r-5">'+
                            json[i].price.toFixed(2) + ' '+ json[i].currency +
                        '</span>'+
                    '</div>'+
                '</div>'+
            '</div>';
    }
    document.getElementById("BOOKS").innerHTML = books;
}


function bookBtnClick(btn_id, title) {
    if(isLogged) {
        postAddToCart(btn_id, 1)
        swal(title, "is added to cart !", "success");
    }
    else {
        window.location.href = "../register.html"
    }
  }

const postAddToCart = async (bookId, addQty) => {
    let details = {
      'bookId': bookId,
      'qty' : addQty,
    };
  
  let formBody = [];
  for (var property in details) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  
  let ans = await fetch('../../v2/cart/addBook', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: formBody
  })
  
    updateDynamicCart()
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
