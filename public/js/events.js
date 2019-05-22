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

  let authorJson = {};

  for(i=0; i < eventsJson.length; i++){
      response = await fetch('../../v2/author/'+eventsJson[i].author+'');
      authorJson[i] = await response.json();
  }
  
  //let authorJson = await response.json();
  //console.log(eventsJson);
  //load the data from json to html file's fields
  //console.log(authorJson[0]);
  console.log(authorJson[1][0])
  loadData(eventsJson, authorJson);
}

userAction();

/*let events = '<div class="item-blog p-b-80">'+
'<a href="events-detail/event-detail-prisoners.html" class="item-blog-img pos-relative dis-block hov-img-zoom">'+
    '<img src="images/events/event_small-11.jpg" alt="IMG-BLOG">'+

    '<span class="item-blog-date dis-block flex-c-m pos1 size17 bg4 s-text1">'+
        '18 Sept, 2019'+
    '</span>'+
'</a>'+

'<div class="item-blog-txt p-t-33">'+
    '<h4 class="p-b-11">'+
        '<a href="event-detail-prisoners.html" class="m-text24">'+
            'Prisoners of Geography: Everything You Need to Know About Global Politics'+
        '</a>'+
    '</h4>'+

    '<div class="s-text8 flex-w flex-m p-b-21">'+
        '<span>'+
            'By <a href="author-michelleObama.html">Tim Marshall</a>'+
            '<span class="m-l-3 m-r-6">|</span>'+
        '</span>'+

        '<span>'+
            'Geopolitical'+
            '<span class="m-l-3 m-r-6">|</span>'+
        '</span>'+

        '<span>'+
            '8 Comments'+
        '</span>'+
    '</div>'+

    '<p class="p-b-12">'+
        'All leaders are constrained by geography. Their choices are limited by mountains, rivers, seas and concrete. Yes, to follow world events you need to understand people, ideas and movements – but if you don’t know geography, you’ll never have the full picture.'+
    '</p>'+

    
'</div>'+
'</div>';*/

function loadData(json, authorJson) {
    //console.log(json);
    let events = "";
    for(i=0; i<json.length; i++){
       // console.log(authorJson[i].details)
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
                                        json[i].name +
                                    '</a>'+
                                '</h4>'+
                            
                                '<div class="s-text8 flex-w flex-m p-b-21">'+
                                    '<span>'+
                                        'By <a href="author.html?id='+json[i].author+'">'+ authorJson[i][0].name +'</a>'+
                                        '<span class="m-l-3 m-r-6">|</span>'+
                                    '</span>'+
                            
                                    '<span>'+
                                        'Presented Book: <a href="book.html?id='+json[i].author+'">' + json[i].presentedBook+ '</a>'+
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
    //console.log(events);

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
