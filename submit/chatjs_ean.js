jQuery(function($){

//var txtMsg = [];

	
function myShow(json){
	$('.messages').append("<li>"+json.text+"</li>")
};

function myFetch(text) {
	$.ajax("https://api.parse.com/1/classes/chats/", {
           data: {"text": text}
           dataType: "jsonp",
           cache: false,
           success: function(json){
           		myShow();
           		$.each(messages, function(i, text){
           		$('.messages').replaceWith('<li>'+text+'</li>');
				})
           	},
           	error: function(text) {
           	$('.messages').prepend('<li>'+"D'oh!! an error..."+'</li>');
           	console.log(text.statusText);
		}
	});
};