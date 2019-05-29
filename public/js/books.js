let bookPath = "../../v2/books/"
let imgPath = "../images/books/"
let themePath = "../../v2/books/byTheme/"
let genrePath = "../../v2/books/byGenre/"





const userAction = async () => {
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

userAction();

function loadData(json) {
    let books = "";
    for(i=0; i<json.length; i++){
        books = books + '<div class="col-sm-12 col-md-6 col-lg-4 p-b-50">'+
                '<div class="block2">'+
                    '<div class="block2-img wrap-pic-w of-hidden pos-relative">'+
                        '<img src="images/books/first-'+ json[i].id +'.jpg" alt="IMG-PRODUCT">'+

                        '<div class="block2-overlay trans-0-4">'+
                            '<div class="block2-btn-addcart w-size1 trans-0-4">'+
                                '<!-- Button -->'+
                                '<button class="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">'+
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
                        '</a>'+

                        '<span class="block2-price m-text6 p-r-5">'+
                            json[i].price.toFixed(2) + ' '+ json[i].currency +
                        '</span>'+
                    '</div>'+
                '</div>'+
            '</div>';
    }

    document.getElementById("BOOKS").innerHTML = books;
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
