var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
queryURL += '?' + $.param({
 'api-key': "eddc11ba88124385b7361ea58e855334",
 'q': "the president",
 'begin_date': "20100101",
 'end_date': "20141231",
 'page': 0,
 'facet_filter': "true"
});

console.log(queryURL);

$.ajax({
    url: queryURL,
    method: 'GET',
}).done(function(results) {
    console.log(results.response.docs);
    var articles = results.response.docs;
})
