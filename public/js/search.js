let bookPath = "../../v2/books/"
let imgPath = "../images/books/"

let noResultRemoved = false;

const sponsoredField = async () => {
    let response = await fetch('../../v2/books/sponsored');
    let sponsoredJson = await response.json();
    loadSponsored(sponsoredJson);

}


const fillBooksField = async (isGetAll, searchString) => {
    console.log(searchString)
    //if is a * search, get all books
    if(isGetAll) {
        let response = await fetch(bookPath+'');
        let json = await response.json(); //extract JSON from the http response
    
        //if the std list of books could not be retrieved
        if(json[0] === undefined) {
            console.log("Could not retrieve standard books list")
            writeErrorPage();
            return;
        }
        loadBookData(json);
        //if is not a star search, search for what user selected
    } else {
        let response = await fetch(bookPath+'byTitle/'+searchString);
        let json = await response.json(); //extract JSON from the http response

        //load the data in the html
        loadBookData(json);
    }
}

const fillEventsField = async (isGetAll, searchString) => {
    //if is a * search, get all events
    if(isGetAll) {
        let response = await fetch("../../v2/events");
        let json = await response.json(); //extract JSON from the http response
    
        //if the std list of events could not be retrieved
        if(json[0] === undefined) {
            console.log("Could not retrieve standard events list")
            writeErrorPage();
            return;
        }
        loadEventData(json);
        //if is not a star search, search for what user selected
    } else {
        let response = await fetch('../../v2/events/byName/'+searchString);
        let json = await response.json(); //extract JSON from the http response
    
        //load the data in the html
        loadEventData(json);
    }
  }

  const fillAuthorsField = async (isGetAll, searchString) => {
    
    //if is a * search, get all authors
    if(isGetAll) {
        let response = await fetch('../../v2/authors');
        let json = await response.json(); //extract JSON from the http response
    
        //if the std list of authors could not be retrieved
        if(json[0] === undefined) {
            console.log("Could not retrieve standard books list")
            writeErrorPage();
            return;
        }
        loadAuthorData(json);
        //if is not a star search, search for what user selected
    } else {
        let response = await fetch('../../v2/authors/byName/'+searchString);
        let json = await response.json(); //extract JSON from the http response
    
        //load the data in the html
        loadAuthorData(json);
    }
  }



//code performed by this js //////////////////////////

fillSearchPage()


//other functions///////////////////////

function fillSearchPage() {
    let args = getURLArgs();

    let isGetAll = false;
    if(args.search === undefined || args.search === '*')
        isGetAll = true;
    let isBookSearched = args.books || false
    let isAuthorSearched = args.authors || false
    let isEventSearched = args.events || false

    //if nothing is searched for, search for everything instead
    if(!isBookSearched && !isAuthorSearched && !isEventSearched) {
        isBookSearched = true
        isAuthorSearched = true
        isEventSearched = true
    }
    var subtitle = "You looked for \"" + args.search + "\" in ";
    sponsoredField();
    if(isBookSearched){
        fillBooksField(isGetAll, args.search)
        subtitle += "Books"
    }
    if(isEventSearched){
        fillEventsField(isGetAll, args.search)
        subtitle += ", Events"
    }
    if(isAuthorSearched){
        fillAuthorsField(isGetAll, args.search)
        subtitle += ", Authors"
    }
    loadSubtitle(subtitle);

}

function loadSubtitle(title){
    document.getElementById("SUBTITLE").innerText = title;
  }

function loadSponsored(sponsoredJson){
    let sponsored = "";
    for(i=0; i<sponsoredJson.length; i++){
        sponsored =  sponsored + 
        '<li class="flex-w p-b-20">'+
            '<a href="book.html?id='+ sponsoredJson[i].id +'" class="dis-block wrap-pic-w w-size22 m-r-20 trans-0-4 hov4">'+
                '<img src="images/books/first-'+ sponsoredJson[i].id +'.jpg" alt="IMG-PRODUCT">'+
            '</a>'+

            '<div class="w-size23 p-t-5">'+
                '<a href="book.html?id='+ sponsoredJson[i].id +'" class="s-text20">'+
                sponsoredJson[i].title +
                '</a>'+
                '<br>'+
                '<span class="dis-block s-text17 p-t-6">'+
                sponsoredJson[i].price.toFixed(2) + ' ' + sponsoredJson[i].currency + 
                '</span>'+
            '</div>'+
        '</li>';
    }

    document.getElementById("SPONSORED").innerHTML =  sponsored;
}

