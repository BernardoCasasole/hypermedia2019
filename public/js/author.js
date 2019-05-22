let authorPath = "../../v2/author/";
let imgPath = "../images/authors/"


const userAction = async () => {
    let args = getURLArgs();
    let id = args.id;
    console.log(authorPath+id)
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
  console.log('retrieving ../../v2/author/'+authorJson[0].id+'')

  response = await fetch('../../v2/author/'+authorJson[0].id+'');
  let authorsJson = await response.json();
  //console.log(response.json());


  //load the data from json to html file's fields
  loadData(authorJson, authorsJson);
}

userAction();

function loadData(json, authorsJson) {
  console.log("logging jsons")
  //console.log(authorJson);
  document.getElementById("AUTHOR_PHOTO").src = imgPath+"author-"+json[0].id+".jpg"

  document.getElementById("NAME").innerText = json[0].name
  document.getElementById("AUTHOR_DESCRIPTION").innerText = json[0].description
  document.getElementById("BIOGRAPHY").innerText = json[0].biography
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