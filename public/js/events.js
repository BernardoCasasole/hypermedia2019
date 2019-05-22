let eventsPath = "../../v2/events/";
let imgPath = "../images/events/"





const userAction = async () => {
    let args = getURLArgs();
    
  let response = await fetch(eventsPath+'');
  
  let eventsJson = await response.json(); //extract JSON from the http response

  //if the id is valid but does not exist a book with that id return error 404 page
  if(eventsJson[0] === undefined) {
      console.log("a book with specified id does not exist, or has no author!")
      writeErrorPage();
      return;
  }
 
  loadData(eventsJson);
}

userAction();



function loadData(json) {
    let events = "";
    for(i=0; i<json.length; i++){
    events =  events + '<div class="item-blog p-b-80">'+
                            '<a href="event.html?id='+json[i].id+'" class="item-blog-img pos-relative dis-block hov-img-zoom">'+
                                '<img src="images/events/event_big-'+ json[i].id +'.png" alt="IMG-BLOG">'+
                            
                                '<span class="item-blog-date dis-block flex-c-m pos1 size17 bg4 s-text1">'+
                                    json[i].date.split('T')[0] +
                                '</span>'+
                            '</a>'+
                            
                            '<div class="item-blog-txt p-t-33">'+
                                '<h4 class="p-b-11">'+
                                    '<a href="event.html?id='+json[i].id+'" class="m-text24">'+
                                        json[i].eventName +
                                    '</a>'+
                                '</h4>'+
                            
                                '<div class="s-text8 flex-w flex-m p-b-21">'+
                                    '<span>'+
                                        'By <a href="author.html?id='+json[i].author+'">'+ json[i].name +'</a>'+
                                        '<span class="m-l-3 m-r-6">|</span>'+
                                    '</span>'+
                            
                                    '<span>'+
                                        'Presented Book: <a href="book.html?id='+ json[i].author+'">' + json[i].presentedBook+ '</a>'+
                                        '<span class="m-l-3 m-r-6">|</span>'+
                                    '</span>'+
                            
                                    '<span>'+
                                        +json[i].subscribers + ' Subscribers'+
                                    '</span>'+
                                '</div>'+
                            
                                '<p class="p-b-12">'
                                    +json[i].details +
                                '</p>'+
                            
                                
                            '</div>'+
                        '</div>';
    }


    document.getElementById("EVENTS").innerHTML =  events;
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