function loadBookData(json) {
    let books = "";
    for(i=0; i<json.length; i++){
        books = books + '<div class="col-sm-12 col-md-6 col-lg-4 p-b-50">'+
                '<div class="block2">'+
                    '<div class="block2-img wrap-pic-w of-hidden pos-relative">'+
                        '<img src="images/books/first-'+ json[i].id +'.jpg" alt="IMG-PRODUCT">'+
                        
                        '<div class="block2-overlay trans-0-4">'+
                            '<a class="block2-overlay trans-0-4" href="book.html?id='+json[i].id+'">'+
                            '</a>'+
                            '<div class="block2-btn-addcart w-size1 trans-0-4">'+
                                '<!-- Button -->'+
                                '<button class="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">'+
                                    'Add to Cart'+
                                '</button>'+
                            '</div>'+
                            
                        '</div>'+
                    '</div>'+

                    '<div class="block2-txt p-t-20">'+
                        '<a href="book.html?id='+ json[i].id +'" class="block2-name dis-block s-text33 p-b-5">'+
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
    //if there were results, write them
    if(json.length > 0) {
        removeNoResultDiv()
        document.getElementById("BOOKS_H3").innerHTML = '<hr><h3 class="m-text244 t-center text-black">Results in books</h3><hr><br></br>'
        document.getElementById("BOOKS").innerHTML = books;
    }
}

//Load events data
function loadEventData(json) {
    let events = "";
    for(i=0; i<json.length; i++){
        events = events + '<div class="col-sm-12 col-md-6 col-lg-4 p-b-50">'+
        '<div class="block2">'+
            '<div class="block2-img wrap-pic-w of-hidden pos-relative">'+
                '<img src="images/events/event_small-'+ json[i].eid +'.jpg" alt="IMG-EVENT">'+
                '<a href="event.html?id='+json[i].eid+'">'+
                '<div class="block2-overlay trans-0-4>'+
                    '<div class="block2-btn-addcart w-size1 trans-0-4">'+
                    '</div>'+
                '</div>'+
                '</a>'+
            '</div>'+

            '<div class="block2-txt p-t-20">'+
                '<a href="event.html?id='+ json[i].eid +'" class="block2-name dis-block s-text33 p-b-5">'+
                    json[i].eventname+
                '</a>'+
                '<span class="block2-price m-text6 p-r-5">'+
                    json[i].date.substring(0, 10)+
                '</span>'+
            '</div>'+
        '</div>'+
    '</div>';
    }
    //if there were results, write them
    if(json.length > 0) {
        removeNoResultDiv()
        document.getElementById("EVENTS_H3").innerHTML = '<hr><h3 class="m-text244 t-center text-black">Results in events</h3><hr><br></br>'
        document.getElementById("EVENTS").innerHTML = events;
    }
}

//Load authors data
function loadAuthorData(json) {
    let authors = "";
    for(i=0; i<json.length; i++){
        authors = authors + '<div class="col-sm-12 col-md-6 col-lg-4 p-b-50">'+
        '<div class="block2">'+
            '<div class="block2-img wrap-pic-w of-hidden pos-relative">'+
                '<img src="images/authors/author-'+ json[i].id +'.jpg" alt="IMG-AUTHOR">'+
                '<a href="author.html?id='+json[i].id+'">'+
                '<div class="block2-overlay trans-0-4">'+
                    
                    '<div class="block2-btn-addcart w-size1 trans-0-4">'+
                    '</div>'+
                '</div>'+
                '</a>'+
            '</div>'+

            '<div class="block2-txt p-t-20">'+
                '<a href="author.html?id='+ json[i].id +'" class="block2-name dis-block s-text33 p-b-5">'+
                    json[i].name+
                '</a>'+
            '</div>'+
        '</div>'+
    '</div>';
    }
    //if there were results, write them
    if(json.length > 0) {
        removeNoResultDiv()
        document.getElementById("AUTHORS_H3").innerHTML = '<hr><h3 class="m-text244 t-center text-black">Results in authors</h3><hr><br></br>'
        document.getElementById("AUTHORS").innerHTML = authors;
    }
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

function removeNoResultDiv() {
    if(!noResultRemoved) {
        document.getElementById("NO_RESULTS").remove()
        noResultRemoved=true
    }
}