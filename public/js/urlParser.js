/**
 * Function to parse the top url query part (the one after the '?')
 * stores inside the returned object the parameters queried and their values.
 * If the query is invalid then the object returned will have an invalid field set to true
 */
//Function needed to get the variable contained in the URL
exports.urlQueryParser = function () {

    let queryFields = {};
    queryFields.invalid = false;

    let queryString = window.location.search.substring(1);

    let args = queryString.split("&");

    for (let i=0;i<args.length;i++) {
      let pair = args[i].split("=");

      if(pair[0] === undefined || pair[1] === undefined) {
          queryFields.invalid = true;
          return queryFields;
      }


      if (typeof query_string[pair[0]] === "undefined") {
        query_string[pair[0]] = decodeURIComponent(pair[1]);
      } else if (typeof query_string[pair[0]] === "string") {
        let arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
        query_string[pair[0]] = arr;
      } else {
        query_string[pair[0]].push(decodeURIComponent(pair[1]));
      }
    } 
    return query_string;
  };