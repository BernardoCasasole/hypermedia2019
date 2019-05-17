let bookPath = "../../v2/books/";
let imgPath = "../images/books/"



const userAction = async () => {
    let args = getURLArgs();
    let id = args.id;

    //if the id of a book is undefined, return error 404 and a link to the home
  if (id === undefined) {
    writeErrorPage();
    return;
  }
  let response = await fetch(bookPath+id+'');
  
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
  console.log("logging jsons")
  console.log(json);
  //console.log(authorJson);
  document.getElementById("FIRST").src = imgPath+"first-"+json[0].id+".jpg"
  document.getElementById("SECOND").src = imgPath+"second-"+json[0].id+".jpg"

  document.getElementById("TITLE").innerText = json[0].title;
  document.getElementById("AUTHOR").innerText = authorJson[0].name;
  document.getElementById("PRICE").innerText = json[0].price + " " + json[0].currency
  document.getElementById("CAPTION").innerText = json[0].caption
  document.getElementById("ISBN").innerText = "ISBN: " + json[0].isbn
  document.getElementById("CATEGORIES").innerText = json[0].categories
  document.getElementById("DESCRIPTION").innerText = json[0].description
  //document.getElementById("ADDITIONAL_INFO").innerText = json[0].additional_info
  document.getElementById("REVIEWS").innerText = json[0].reviews
  document.getElementById("TAGS").innerText = json[0].tags
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
