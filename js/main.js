// Random Quote Generator
//  Coded by Eralp Kor

var quote;
var author;
var quotesFrom = 'https://goo.gl/acLgHM'
$(document).ready(function() {
	function getNewQuote() {
		$.ajax({
			url: "https://api.forismatic.com/api/1.0/",
			jsonp: "jsonp",
			dataType: "jsonp",
			data: {
				method: "getQuote",
				lang: "en",
				format: "jsonp"
			},
			success: function(response){
				quote = response.quoteText;
				author = response.quoteAuthor;
				$("#quote").text(quote);
				if (author){
					$("#author").text("--" + author);
					} else {
						$("#author").text("- unknown -");
				}
				//console.log(response.quoteText + "--" +response.quoteAuthor)
			}
		});
	}
	getNewQuote();
					
	$(".get-quote").on("click", function(event){
		event.preventDefault();
		getNewQuote();
	})

	$(".share-quote").on("click", function(event){
		event.preventDefault();
		window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote + " -- " + author + "\n" + quotesFrom));
	})
});

