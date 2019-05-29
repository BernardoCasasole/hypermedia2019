let eventsPath = "../../v2/events/";
let imgPath = "../images/events/"



const userAction = async () => {
    let args = getURLArgs();
    let id = args.id;
    console.log(args);
    //if the id of a book is undefined, return error 404 and a link to the home
  if (id === undefined) {
    writeErrorPage();
    return;
  }
  let response = await fetch(eventsPath+id+'');
  
  let eventJson = await response.json(); //extract JSON from the http response
  console.log(eventJson);
  //if the id is valid but does not exist a book with that id return error 404 page
  if(eventJson[0] === undefined || eventJson[0].author === undefined) {
      console.log("an event with specified id does not exist, or has no name!")
      writeErrorPage();
      return;
  }

  response = await fetch('../../v2/author/'+eventJson[0].author+'');
  let authorJson = await response.json();
  response = await fetch('../../v2/books/'+eventJson[0].author+'');
  let bookJson = await response.json();
  response = await fetch('../../v2/books/sponsored');
  let sponsoredJson = await response.json();

  //load the data from json to html file's fields
  loadData(eventJson, authorJson, bookJson,sponsoredJson);
}

userAction();



function loadData(json, authorJson, bookJson, sponsoredJson) {
  let sponsoredHtml = "";
  for(i=0;i<sponsoredJson.length && i<4;i++){
  sponsoredHtml = sponsoredHtml + '<a href="../book.html?id='+sponsoredJson[i].id+'" class="dis-block wrap-pic-w w-size22 m-r-20 trans-0-4 hov4">'+
                                    '<img src="../images/books/first-'+sponsoredJson[i].id+'.jpg" alt="IMG-PRODUCT">'+
                                  '</a>'+
                                  '<div class="p-t-5">'+
                                      '<a href="../book.html?id='+sponsoredJson[i].id+'" class="s-text20">'+
                                      sponsoredJson[i].title +
                                      '</a>'+
                                      '<span class="dis-block s-text17 p-t-6">'+
                                      sponsoredJson[i].price.toFixed(2) + ' ' + sponsoredJson[i].currency  +
                                      '</span>'+
                                  '</div>' + '<br>'}
  

  document.getElementById("EVENT_IMG").src = imgPath+"event_big-"+json[0].id+".png";
  document.getElementById("EVENT_NAME").innerText = json[0].eventName;
  document.getElementById("EVENT_NAME_2").innerText = json[0].eventName;
  document.getElementById("EVENT_DESCRIPTION").innerText = json[0].details;
  document.getElementById("EVENT_DETAILS").innerHTML = "By" + '<a href="author.html?id='+json[0].id+'">' + '&nbsp;' + authorJson[0].name + '&nbsp;' + '</a>' + ' | ' + "Date: " + json[0].date.split('T')[0] + ' | ' + "Presented book:" + '<a href="book.html?id='+json[0].id+'">' + '&nbsp;'  + json[0].presentedBook + '&nbsp;' + '</a>' + ' | ' + "Subscribers: " + json[0].subscribers;
  document.getElementById("BOOK_RELATED").innerHTML = 

            '<a href="../book.html?id='+json[0].id+'" class="dis-block wrap-pic-w w-size22 m-r-20 trans-0-4 hov4">'+
              '<img src="../images/books/first-'+json[0].id+'.jpg" alt="IMG-PRODUCT">'+
            '</a>'+
            '<div class="p-t-5">'+
                '<a href="../book.html?id='+json[0].id+'" class="s-text20">'+
                    bookJson[0].title +
                '</a>'+
                '<br>'+
                '<a href="../author.html?id='+json[0].id+'" class="s-text22">'+
                    authorJson[0].name +
                '</a>'+
                '<span class="dis-block s-text17 p-t-6">'+
                  bookJson[0].price.toFixed(2) + ' ' + bookJson[0].currency  +
                '</span>'+
            '</div>';


document.getElementById("BOOK_SPONSORED").innerHTML = sponsoredHtml;
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
