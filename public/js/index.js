

const userAction = async () => {
  response = await fetch('../../v2/books/sponsored');
  let sponsoredJson = await response.json();
  loadData(sponsoredJson);
}

userAction();



function loadData(sponsoredJson) {

var today = new Date();
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

document.getElementById("EVENT_MONTH").innerHTML = 
'<a href="events.html?month='+mm+'&year='+yyyy+'" class="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">'+
    'All Events this month'+
'</a>';
document.getElementById("BEST_SELLERS_OF_MONTH").innerHTML = 
'<a href="books.html?bestsellers" class="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">'+
    'Best Sellers of the month'+
'</a>';

let books = "";
for(i=0; i<sponsoredJson.length; i++){
    books = books + '<div class="col-sm-3 col-md-3 col-md-3 col-lg-3 p-b-50">'+
            '<div class="block2">'+
                '<div class="block2-img wrap-pic-w of-hidden pos-relative">'+
                    '<img src="images/books/first-'+sponsoredJson[i].id +'.jpg" alt="IMG-PRODUCT">'+

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
