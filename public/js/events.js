let eventsPath = "../../v2/events/";
let imgPath = "../images/events/"





const userAction = async () => {
    let args = getURLArgs();
    var eventsJson;
  if(args.month !== undefined && args.year !== undefined){
    let response = await fetch(eventsPath+'byMonth/'+args.month+'/'+args.year);
    eventsJson = await response.json(); //extract JSON from the http response
  }
  else{
  let response = await fetch(eventsPath+'');

  eventsJson = await response.json(); //extract JSON from the http response
  }
  //if the id is valid but does not exist a book with that id return error 404 page
  if(eventsJson[0] === undefined) {
      console.log("unable to find events!")
      writeErrorPage();
      return;
  }

  var today = new Date();
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  var currentMonth = mm + '/' + yyyy;

  response = await fetch('../../v2/books/sponsored');
  let sponsoredJson = await response.json();

  response = await fetch(eventsPath+'byMonth/'+currentMonth);
  let eventOfMonthJson = await response.json();
 
  loadSubtitle("All events in "+ monthParcer(args.month))
  loadData(eventsJson, sponsoredJson, eventOfMonthJson);
}

function loadSubtitle(title){
    document.getElementById("SUBTITLE").innerText = title;
  }

function monthParcer(month){
    let monthString = "";
    switch (month) {
        case "1":  monthString = "January";
                 break;
        case "2":  monthString = "February";
                 break;
        case "3":  monthString = "March";
                 break;
        case "4":  monthString = "April";
                 break;
        case "5":  monthString = "May";
                 break;
        case "6":  monthString = "June";
                 break;
        case "7":  monthString = "July";
                 break;
        case "8":  monthString = "August";
                 break;
        case "9":  monthString = "September";
                 break;
        case "10": monthString = "October";
                 break;
        case "11": monthString = "November";
                 break;
        case "12": monthString = "December";
                 break;
        default: monthString = "Invalid month";
                 break;
    }
    return monthString;
}  

userAction();


function loadData(json, sponsoredJson, eventOfMonthJson) {



    let events = "";
    for(i=0; i<json.length; i++){
    events =  events + '<div class="item-blog p-b-80">'+
                            '<a href="event.html?id='+json[i].eid+'" class="item-blog-img pos-relative dis-block hov-img-zoom">'+
                                '<img src="images/events/event_big-'+ json[i].eid +'.png" alt="IMG-BLOG">'+
                            
                                '<span class="item-blog-date dis-block flex-c-m pos1 size17 bg4 s-text1">'+
                                    json[i].date.split('T')[0] +
                                '</span>'+
                            '</a>'+
                            
                            '<div class="item-blog-txt p-t-33">'+
                                '<h4 class="p-b-11">'+
                                    '<a href="event.html?id='+json[i].eid+'" class="m-text24">'+
                                        json[i].eventname +
                                    '</a>'+
                                '</h4>'+
                            
                                '<div class="s-text8 flex-w flex-m p-b-21">'+
                                    '<span>'+
                                        'By <a href="author.html?id='+json[i].author+'">'+ json[i].name +'</a>'+
                                        '<span class="m-l-3 m-r-6">|</span>'+
                                    '</span>'+
                            
                                    '<span>'+
                                        'Presented Book: <a href="book.html?id='+ json[i].id+'">' + json[i].title+ '</a>'+
                                        '<span class="m-l-3 m-r-6">|</span>'+
                                    '</span>'+
                            
                                    '<span>'+
                                        +json[i].subscribers + ' Subscribers'+
                                    '</span>'+
                                '</div>'+
                            
                                '<p class="p-b-12">'
                                    +json[i].details1 +
                                '</p>'+
                            
                                
                            '</div>'+
                        '</div>';
    }
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

    let eventOfMonth = "";
    for(i=0; i<eventOfMonthJson.length; i++){
        eventOfMonth =  eventOfMonth + 
        '<li class="flex-w p-b-20">'+
            '<a href="event.html?id='+ eventOfMonthJson[i].eid +'" class="dis-block wrap-pic-w w-size22 m-r-20 trans-0-4 hov4">'+
                '<img src="images/events/event_small-'+ eventOfMonthJson[i].eid +'.jpg" alt="IMG-PRODUCT">'+
            '</a>'+

            '<div class="w-size23 p-t-5">'+
                '<a href="event.html?id='+ eventOfMonthJson[i].eid +'" class="s-text20">'+
                eventOfMonthJson[i].eventname +
                '</a>'+
                '<br>'+
                '<span class="dis-block s-text17 p-t-6">'+
                eventOfMonthJson[i].date.split('T')[0] +
                '</span>'+
            '</div>'+
        '</li>';
    }
    document.getElementById("EVENTS").innerHTML =  events;
    document.getElementById("SPONSORED").innerHTML =  sponsored;
    document.getElementById("EVENT_MONTH").innerHTML = eventOfMonth;
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
