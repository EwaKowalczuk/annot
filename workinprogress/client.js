var Client = new require('node-rest-client').Client;
client = new Client();
var baseuri = "https://www.wikidata.org/w/api.php?";

// testcode for calling the functions
getAutoCompleteSuggestions("pari");
// getURI
getURI("Paris");
// getImage
getImage("Q90");

// call this to get a list of words based on your start characters
function getAutoCompleteSuggestions(start_chars) {
	// registering method for wikipedia opensearch call
	client.registerMethod("jsonMethod", "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + start_chars + "&limit=5&namespace=0&format=json", "GET");
	client.methods.jsonMethod(function(data) {
		callbackAutoCompleteSuggestions(data);
	});
}

// call this to get a Wikidata URI based on a term
function getURI(term) {
	client.registerMethod("jsonMethod", baseuri + "action=wbsearchentities&search=" + term + "&language=en&format=json&limit=1", "GET");
	client.methods.jsonMethod(function(data) {
		callbackURI(data);
	});
}

// call this to get the image for a Wikidata entity
function getImage(entity) {
	client.registerMethod("jsonMethod", baseuri + "action=wbgetentities&format=json&ids=" + entity + "&props=claims", "GET");
	client.methods.jsonMethod(function(data) {
		callbackImage(data);
	});
}

// copy this and use it as your callback function for getAutoCompleteSuggestions   
function callbackAutoCompleteSuggestions(result) {
	parsed_result = JSON.parse(result)[1];
	// print for debugging - remove this for use in production
	console.log(parsed_result);
}

// copy this and use it as your callback function for getURI
function callbackURI(result) {
	parsed_result = JSON.parse(result);
	if(parsed_result.search[0] != undefined) {
		console.log(parsed_result.search[0].url);
	}
}

// copy this and use it as your callback function for getImage
function callbackImage(result) {
	parsed_result = JSON.parse(result);
	imagelink = "http://commons.wikimedia.org/w/thumb.php?f="+parsed_result.entities.Q90.claims.P18[0].mainsnak.datavalue.value+"&w=500";
	console.log(imagelink);
}
