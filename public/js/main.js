/* functions for general use */

/* This function returns the value associated with 'whichParam' on the URL */

function getURLParameters(whichParam) 
{
	var pageURL = window.location.search.substring(1);
	var pageURLVariables = pageURL.split('&');
	for(var i=0; i<pageURLVariables.length; i++){
		var paramaterName = pageURLVariables[i].split('=');
		if (paramaterName[0] == whichParam) {
			return paramaterName[1];
		}
	}
}

var username = getURLParameters('username');
if ('undefined' == typeof username || !username){
	username = 'Anonymous_'+Math.random();
}

$('#messages').append('<h4>'+username+'</h4>');
















