let authorPath = "../../v2/authors/";
let imgPath = "../images/authors/"





const userAction = async () => {
    let args = getURLArgs();
    
  let response = await fetch(authorPath+'');
  
  let authorJson = await response.json(); //extract JSON from the http response

  //if the id is valid but does not exist a book with that id return error 404 page
  if(authorJson[0] === undefined) {
      console.log("a book with specified id does not exist, or has no author!")
      writeErrorPage();
      return;
  }

  //load the data from json to html file's fields
  loadData(authorJson);
}

userAction();

/*var  authors = 
    '<div class="col-sm-12 col-md-6 col-lg-4 p-b-50">'+
        
        '<div class="block2">'+
            '<div class="block2-img wrap-pic-w of-hidden pos-relative">'+
                '<img src="images/authors/author-4.jpg" alt="IMG-PRODUCT">'+

                '<div class="block2-overlay trans-0-4">'+
                    '<a href="#" class="block2-btn-addwishlist hov-pointer trans-0-4">'+
                        '<i class="icon-wishlist icon_heart_alt" aria-hidden="true">'+'</i>'+
                        '<i class="icon-wishlist icon_heart dis-none" aria-hidden="true">'+'</i>'+
                    '</a>'+
                '</div>'+
            '</div>'+

            '<div class="block2-txt p-t-20">'+
                '<a href="authors-detail/author-georgeFriedman.html" class="block2-name dis-block s-text3 p-b-5">'+
                    'George Friedman'+
                '</a>'+
            '</div>'+
        '</div>'+
    '</div>';
    console.log(authors);*/

function loadData(json) {
    let authors = "";
    for(i=0; i<json.length; i++){

    authors =  authors + '<div class="col-sm-12 col-md-6 col-lg-4 p-b-50">'+
        
   '<div class="block2">'+
       '<div class="block2-img wrap-pic-w of-hidden pos-relative">'+
           '<img src="images/authors/author-' + json[i].id + '.jpg" alt="IMG-PRODUCT">'+

           '<div class="block2-overlay trans-0-4">'+
           '</div>'+
       '</div>'+

       '<div class="block2-txt p-t-20">'+
           '<a href="author.html?id='+ json[i].id +'" class="block2-name dis-block s-text3 p-b-5">'+
               json[i].name +
           '</a>'+
       '</div>'+
   '</div>'+
'</div>';
    }
    console.log(authors);

    document.getElementById("AUTHORS").innerHTML =  authors;
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