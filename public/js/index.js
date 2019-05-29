

const userAction = async () => {
  loadData();
}

userAction();



function loadData() {

var today = new Date();
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

document.getElementById("EVENT_MONTH").innerHTML = 
'<a href="events.html?month='+mm+'&year='+yyyy+'" class="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">'+
    'All Events this month'+
'</a>';
document.getElementById("BEST_SELLERS_OF_MONTH").innerHTML = 
'<a href="books.html?bestsellers&month='+mm+'&year='+yyyy+'" class="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">'+
    'Best Sellers of the month'+
'</a>';
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
